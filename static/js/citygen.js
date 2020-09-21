class CityGenerator {
    Settings
    NameGens
    MaxPopVariance = 0.3
    City
    Races
    TotalPopSize = 1

    constructor(settings) {
        this.Settings = settings;
        this.populateNameGenerators();
        this.groupRaceFrequencies();
    }

    populateNameGenerators() {
        // this.NameGens = {}
        // this.Settings.Races.forEach(r => {
        //     var race = r.race;
        //     Object.keys(Gender).forEach(k => {
        //         var g = Gender[k];
        //         var key = new NameGenKey(race, g);
        //         this.NameGens[key] = new NameGenerator(key);
        //     })
        // });
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
            thisCG.City.Settings = thisCG.Settings;
            thisCG.createPopulation();
            thisCG.createDetails();
            thisCG.matchFamilies();
            thisCG.defaultFamilies();
            thisCG.createBusinesses();
            thisCG.City.Complete = true;
            resolve(thisCG.City);
        })
        return promise;
    }

    matchCitySize(name) {
        var result;
        Object.keys(CitySize).forEach(function (k) {
            if (CitySize[k].name == name) {
                result = CitySize[k];
            }
        });
        return result;
    }

    createPopulation() {
        var percentChange = Math.random() * this.MaxPopVariance * 2 - this.MaxPopVariance;
        var size = this.matchCitySize(this.Settings.CitySize);
        this.City.Settings.CitySize = size;
        this.TotalPopSize = size.avgSize * (1 + percentChange);
        var noblePopSize = Math.floor(this.TotalPopSize * 0.005);
        var merchPopSize = Math.floor(this.TotalPopSize * 0.015);
        var tradePopSize = Math.floor(this.TotalPopSize * 0.18);
        var peasantPopSize = Math.floor(this.TotalPopSize * 0.8);
        this.createPeopleByCaste(Caste.NOBLE, noblePopSize);
        this.createPeopleByCaste(Caste.MERCANTILE, merchPopSize);
        this.createPeopleByCaste(Caste.TRADESMEN, tradePopSize);
        this.createPeopleByCaste(Caste.PEASANT, peasantPopSize);
    }

    createPeopleByCaste(caste, count) {
        var nameGen = new NameGenerator(null);
        var ageRandom = caste.ageRandom;
        for (var i = 0; i < count; i++) {
            var person = new Person();
            person.Caste = caste;
            person.Age = Math.abs(ageRandom.next());
            person.Gender = Math.random() > 0.5 ? Gender.FEMALE : Gender.MALE;
            person.FirstName = nameGen.getFirst(person.Gender);
            person.LastName = nameGen.getLast();
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

    createDetails() {
        // _city.Facts.Add("Population", _city.Families.Sum(x => x.Count).ToString("n0"));
        //     CreateFactFromList(CityFact.NotableTrait);
        //     CreateFactFromList(CityFact.KnownForIts);
        //     CreateFactFromList(CityFact.CurrentCalamity);
        this.City.Details = {
            notableTrait: getRandom(NotableTrait),
            knownFor: getRandom(KnownForIts),
            calamity: getRandom(Calamity)
        };
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
            if (Math.random() <= 0.05)
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
                        || (child.Race != spouse1.Race && spouse2 && child.Race != spouse2.Race))
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

    createBusinesses() {
        this.createNobleEstates();
        this.createStoresAndFarms();
        this.assignJobs();
    }

    createNobleEstates() {
        var nobles = this.City.People.filter(x => x.Caste == Caste.NOBLE);
        var nobleFamilies = nobles.map(x => x.Family).filter(distinct);
        for (var i = 0; i < nobleFamilies.length; i++) {
            var family = nobleFamilies[i];
            var headOfFamily = nobles.filter(x => x.Family == family).sort(x => x.Age).reverse()[0];
            var business = new Business();
            business.BusinessType = BusinessType.ESTATE;
            business.Name = BusinessNameGenerator.get(headOfFamily, BusinessType.ESTATE);
            headOfFamily.setBusiness(business);
            var spouse = this.findSpouse(headOfFamily);
            if (spouse)
                spouse.setBusiness(business);
            this.City.Businesses.push(business);
        }
    }

    findSpouse(person) {
        var family = this.City.People.filter(p => p.Family == person.Family);
        var spouse = family.filter(p => p.fullName() == person.Spouse)[0];
        return spouse;
    }

    createStoresAndFarms() {
        var businessTypes = [];
        var keys = Object.keys(BusinessType);
        for (var k in keys) {
            var bt = BusinessType[keys[k]];
            var f = bt.frequency(this.City.Settings.CitySize);
            for (var i = 0; i < f; i++)
                businessTypes.push(bt);
        }

        businessTypes.sort(function () { return Math.random() });

        for (var i in businessTypes) {
            var businessType = businessTypes[i];
            for (var i = 0; i < this.City.People.length; i++) {
                var person = this.City.People[i];
                if (person.Age < AdultHumanAge || person.getBusiness() || person.getEmployer() || person.Caste != businessType.caste)
                    continue;
                var business = new Business();
                business.BusinessType = businessType;
                business.Name = BusinessNameGenerator.get(person, businessType).toUpperCase();
                person.setBusiness(business);
                var family = this.City.People.filter(p => p.Family == person.Family);
                var spouse = family.filter(p => p.fullName() == person.Spouse)[0];
                if (spouse && businessType != BusinessType.TEMPLE)
                    spouse.setBusiness(business);
                var workingKids = family.filter(p => p != spouse && p != person && p.Age >= WorkingHumanAge);
                workingKids.forEach(function (k) {
                    if (Math.random() >= 0.1)
                        k.setEmployer(business);
                });
                business.Description = business.BusinessType.notes();
                this.setInventory(business);
                this.City.Businesses.push(business);
                break;
            }
        }
    }

    setInventory(business) {
        var itemPool = getInventory(business.BusinessType);
        for (var i in itemPool) {
            var itemProb = itemPool[i];
            if (itemProb.probability == 1 || itemProb.probability > Math.random()) {
                var newItem = itemProb.item.clone();
                newItem.DefaultCost = newItem.Cost;

                var favorChance = Math.random();
                if (newItem.Cost > 50000 && favorChance < 0.10) {
                    newItem.Cost = 3;
                    newItem.Unit = Unit.FAVOR;
                }
                else if (newItem.Cost > 20000 && favorChance < 0.10) {
                    newItem.Cost = 2;
                    newItem.Unit = Unit.FAVOR;
                }
                else if (newItem.Cost > 1000 && favorChance < 0.10) {
                    newItem.Cost = 1;
                    newItem.Unit = Unit.FAVOR;
                }

                business.Inventory.push(newItem);
            }
        }
        business.Inventory.sort(x => x.Name);
    }

    assignJobs() {
        var maxEmployees = this.Settings.CitySize.maxEmployees;

        this.City.Businesses.sort(function () { return Math.random() });
        for (var b in this.City.Businesses) {
            var biz = this.City.Businesses[b];
            if (maxEmployees == 0 && biz.BusinessType != BusinessType.ESTATE)
                continue;
            var minEmployees = BusinessType == BusinessType.ESTATE ? 2 : 1;
            var bizMaxEmployees = Math.floor(Math.random() * maxEmployees) + minEmployees;
            bizMaxEmployees -= biz.Employees.length;
            for (var i = 0; i < this.City.People.length && bizMaxEmployees > 0; i++) {
                var person = this.City.People[i];
                if (person.Age < WorkingHumanAge || person.getBusiness() || person.getEmployer() || person.Caste != biz.BusinessType.caste || person.Caste == Caste.NOBLE)
                    continue;
                person.setEmployer(biz);
                bizMaxEmployees--;
            }
        }
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