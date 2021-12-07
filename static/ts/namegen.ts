const Vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

interface INameGenKey {
    Gender: Gender
    Race: Race
}

interface IMarkovChain {
    [key: string]: string[]
}

class NameGenerator {
    Key: INameGenKey
    FirstNameList: string[]
    FirstNameMarkovChain: IMarkovChain
    FirstNameSimpleMarkovChain: IMarkovChain
    FirstNameStarts: string[]

    LastNameList: string[]
    LastNameMarkovChain: IMarkovChain
    LastNameSimpleMarkovChain: IMarkovChain
    LastNameStarts: string[]

    constructor(key: INameGenKey) {
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
        let selectRandom = CryptoRandom.random() > this.createNameThreshold(this.FirstNameList, 500.0) || this.Key.Race == Races.KENKU;
        let name = selectRandom ? CryptoRandom.randomFromArray(this.FirstNameList).toUpperCase() : this.createName(this.FirstNameList, this.FirstNameMarkovChain, this.FirstNameSimpleMarkovChain, this.FirstNameStarts).toUpperCase();
        if (this.Key.Race == Races.GOLIATH)
            name += ` ${CryptoRandom.randomFromArray(Races.GOLIATH.nicknamePrefix).toUpperCase()}${CryptoRandom.randomFromArray(Races.GOLIATH.nicknameSuffix).toUpperCase()}`;
        if (this.Key.Race == Races.TRITON) {
            if (this.Key.Gender == Gender.MALE && !name.match(/[AEIOUY]S$/g))
                name += CryptoRandom.randomFromArray(Vowels) + 'S';
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
        let selectRandom = (CryptoRandom.random() > this.createNameThreshold(this.LastNameList, 100.0) && this.Key.Race != Races.KOBOLD) || this.Key.Race == Races.KENKU;
        return selectRandom ? CryptoRandom.randomFromArray(this.LastNameList).toUpperCase() : this.createName(this.LastNameList, this.LastNameMarkovChain, this.LastNameSimpleMarkovChain, this.LastNameStarts).toUpperCase();
    }

    createNameThreshold(nameList: string[], minLength: number) {
        if (nameList.length >= minLength)
            return 0.5;
        let lowVarietyFactor = (minLength - nameList.length) / minLength;
        return lowVarietyFactor;
    }

    createName(names: string[], markovChain: IMarkovChain, simpleChain: IMarkovChain, starts: string[]) {
        let name = CryptoRandom.randomFromArray(starts);
        for (let i = 0; i < 5; i++) {
            let couplet = name.substr(i, 2);
            if (couplet == '' && name.length < 4)
                couplet = name.substr(name.length - 2, 2);
            let next = this.getNextInChain(markovChain, couplet) ?? '';
            name += next;
            name = name.trim();
            if (i > 1 && name.length < 3)
                name += this.getNextInChain(simpleChain, name[name.length - 1]) ?? '';
        }
        name = name.replaceAll(/[^A-Z]$/g, ''); // trim and remove dangling nonalphas        
        return name.length > 2 ? name : CryptoRandom.randomFromArray(names);
    }

    createMarkovChain(names: string[]) {
        let markovChain: IMarkovChain = {};
        for (let i = 0; i < names.length; i++) {
            let n = names[i].toUpperCase().replaceAll(/[^A-Z\-]/g, '') + ' ';
            for (let j = 0; j < n.length - 1; j++) {
                let couplet = n.substr(j, 2);
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

    createSimpleMarkovChain(names: string[]) {
        let markovChain: IMarkovChain = {};
        for (let i = 0; i < names.length; i++) {
            let n = names[i].toUpperCase().replaceAll(/[^A-Z\-]/g, '') + ' ';
            for (let j = 0; j < n.length; j++) {
                let key = n[j];
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

    getNextInChain(markovChain: IMarkovChain, key: string) {
        let nextValues = markovChain[key] ?? [];
        return CryptoRandom.randomFromArray(nextValues);
    }
}