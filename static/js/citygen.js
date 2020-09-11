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
            var spouse2Gender = spouse1.Gender == Gender.MALE ? Gender.FEMALE : Gender.MALE;
            if (Math.random() >= 0.05)
                spouse2Gender = spouse1.Gender;
            var spouse2 = null;
            for (var j = i + 1; j < this.City.People.length; j++) {
                spouse2 = this.City.People[j];
                if (spouse2.Family || spouse2.Age < AdultHumanAge || Math.abs(spouse2.Age - spouse1.Age) > 10 || spouse2Gender != spouse2.Gender || spouse2.Caste != spouse1.Caste)
                    continue;
                // TODO personality difference?
                family.add(spouse2);
                spouse2.Spouse = spouse1.fullName();
                spouse1.Spouse = spouse2.fullName();
                break;
            }
        }
    }
}