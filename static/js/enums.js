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
};

const MajorIndustry = {
    AGRICULTURE: "Agriculture",
    MINING: "Mining",
    HARBOR: "Harbor",
    QUARRY: "Quarry"
};

const Gender = {
    FEMALE: 'Female',
    MALE: 'Male'
};

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
};

const RaceFrequency = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare'
};

const Caste = {
    PEASANT: {
        name: 'Peasant',
        ageRandom: new BoxMullerRandom(0.0, 20.0),
        infantMortality: 0.2
    },
    TRADESMEN: {
        name: 'Tradesmen',
        ageRandom: new BoxMullerRandom(0.0, 25.0),
        infantMortality: 0.15
    },
    MERCANTILE: {
        name: 'Mercantile',
        ageRandom: new BoxMullerRandom(0.0, 30.0),
        infantMortality: 0.05
    },
    NOBLE: {
        name: 'Noble',
        ageRandom: new BoxMullerRandom(0.0, 35.0),
        infantMortality: 0.02
    },
};

const Appearances = ["Distinctive jewelry: earrings, necklace, circlet, bracelets", "Piercings", "Flamboyant or outlandish clothes", "Formal, clean clothes", "Ragged, dirty clothes", "Pronounced scar", "Missing teeth", "Missing fingers", "Unusual eye color (or two different colors)", "Tattoos", "Birthmark", "Unusual skin color", "Bald", "Braided beard or hair", "Unusual hair color", "Nervous eye twitch", "Distinctive nose", "Distinctive posture (crooked or rigid)", "Exceptionally beautiful", "Exceptionally ugly"];

const WorkingHumanAge = 12;

const PersonalityRandom = new BoxMullerRandom(50, 34);

const AdultHumanAge = 18;

const BussinessType = {
    ALCHEMIST_SHOP: {
        name: 'Alchemist Shop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.1 ? 1 : 0;
                case CitySize.VILLAGE:
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return 2;
            }
        }
    },
    ARMOR_SHOP: {
        name: 'Armor Shop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    Math.floor(Math.random(1) + 2);
            }
        }
    },
    BAKERY: {
        name: 'Bakery',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    SMITHY: {
        name: 'Smithy',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    Math.floor(Math.random(1) + 2)
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    BOW_SHOP: {
        name: 'Bow Shop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.1 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    BUTCHER_SHOP: {
        name: 'Butcher Shop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    GENERAL_STORE: {
        name: 'General Store',
        caste: Caste.MERCANTILE,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    GROCERY: {
        name: 'Grocery',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.67 ? 1 : 0;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    HERBS: {
        name: 'Herbs',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    HORSE_RANCH: {
        name: 'Horse Ranch',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    HUNTING_CABIN: {
        name: 'Hunting Cabin',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    INN: {
        name: 'Inn',
        caste: Caste.MERCANTILE,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 2);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 3);
            }
        }
    },
    JEWELERY_SHOP: {
        name: 'Jewelery Shop',
        caste: Caste.MERCANTILE,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.1 ? 1 : 0;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 1);
            }
        }
    },
    LEATHERWORKING: {
        name: 'Leatherworking',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    SCRIPTORIUM: {
        name: 'Scriptorium',
        caste: Caste.MERCANTILE,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.1 ? 1 : 0;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 1);
            }
        }
    },
    TAILORING: {
        name: 'Tailoring',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    TANNERY: {
        name: 'Tannery',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    TAVERN: {
        name: 'Tavern',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    TEMPLE: {
        name: 'Temple',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(2) + 2);
            }
        }
    },
    WEAPON_SHOP: {
        name: 'Weapon Shop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    Math.floor(Math.random(1) + 2);
            }
        }
    },
    WAINWRIGHT_WORKSHOP: {
        name: 'Wainwright Workshop',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    FARM: {
        name: 'Farm',
        caste: Caste.PEASANT,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.floor(Math.random(3) + 7);
                case CitySize.SMALL_VILLAGE:
                    return Math.floor(Math.random(12) + 28);
                case CitySize.VILLAGE:
                    return Math.floor(Math.random(44) + 99);
                case CitySize.TOWN:
                    return Math.floor(Math.random(220) + 447);
                case CitySize.CITY:
                    return Math.floor(Math.random(1100) + 2233);
            }
        }
    },
    BREWERY: {
        name: 'Brewery',
        caste: Caste.TRADESMEN,
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return Math.floor(Math.random(1) + 1);
                case CitySize.CITY:
                    return Math.floor(Math.random(1) + 2);
            }
        }
    },
    ESTATE: {
        name: 'Estate',
        caste: Caste.NOBLE,
        frequency: function (citySize) {
            return 0; // Generated per noble family
        }
    },
    MINE: {
        name: 'Mine',
        caste: Caste.NOBLE,
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    SHIPPING: {
        name: 'Shipping',
        caste: Caste.NOBLE,
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    QUARRY: {
        name: 'Quarry',
        caste: Caste.NOBLE,
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
};