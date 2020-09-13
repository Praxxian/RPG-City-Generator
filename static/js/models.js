class Person {
    FirstName
    LastName
    Caste
    RaceFrequency
    Race
    Age
    Gender
    Family
    Spouse
    Appearance
    Strength
    Weakness
    Talent
    Manuerism
    Interaction
    GoodOrEvilIdeal
    LawfulOrChaoticIdeal
    NeutralOrOtherIdeal
    Bond
    FlawOrSecret
    Personality
    Schedule
    RaceAge

    ownedBusiness
    getBusiness() {
        return this.ownedBusiness;
    }
    setBusiness(business) {
        this.ownedBusiness = business;
        if (!business.Owners.contains(this))
            business.Owners.add(this);
    }

    worksAt
    getEmployer() {
        return this.worksAt;
    }
    setEmployer(business) {
        this.worksAt = business;
        if (!business.Employees.contains(this))
            business.Employees.add(this);
    }

    fullName() {
        return `${this.FirstName} ${this.LastName}`.trim();
    }
}

class NameGenKey {
    Race
    Gender

    constructor(race, gender) {
        this.Race = race;
        this.Gender = gender;
    }
}

class NameGenerator {
    Key
    // TODO

    constructor(key) {
        this.Key = key;
    }

    getFirst(gender) {
        switch (gender) {
            case Gender.FEMALE:
                return getRandom(FirstNamesFemale);
            default:
                return getRandom(FirstNamesMale);
        }
    }

    getLast() {
        return getRandom(LastNames);
    }
}

class City {
    Settings
    People
}

class Personality {
    Openess
    Conscientiousness
    Extraversion
    Agreeableness
    Neuroticisms
}

class Family {
    LastName
    Caste
    UUID = createUUID()

    add(person) {
        if (!person)
            return;
        person.LastName = this.LastName;
        person.Caste = this.Caste;
        person.Family = this;
    }

    displayValue() {
        return `${this.LastName} (${this.UUID.substring(0, 7)}...)`;
    }
}