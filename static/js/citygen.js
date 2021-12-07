class CityGenerator {
    constructor(settings) {
        this.MaxPopVariance = 0.3;
        this.TotalPopSize = 1;
        this.NameGenerators = [];
        this.Settings = settings;
        this.groupRaceFrequencies();
        this.createNameGenerators();
    }
    groupRaceFrequencies() {
        this.Races = {};
        for (let raceName in this.Settings.Races) {
            let frequency = this.Settings.Races[raceName];
            if (!frequency)
                continue;
            let freqGroup = this.Races[frequency];
            let race = this.getRaceByName(raceName);
            if (freqGroup)
                freqGroup.push(race);
            else
                this.Races[frequency] = [race];
        }
        for (const [key, value] of Object.entries(RaceFrequency)) {
            if (this.Races[value] == null)
                this.Races[value] = [];
        }
    }
    createNameGenerators() {
        for (let raceName in this.Settings.Races) {
            if (this.Settings.Races[raceName] == RaceFrequency.NONE)
                continue;
            let race = this.getRaceByName(raceName);
            for (let i in this.Settings.Genders) {
                let gender = this.Settings.Genders[i];
                this.NameGenerators.push(new NameGenerator({ Race: race, Gender: gender }));
            }
        }
    }
    getRaceByName(name) {
        let keys = Object.keys(Races);
        for (let i = 0; i < keys.length; i++) {
            let race = Races[keys[i]];
            if (race.name == name)
                return race;
        }
        return null;
    }
    getNew() {
        let thisCG = this;
        let promise = new Promise(function (resolve, reject) {
            thisCG.City = new City();
            thisCG.City.Settings = thisCG.Settings;
            thisCG.createPopulation();
            thisCG.createDetails();
            thisCG.matchFamilies();
            thisCG.defaultFamilies();
            thisCG.createBusinesses();
            thisCG.City.Complete = true;
            resolve(thisCG.City);
        });
        return promise;
    }
    getCitySizeByName(name) {
        let keys = Object.keys(CitySizes);
        for (let i = 0; i < keys.length; i++) {
            let citySize = CitySizes[keys[i]];
            if (citySize.name == name)
                return citySize;
        }
        return null;
    }
    createPopulation() {
        let percentChange = CryptoRandom.random() * this.MaxPopVariance * 2 - this.MaxPopVariance;
        this.TotalPopSize = this.Settings.CitySize.avgSize * (1 + percentChange);
        let noblePopSize = Math.floor(this.TotalPopSize * this.Settings.Prosperity.noblePercent);
        let merchPopSize = Math.floor(this.TotalPopSize * this.Settings.Prosperity.mercantilePercent);
        let tradePopSize = Math.floor(this.TotalPopSize * this.Settings.Prosperity.tradePercent);
        let peasantPopSize = Math.floor(this.TotalPopSize * this.Settings.Prosperity.peasantPercent);
        this.createPeopleByCaste(Caste.NOBLE, noblePopSize);
        this.createPeopleByCaste(Caste.MERCANTILE, merchPopSize);
        this.createPeopleByCaste(Caste.TRADESMEN, tradePopSize);
        this.createPeopleByCaste(Caste.PEASANT, peasantPopSize);
    }
    createPeopleByCaste(caste, count) {
        let ageRandom = caste.ageRandom;
        for (let i = 0; i < count; i++) {
            let person = new Person();
            person.Id = this.City.People.length;
            person.Caste = caste;
            person.Age = Math.abs(ageRandom.next());
            let genderRoll = CryptoRandom.random();
            if (genderRoll <= 0.05 && this.Settings.Genders.indexOf(Gender.GENDERFLUID) >= 0)
                person.Gender = Gender.GENDERFLUID;
            else if (genderRoll <= 0.1 && this.Settings.Genders.indexOf(Gender.NONBINARY) >= 0)
                person.Gender = Gender.NONBINARY;
            else if (genderRoll <= .55 && this.Settings.Genders.indexOf(Gender.MALE) >= 0)
                person.Gender = Gender.MALE;
            else if (this.Settings.Genders.indexOf(Gender.FEMALE) >= 0)
                person.Gender = Gender.FEMALE;
            else
                person.Gender = CryptoRandom.randomFromArray(this.Settings.Genders);
            let raceRoll = CryptoRandom.random();
            person.RaceFrequency = RaceFrequency.COMMON;
            let uncommonMod = this.Races[RaceFrequency.COMMON].length;
            let rareMod = uncommonMod + this.Races[RaceFrequency.UNCOMMON].length;
            if (raceRoll < 0.33 / uncommonMod && raceRoll > 0.1 / uncommonMod)
                person.RaceFrequency = RaceFrequency.UNCOMMON;
            else if (raceRoll <= 0.1 / rareMod)
                person.RaceFrequency = RaceFrequency.RARE;
            let freqGroup = this.Races[person.RaceFrequency];
            if (this.Races[person.RaceFrequency] && this.Races[person.RaceFrequency].length > 0)
                person.Race = CryptoRandom.randomFromArray(freqGroup);
            else
                person.Race = CryptoRandom.randomFromArray(this.Races[RaceFrequency.COMMON]);
            let nameGen = this.NameGenerators.filter(n => n.Key.Race == person.Race && n.Key.Gender == person.Gender)[0];
            person.FirstName = nameGen.getFirst();
            person.LastName = nameGen.getLast();
            person.RaceAge = this.adjustAgeByRace(person.Race, person.Age);
            person.Appearance = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Appearances) : null;
            person.Strength = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Strengths) : null;
            person.Weakness = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Weaknesses) : null;
            while (person.Strength && person.Strength.split('-')[0] == person.Weakness.split('-')[0])
                person.Weakness = CryptoRandom.randomFromArray(Weaknesses);
            person.Talent = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Talents) : null;
            person.Mannerism = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Mannerisms) : null;
            person.Interaction = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Interactions) : null;
            person.GoodOrEvilIdeal = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(GoodOrEvilIdeals) : null;
            person.LawfulOrChaoticIdeal = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(LawfulOrChaoticIdeals) : null;
            person.NeutralOrOtherIdeal = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(NeutralOrOtherIdeals) : null;
            person.Bond = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(Bonds) : null;
            while (person.Bond && person.Bond.indexOf("Roll twice, ignoring results of 10") >= 0)
                person.Bond = CryptoRandom.randomFromArray(Bonds) + ' and ' + CryptoRandom.randomFromArray(Bonds);
            person.FlawOrSecret = person.Age >= WorkingHumanAge ? CryptoRandom.randomFromArray(FlawOrSecrets) : null;
            this.City.People.push(person);
        }
    }
    createDetails() {
        this.City.notableTrait = CryptoRandom.randomFromArray(NotableTrait);
        this.City.knownFor = CryptoRandom.randomFromArray(KnownForIts);
        this.City.calamity = CryptoRandom.randomFromArray(Calamity);
    }
    matchFamilies() {
        for (let i = 0; i < this.City.People.length; i++) {
            let spouse1 = this.City.People[i];
            if (spouse1.Family || spouse1.Age < AdultHumanAge)
                continue;
            let family = new Family();
            family.LastName = spouse1.LastName;
            family.Caste = spouse1.Caste;
            family.add(spouse1);
            this.addFamily(family);
            let spouse2GenderRoll = CryptoRandom.random();
            let spouse2Gender = null;
            const nonheteroThreshold = 0.1;
            let hasMenAndWomen = this.Settings.Genders.indexOf(Gender.MALE) >= 0 && this.Settings.Genders.indexOf(Gender.FEMALE) >= 0;
            if (hasMenAndWomen) {
                if (spouse1.Gender == Gender.FEMALE && spouse2GenderRoll > nonheteroThreshold)
                    spouse2Gender = Gender.MALE;
                else if (spouse1.Gender == Gender.FEMALE)
                    spouse2Gender = CryptoRandom.randomFromArray(this.Settings.Genders.filter(g => g != Gender.MALE));
                else if (spouse1.Gender == Gender.MALE && spouse2GenderRoll > nonheteroThreshold)
                    spouse2Gender = Gender.FEMALE;
                else if (spouse1.Gender == Gender.MALE)
                    spouse2Gender = CryptoRandom.randomFromArray(this.Settings.Genders.filter(g => g != Gender.FEMALE));
                else if ((spouse1.Gender == Gender.GENDERFLUID || spouse1.Gender == Gender.NONBINARY) && spouse2GenderRoll > nonheteroThreshold)
                    spouse2Gender = CryptoRandom.randomFromArray(this.Settings.Genders.filter(g => g != Gender.FEMALE && g != Gender.MALE));
                else
                    spouse2Gender = null;
            }
            else
                spouse2Gender = null;
            let spouse2 = null;
            for (let j = i + 1; j < this.City.People.length; j++) {
                spouse2 = this.City.People[j];
                let outgoing = spouse1.Strength && (spouse1.Strength.indexOf("Wisdom") >= 0 || spouse1.Strength.indexOf("Charisma") >= 0);
                if (spouse2.Family
                    || spouse2.Age < AdultHumanAge
                    || Math.abs(spouse2.Age - spouse1.Age) > 10
                    || (spouse2Gender && spouse2Gender != spouse2.Gender)
                    || spouse2.Caste != spouse1.Caste
                    || (spouse2.Race != spouse1.Race && !outgoing))
                    continue;
                family.add(spouse2);
                spouse2.Spouse = spouse1.fullName();
                spouse1.Spouse = spouse2.fullName();
                break;
            }
            if (spouse2 || CryptoRandom.random() < 0.1) {
                let minParentAge = spouse1.Age;
                if (spouse2)
                    minParentAge = Math.min(spouse1.Age, spouse2.Age);
                let childYears = minParentAge - AdultHumanAge;
                let childrenTotal = childYears / 2;
                for (let j = 0; j < childYears; j += 2) {
                    if (CryptoRandom.random() < spouse1.Caste.infantMortality)
                        childrenTotal--;
                }
                for (let j = 0; j < this.City.People.length && childrenTotal > 0; j++) {
                    let child = this.City.People[j];
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
    addFamily(family) {
        family.Id = this.City.Families.length;
        this.City.Families.push(family);
    }
    defaultFamilies() {
        this.City.People.forEach(p => {
            if (!p.Family) {
                let f = new Family();
                f.LastName = p.LastName;
                f.Caste = p.Caste;
                this.addFamily(f);
                f.add(p);
            }
        });
    }
    createBusinesses() {
        this.createStoresAndFarms();
        this.createNobleEstates();
        this.assignJobs();
    }
    createNobleEstates() {
        let nobles = this.City.People.filter(x => x.Caste == Caste.NOBLE);
        let nobleFamilies = this.City.Families.filter(f => f.Caste == Caste.NOBLE);
        for (let i = 0; i < nobleFamilies.length; i++) {
            let family = nobleFamilies[i];
            let headOfFamily = nobles.filter(x => x.Family == family).sort(x => x.Age).reverse()[0];
            let business = this.createNewBusiness(BusinessTypes.ESTATE, headOfFamily);
            let spouse = this.findSpouse(headOfFamily);
            if (spouse)
                spouse.setBusiness(business);
        }
    }
    createNewBusiness(businessType, owner) {
        let business = new Business();
        business.Id = this.City.Businesses.length;
        business.BusinessType = businessType;
        owner.setBusiness(business);
        business.generateName();
        this.City.Businesses.push(business);
        return business;
    }
    findSpouse(person) {
        let family = this.City.People.filter(p => p.Family == person.Family);
        let spouse = family.filter(p => p.fullName() == person.Spouse)[0];
        return spouse;
    }
    createStoresAndFarms() {
        let businessTypes = [];
        let keys = Object.keys(BusinessTypes);
        for (let k in keys) {
            let bt = BusinessTypes[keys[k]];
            let f = bt.frequency(this.City.Settings);
            for (let i = 0; i < f; i++)
                businessTypes.push(bt);
        }
        businessTypes.sort(function (t) { return CryptoRandom.random(); });
        for (let i = 0; i < businessTypes.length; i++) {
            let businessType = businessTypes[i];
            for (let j = 0; j < this.City.People.length; j++) {
                let person = this.City.People[j];
                if (person.Age < AdultHumanAge
                    || person.ownedBusiness >= 0
                    || person.worksAt >= 0
                    || businessType.ownerCastes.indexOf(person.Caste) < 0)
                    continue;
                let business = this.createNewBusiness(businessType, person);
                let family = this.City.People.filter(p => p.Family == person.Family);
                let spouse = family.filter(p => p.fullName() == person.Spouse)[0];
                if (spouse && businessType != BusinessTypes.TEMPLE)
                    spouse.setBusiness(business);
                let workingKids = family.filter(p => p != spouse && p != person && p.Age >= WorkingHumanAge);
                workingKids.forEach(function (k) {
                    if (CryptoRandom.random() >= 0.1)
                        k.setEmployer(business);
                });
                business.Description = business.BusinessType.notes();
                this.setInventory(business);
                break;
            }
        }
    }
    setInventory(business) {
        let itemPool = BusinessTypeUtil.getInventory(business.BusinessType);
        for (let i in itemPool) {
            let itemProb = itemPool[i];
            if (itemProb.probability == 1 || itemProb.probability > CryptoRandom.random()) {
                let newItem = itemProb.item.clone();
                newItem.DefaultCost = newItem.Cost;
                let favorChance = CryptoRandom.random();
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
        business.Inventory.sort((a, b) => a.Name.localeCompare(b.Name));
    }
    assignJobs() {
        this.City.Businesses.sort(function (t) { return t.BusinessType.ownerCastes[0] == Caste.NOBLE ? -1 : Math.floor(CryptoRandom.random() * 2) - 1; });
        for (let b in this.City.Businesses) {
            let biz = this.City.Businesses[b];
            if (this.Settings.CitySize.maxEmployees == 0 && biz.BusinessType != BusinessTypes.ESTATE)
                continue;
            let bizMaxEmployees = biz.BusinessType.maxEmployees(this.Settings);
            bizMaxEmployees -= biz.Employees.length;
            for (let i = 0; i < this.City.People.length && bizMaxEmployees > 0; i++) {
                let person = this.City.People[i];
                if (person.Age < WorkingHumanAge
                    || person.ownedBusiness >= 0
                    || person.worksAt >= 0
                    || biz.BusinessType.employeeCastes.indexOf(person.Caste) < 0)
                    continue;
                person.setEmployer(biz);
                bizMaxEmployees--;
            }
        }
    }
    adjustAgeByRace(race, age) {
        switch (race.name) {
            case Races.DRAGONBORN.name:
                return Math.floor((15.0 / 18.0) * age);
            case Races.DWARF.name:
                return Math.floor((50.0 / 18.0) * age);
            case Races.ELF.name:
                return Math.floor((100.0 / 18.0) * age);
            case Races.GNOME.name:
                return Math.floor((40.0 / 18.0) * age);
            case Races.HALF_ELF.name:
                return Math.floor((20.0 / 18.0) * age);
            case Races.HALFLING.name:
                return Math.floor((20.0 / 18.0) * age);
            case Races.HALF_ORC.name:
                return Math.floor((14.0 / 18.0) * age);
            case Races.HUMAN.name:
                break;
            case Races.TIEFLING.name:
                break;
            case Races.AARAKOCRA.name:
                return Math.floor((3.0 / 18.0) * age);
            case Races.GENASI.name:
                return age <= AdultHumanAge ? age : Math.floor((120.0 / 80.0) * age);
            case Races.GOLIATH.name:
                break;
            case Races.AASIMAR.name:
                return age <= AdultHumanAge ? age : Math.floor((160.0 / 80.0) * age);
            case Races.BUGBEAR.name:
                return Math.floor((16.0 / 18.0) * age);
            case Races.FIRBOLG.name:
                return Math.floor((30.0 / 18.0) * age);
            case Races.GOBLIN.name:
                return Math.floor((8.0 / 18.0) * age);
            case Races.HOBGOBLIN.name:
                break;
            case Races.KENKU.name:
                return Math.floor((12.0 / 18.0) * age);
            case Races.KOBOLD.name:
                return age <= 6 ? Math.floor((6.0 / 18.0) * age) : Math.floor((120 / 80.0) * age);
            case Races.LIZARDFOLK.name:
                return Math.floor((14.0 / 18.0) * age);
            case Races.ORC.name:
                return Math.floor((12.0 / 18.0) * age);
            case Races.TABAXI.name:
                break;
            case Races.TRITON.name:
                return age <= 15 ? Math.floor((15.0 / 18.0) * age) : Math.floor((200.0 / 80.0) * age);
            case Races.YUANTI_PUREBLOOD.name:
                break;
            case Races.TORTLE.name:
                return Math.floor((15.0 / 18.0) * age);
            case Races.GITH.name:
                break;
            default:
                break;
        }
        return age;
    }
}
