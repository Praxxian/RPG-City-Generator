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
        var nameList = FirstNamesFemale;
        if(gender == Gender.MALE)
            nameList = FirstNamesMale;
        return CryptoRandom.random() > 0.5 ? getRandom(nameList) : this.createName(nameList);
    }

    getLast() {
        return CryptoRandom.random() > 0.5 ? getRandom(LastNames) : this.createName(LastNames);
    }

    createName(names) {
        var markovChain = this.createMarkovChain(names);
        var starts = names.map(n => n.substr(0, 2));
        var name = getRandom(starts);
        for (var i = 0; i < 5; i++) {
            var couplet = name.substr(i, 2);
            if (couplet == '' && name.length < 4)
                couplet = name.substr(name.length - 2, 2);
            var next = this.getNextInChain(markovChain, couplet) ?? '';
            name += next;
            name = name.trim();
        }
        return name.trim();
    }

    createMarkovChain(names) {
        var markovChain = {};
        for (var i = 0; i < names.length; i++) {
            var n = names[i] + ' ';
            for (var j = 0; j < n.length - 1; j++) {
                var couplet = n.substr(j, 2).toUpperCase();
                if (!markovChain[couplet])
                    markovChain[couplet] = [];
                if (j > n.length - 2)
                    markovChain[couplet].push('');
                else
                    markovChain[couplet].push(n.substr(j + 2, 1));
            }
        }
        return markovChain;
    }

    getNextInChain(markovChain, value) {
        var nextValues = markovChain[value] ?? [];
        return getRandom(nextValues);
    }
}

class BusinessNameGenerator {
    static get(owner, businessType) {
        if (businessType == BusinessType.ESTATE)
            return `${owner.LastName} Manor`;

        if (businessType == BusinessType.MINE || businessType == BusinessType.QUARRY || businessType == BusinessType.FORESTRY)
            return `${owner.LastName} ${businessType.name}`;

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

        if (r < 0.33 && nouns.length > 1 && businessType != BusinessType.FARM && businessType != BusinessType.BREWERY && businessType != BusinessType.SHIPPING && businessType != BusinessType.FISHING) {
            var firstNoun = getRandom(nouns);
            nouns.splice(nouns.indexOf(firstNoun), 1);
            return `${firstNoun} & ${getRandom(nouns)}`;
        }

        if (r < 0.80 && nouns.length > 0 && businessType != BusinessType.FARM) {
            var adjectives = GeneralAdjectives;
            return (businessType == BusinessType.BREWERY ? "" : "The ") + `${getRandom(adjectives)} ${getRandom(nouns)}` + (businessType == BusinessType.BREWERY ? " " + getRandom(altNames) : "");
        }

        return businessType == BusinessType.BREWERY || businessType == BusinessType.SHIPPING ? `${owner.LastName} ${getRandom(altNames)}` : `${owner.FirstName}'s ${getRandom(altNames)}`;
    }
}