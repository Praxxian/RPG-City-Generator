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

class BusinessNameGenerator {
    static get(owner, businessType) {
        if (businessType == BusinessType.ESTATE)
            return `${owner.LastName} Manor`;

        if (businessType == BusinessType.MINE || businessType == BusinessType.QUARRY)
            return `${owner.LastName} ${businessType.name}`;

        if (businessType == BusinessType.SHIPPING)
            return `${owner.LastName} Shipping Co`;

        var r = CryptoRandom.random();
        var nouns = businessType.nouns;
        var altNames = businessType.altNames;
        altNames.push(businessType.name);

        if (businessType == BusinessType.TEMPLE) {
            var noun = getRandom(nouns);
            var adj = getRandom(BusinessType.TEMPLE.adjectives);
            var name = getRandom(altNames);
            if (r <= 0.1) {
                var nameGen = new NameGenerator(null);
                var saintName = nameGen.getFirst(r < 0.5 ? Gender.MALE : Gender.FEMALE);
                saintName += saintName.slice(-1).toUpperCase() == "S" ? "'" : "'s";
                return `Saint ${saintName} ${name}`;
            }
            if (r > 0.5)
                return `${name} of the ${adj} ${noun}`;
            return `The ${adj} ${noun} ${name}`;
        }

        if (r < 0.25 && nouns.length > 1 && businessType != BusinessType.FARM && businessType != BusinessType.BREWERY) {
            var a = getRandom(nouns);
            nouns.splice(nouns.indexOf(a));
            return `${a} & ${getRandom(nouns)}`;
        }



        if (r < 0.75 && nouns.length > 0 && businessType != BusinessType.FARM) {
            var adjectives = GeneralAdjectives;
            return (businessType == BusinessType.BREWERY ? "" : "The ") + `${getRandom(adjectives)} ${getRandom(nouns)}` + (businessType == BusinessType.BREWERY ? " " + getRandom(altNames) : "");
        }

        return businessType == BusinessType.BREWERY ? `${owner.LastName} ${getRandom(altNames)}` : `${owner.FirstName}'s ${getRandom(altNames)}`;
    }
}