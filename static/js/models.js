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
        this.ownedBusiness = business.Name;
        if (!business.Owners.includes(this))
            business.Owners.push(this);
    }

    worksAt
    getEmployer() {
        return this.worksAt;
    }
    setEmployer(business) {
        this.worksAt = business.Name;
        if (!business.Employees.includes(this))
            business.Employees.push(this);
    }

    fullName() {
        return `${this.FirstName} ${this.LastName}`.trim();
    }
}

class City {
    Settings
    People = []
    Businesses = []
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

class Business{
    NameGenKey
    BusinessType
    Owners = []
    Employees = []
    Name
    Description
}