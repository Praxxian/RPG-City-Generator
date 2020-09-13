class CityGenerator {
    Settings
    NameGens
    MaxPopVariance = 0.3
    City
    Races

    constructor(settings) {
        this.Settings = settings;
        this.populateNameGenerators();
        this.groupRaceFrequencies();
    }

    populateNameGenerators() {
        this.NameGens = {}
        this.Settings.Races.forEach(r => {
            var race = r.race;
            Object.keys(Gender).forEach(k => {
                var g = Gender[k];
                var key = new NameGenKey(race, g);
                this.NameGens[key] = new NameGenerator(key);
            })
        });
    }

    groupRaceFrequencies() {
        this.Races = {}
        this.Settings.Races.forEach(r => {
            var freqGroup = this.Races[r.frequency];
            if (freqGroup)
                freqGroup.push(r.race);
            else
                this.Races[r.frequency] = [r.race];
        });
    }

    getNew() {
        var thisCG = this;
        var promise = new Promise(function (resolve, reject) {
            thisCG.City = new City();
            thisCG.createPopulation();
            thisCG.matchFamilies();
            thisCG.defaultFamilies();
            resolve(thisCG.City);
        })
        return promise;
    }

    createPopulation() {
        var percentChange = Math.random() * this.MaxPopVariance * 2 - this.MaxPopVariance;
        var size = CitySize.match(this.Settings.CitySize);
        var popSize = size.avgSize * (1 + percentChange);
        var noblePopSize = Math.floor(popSize * 0.005);
        var merchPopSize = Math.floor(popSize * 0.015);
        var tradePopSize = Math.floor(popSize * 0.18);
        var peasantPopSize = Math.floor(popSize * 0.8);
        this.City.People = [];
        this.createPeopleByCaste(Caste.NOBLE, noblePopSize);
        this.createPeopleByCaste(Caste.MERCANTILE, merchPopSize);
        this.createPeopleByCaste(Caste.TRADESMEN, tradePopSize);
        this.createPeopleByCaste(Caste.PEASANT, peasantPopSize);
    }

    createPeopleByCaste(caste, count) {
        if (isNaN(count))
            return;
        var ageRandom = caste.ageRandom;
        for (var i = 0; i < count; i++) {
            var person = new Person();
            person.Caste = caste;
            person.Age = Math.abs(ageRandom.next());
            person.FirstName = `NPC_${Math.floor(Math.random() * 100000)}`;
            person.LastName = Math.floor(Math.random() * 100000);
            person.Gender = Math.random() > 0.5 ? Gender.FEMALE : Gender.MALE;
            var raceRoll = Math.random();
            person.RaceFrequency = RaceFrequency.COMMON;
            if (raceRoll < 0.33 && raceRoll > 0.01)
                person.RaceFrequency = RaceFrequency.UNCOMMON;
            else if (raceRoll <= 0.01)
                person.RaceFrequency = RaceFrequency.RARE;
            var freqGroup = this.Races[person.RaceFrequency];
            if (this.Races[person.RaceFrequency])
                person.Race = getRandom(freqGroup);
            else
                person.Race = getRandom(this.Races[RaceFrequency.COMMON]);
            person.RaceAge = this.adjustAgeByRace(person.Race, person.Age);
            person.Appearance = person.Age >= WorkingHumanAge && Math.random() > 0.67 ? getRandom(Appearances) : null;
            person.Personality = new Personality();
            person.Personality.Openess = PersonalityRandom.next();
            person.Personality.Conscientiousness = PersonalityRandom.next();
            person.Personality.Extraversion = PersonalityRandom.next();
            person.Personality.Agreeableness = PersonalityRandom.next();
            person.Personality.Neuroticisms = PersonalityRandom.next();
            this.City.People.push(person);
        }
    }

    matchFamilies() {
        for (var i = 0; i < this.City.People.length; i++) {
            var spouse1 = this.City.People[i];
            if (spouse1.Family || spouse1.Age < AdultHumanAge)
                continue;
            var family = new Family();
            family.LastName = spouse1.LastName;
            family.Caste = spouse1.Caste;
            family.add(spouse1);

            // Spouse 2
            var spouse2Gender = spouse1.Gender == Gender.MALE ? Gender.FEMALE : Gender.MALE;
            if (Math.random() >= 0.05)
                spouse2Gender = spouse1.Gender;
            var spouse2 = null;
            for (var j = i + 1; j < this.City.People.length; j++) {
                spouse2 = this.City.People[j];
                var outgoing = spouse1.Personality.Openess >= 67;
                if (spouse2.Family
                    || spouse2.Age < AdultHumanAge
                    || Math.abs(spouse2.Age - spouse1.Age) > 10
                    || spouse2Gender != spouse2.Gender
                    || spouse2.Caste != spouse1.Caste
                    || (spouse2.Race != spouse1.Race && !outgoing))
                    continue;
                // TODO personality difference?
                family.add(spouse2);
                spouse2.Spouse = spouse1.fullName();
                spouse1.Spouse = spouse2.fullName();
                break;
            }

            // Children
            if (spouse2 || Math.random() < 0.1) {
                var minParentAge = spouse1.Age;
                if (spouse2)
                    minParentAge = Math.min(spouse1.Age, spouse2.Age);
                var childYears = minParentAge - AdultHumanAge;
                var childrenTotal = childYears / 2;
                for (var j = 0; j < childYears; j += 2) {
                    if (Math.random() < spouse1.Caste.infantMortality)
                        childrenTotal--;
                }

                for (var j = 0; j < this.City.People.length && childrenTotal > 0; j++) {
                    var child = this.City.People[j];
                    if (!child
                        || child.Family
                        || child.Age + AdultHumanAge > minParentAge
                        || child.Caste != spouse1.Caste
                        || (child.Race != spouse1.Race && child.Race != spouse2.Race))
                        continue;
                    family.add(child);
                    childrenTotal--;
                    break;
                }
            }
        }
    }

    defaultFamilies() {
        this.City.People.forEach(p => {
            if (!p.Family) {
                var f = new Family();
                f.LastName = p.LastName;
                f.Caste = p.Caste;
                f.add(p);
            }
        });
    }

    adjustAgeByRace(race, age) {
        switch (race) {
            case Race.DRAGONBORN:
                return Math.floor((15.0 / 18.0) * age);
            case Race.DWARF:
                return Math.floor((50.0 / 18.0) * age);
            case Race.ELF:
                return Math.floor((100.0 / 18.0) * age);
            case Race.GNOME:
                return Math.floor((40.0 / 18.0) * age);
            case Race.HALF_ELF:
                return Math.floor((20.0 / 18.0) * age);
            case Race.HALFLING:
                return Math.floor((20.0 / 18.0) * age);
            case Race.HALF_ORC:
                return Math.floor((14.0 / 18.0) * age);
            case Race.HUMAN:
                break;
            case Race.TIEFLING:
                break;
            case Race.AARAKOCRA:
                return Math.floor((3.0 / 18.0) * age);
            case Race.GENASI:
                return age <= AdultHumanAge ? age : Math.floor((120.0 / 80.0) * age);
            case Race.GOLIATH:
                break;
            case Race.AASIMAR:
                return age <= AdultHumanAge ? age : Math.floor((160.0 / 80.0) * age);
            case Race.BUGBEAR:
                return Math.floor((16.0 / 18.0) * age);
            case Race.FIRBOLG:
                return Math.floor((30.0 / 18.0) * age);
            case Race.GOBLIN:
                return Math.floor((8.0 / 18.0) * age);
            case Race.HOBGOBLIN:
                break;
            case Race.KENKU:
                return Math.floor((12.0 / 18.0) * age);
            case Race.KOBOLD:
                return age <= 6 ? Math.floor((6.0 / 18.0) * age) : Math.floor((120 / 80.0) * age);
            case Race.LIZARDFOLK:
                return Math.floor((14.0 / 18.0) * age);
            case Race.ORC:
                return Math.floor((12.0 / 18.0) * age);
            case Race.TABAXI:
                break;
            case Race.TRITON:
                return age <= 15 ? Math.floor((15.0 / 18.0) * age) : Math.floor((200.0 / 80.0) * age);
            case Race.YUANTI_PUREBLOOD:
                break;
            case Race.TORTLE:
                return Math.floor((15.0 / 18.0) * age);
            case Race.GITH:
                break;
            case Race.CHANGELING:
                break;
            case Race.KALASHTAR:
                break;
            case Race.SHIFTER:
                return Math.floor((10.0 / 18.0) * age);
            case Race.WARFORGED:
                return Math.floor((2.0 / 18.0) * age);
            case Race.CENTAUR:
                return Math.floor((15.0 / 18.0) * age);
            case Race.LOXODON:
                return age <= AdultHumanAge ? age : Math.floor((60.0 / 20.0) * age);
            case Race.MINOTAUR:
                return age <= AdultHumanAge ? age : Math.floor((150.0 / 80.0) * age);
            case Race.SIMIC_HYBRID:
                break;
            case Race.VEDALKEN:
                return age <= AdultHumanAge ? age : Math.floor((500.0 / 80.0) * age);
            case Race.VERDAN:
                return Math.floor((24.0 / 18.0) * age);
            default:
                break;
        }

        return age;
    }

    
}