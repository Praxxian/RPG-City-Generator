const CitySize = {
    EXTRA_SMALL_VILLAGE: {
        name: 'Extra Small Village',
        avgSize: 50
    },
    SMALL_VILLAGE: {
        name: 'Small Village',
        avgSize: 300
    },
    VILLAGE: {
        name: 'Village',
        avgSize: 1000
    },
    TOWN: {
        name: 'Town',
        avgSize: 5000
    },
    CITY: {
        name: 'City',
        avgSize: 25000
    },
    match: function (name) {
        var result;
        Object.keys(CitySize).forEach(function (k) {
            if (CitySize[k].name == name) {
                result = CitySize[k];
            }
        });
        return result;
    }
}

const MajorIndustry = {
    AGRICULTURE: "Agriculture",
    MINING: "Mining",
    HARBOR: "Harbor",
    QUARRY: "Quarry"
}

const Gender = {
    FEMALE: 'Female',
    MALE: 'Male'
}

const Race = {
    DRAGONBORN: 'Dragonborn',
    DWARF: 'Dwarf',
    ELF: 'Elf',
    GNOME: 'Gnome',
    HALF_ELF: 'Half-Elf',
    HALFLING: 'Halfling',
    HALF_ORC: 'Half-Orc',
    HUMAN: 'Human',
    TIEFLING: 'Tiefling',
    AARAKOCRA: 'Aarakocra',
    GENASI: 'Genasi',
    GOLIATH: 'Goliath',
    AASIMAR: 'Aasimar',
    BUGBEAR: 'Bugbear',
    FIRBOLG: 'Firbolg',
    GOBLIN: 'Goblin',
    HOBGOBLIN: 'Hobgoblin',
    KENKU: 'Kenku',
    KOBOLD: 'Kobold',
    LIZARDFOLK: 'Lizardfolk',
    ORC: 'Orc',
    TABAXI: 'Tabaxi',
    TRITON: 'Triton',
    YUANTI_PUREBLOOD: 'Yuanti Pureblood',
    TORTLE: 'Tortle',
    GITH: 'Gith',
    CHANGELING: 'Changeling',
    KALASHTAR: 'Kalashtar',
    SHIFTER: 'Shifter',
    WARFORGED: 'Warforged',
    CENTAUR: 'Centaur',
    LOXODON: 'Loxodon',
    MINOTAUR: 'Minotaur',
    SIMIC_HYBRID: 'Simic Hybrid',
    VEDALKEN: 'Vedalken',
    VERDAN: 'Verdan',
    BAROVIAN: 'Barovian',
}

const RaceFrequency = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare'
}

const Caste = {
    PEASANT: {
        name: 'Peasant',
        ageRandom: new BoxMullerRandom(0.0, 20.0)
    },
    TRADESMEN: {
        name: 'Tradesmen',
        ageRandom: new BoxMullerRandom(0.0, 25.0)
    },
    MERCANTILE: {
        name: 'Mercantile',
        ageRandom: new BoxMullerRandom(0.0, 30.0)
    },
    NOBLE: {
        name: 'Noble',
        ageRandom: new BoxMullerRandom(0.0, 35.0)
    },
}

const Appearances = ["Distinctive jewelry: earrings, necklace, circlet, bracelets", "Piercings", "Flamboyant or outlandish clothes", "Formal, clean clothes", "Ragged, dirty clothes", "Pronounced scar", "Missing teeth", "Missing fingers", "Unusual eye color (or two different colors)", "Tattoos", "Birthmark", "Unusual skin color", "Bald", "Braided beard or hair", "Unusual hair color", "Nervous eye twitch", "Distinctive nose", "Distinctive posture (crooked or rigid)", "Exceptionally beautiful", "Exceptionally ugly"]

const WorkingHumanAge = 12

const PersonalityRandom = new BoxMullerRandom(50, 34)

const AdultHumanAge = 18;