const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

class NameGenerator {
    Key
    FirstNameList
    FirstNameMarkovChain
    FirstNameSimpleMarkovChain
    FirstNameStarts

    LastNameList
    LastNameMarkovChain
    LastNameSimpleMarkovChain
    LastNameStarts

    constructor(key) {
        this.Key = key;

        this.FirstNameList = this.Key.Race.firstNameFemaleList;
        if (this.Key.Gender == Gender.MALE)
            this.FirstNameList = this.Key.Race.firstNameMaleList;
        else if (this.Key.Gender == Gender.NONBINARY || this.Key.Gender == Gender.GENDERFLUID)
            this.FirstNameList = this.FirstNameList.concat(this.Key.Race.firstNameMaleList);

        this.LastNameList = this.Key.Race.lastNameList;

        this.FirstNameMarkovChain = this.createMarkovChain(this.FirstNameList);
        this.FirstNameSimpleMarkovChain = this.createSimpleMarkovChain(this.FirstNameList);
        this.FirstNameStarts = this.FirstNameList.map(n => n.substr(0, 2).toUpperCase());

        this.LastNameMarkovChain = this.createMarkovChain(this.LastNameList);
        this.LastNameSimpleMarkovChain = this.createSimpleMarkovChain(this.LastNameList);
        this.LastNameStarts = this.LastNameList.map(n => n.substr(0, 2).toUpperCase());
    }

    getFirst() {
        var selectRandom = CryptoRandom.random() > this.createNameThreshold(this.FirstNameList, 500.0) || this.Key.Race == Race.KENKU;
        var name = selectRandom ? getRandom(this.FirstNameList).toUpperCase() : this.createName(this.FirstNameList, this.FirstNameMarkovChain, this.FirstNameSimpleMarkovChain, this.FirstNameStarts).toUpperCase();
        if (this.Key.Race == Race.GOLIATH)
            name += ` ${getRandom(Race.GOLIATH.nicknamePrefix).toUpperCase()}${getRandom(Race.GOLIATH.nicknameSuffix).toUpperCase()}`;
        if (this.Key.Race == Race.TRITON) {
            if (this.Key.Gender == Gender.MALE && !name.match(/[AEIOUY]S$/g))
                name += getRandom(Vowels) + 'S';
            else if (this.Key.Gender == Gender.FEMALE && name.substr(name.length - 1, 1) != 'N') {
                if (Vowels.indexOf(name[name.length - 1]) > -1)
                    name += 'N';
                else
                    name = name.substr(0, name.length - 1) + 'N';
            }
        }
        return name;
    }

    getLast() {
        var selectRandom = (CryptoRandom.random() > this.createNameThreshold(this.LastNameList, 100.0) && this.Key.Race != Race.KOBOLD) || this.Key.Race == Race.KENKU;
        return selectRandom ? getRandom(this.LastNameList).toUpperCase() : this.createName(this.LastNameList, this.LastNameMarkovChain, this.LastNameSimpleMarkovChain, this.LastNameStarts).toUpperCase();
    }

    createNameThreshold(nameList, minLength) {
        if (nameList.length >= minLength)
            return 0.5;
        var lowVarietyFactor = (minLength - nameList.length) / minLength;
        return lowVarietyFactor;
    }

    createName(names, markovChain, simpleChain, starts) {
        var name = getRandom(starts);
        for (var i = 0; i < 5; i++) {
            var couplet = name.substr(i, 2);
            if (couplet == '' && name.length < 4)
                couplet = name.substr(name.length - 2, 2);
            var next = this.getNextInChain(markovChain, couplet) ?? '';
            name += next;
            name = name.trim();
            if (i > 1 && name.length < 3)
                name += this.getNextInChain(simpleChain, name[name.length - 1]) ?? '';
        }
        name = name.replaceAll(/[^A-Z]$/g, ''); // trim and remove dangling nonalphas        
        return name.length > 2 ? name : getRandom(names);
    }

    createMarkovChain(names) {
        var markovChain = {};
        for (var i = 0; i < names.length; i++) {
            var n = names[i].toUpperCase().replaceAll(/[^A-Z\-]/g, '') + ' ';
            for (var j = 0; j < n.length - 1; j++) {
                var couplet = n.substr(j, 2);
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

    createSimpleMarkovChain(names) {
        var markovChain = {};
        for (var i = 0; i < names.length; i++) {
            var n = names[i].toUpperCase().replaceAll(/[^A-Z\-]/g, '') + ' ';
            for (var j = 0; j < n.length; j++) {
                var key = n[j];
                if (!markovChain[key])
                    markovChain[key] = [];
                if (j > n.length - 2)
                    markovChain[key].push('');
                else
                    markovChain[key].push(n[j + 1]);
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
                var nameGen = new NameGenerator({ Race: owner.Race, Gender: r < 0.5 ? Gender.MALE : Gender.FEMALE });
                var saintName = nameGen.getFirst();
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