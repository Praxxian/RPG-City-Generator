function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

const CitySize = {
    EXTRA_SMALL_VILLAGE: {
        name: 'Extra Small Village',
        avgSize: 50,
        maxEmployees: 0,
        label: function () {
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    SMALL_VILLAGE: {
        name: 'Small Village',
        avgSize: 300,
        maxEmployees: 1,
        label: function () {
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    VILLAGE: {
        name: 'Village',
        avgSize: 1000,
        maxEmployees: 2,
        label: function () {
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    TOWN: {
        name: 'Town',
        avgSize: 5000,
        maxEmployees: 3,
        label: function () {
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    CITY: {
        name: 'City',
        avgSize: 25000,
        maxEmployees: 4,
        label: function () {
            return `${this.name} (~${this.avgSize.toLocaleString()} people, takes a minute)`
        }
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
    MALE: 'Male',
    NONBINARY: 'Non-Binary',
    GENDERFLUID: 'Gender-Fluid'
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
    RARE: 'Rare',
    NONE: 'None'
};

const Caste = {
    PEASANT: {
        name: 'Peasant',
        ageRandom: new BoxMullerRandom(0.0, 20.0),
        infantMortality: 0.2,
        toString: () => { return this.name; }
    },
    TRADESMEN: {
        name: 'Tradesmen',
        ageRandom: new BoxMullerRandom(0.0, 25.0),
        infantMortality: 0.15,
        toString: () => { return this.name; }
    },
    MERCANTILE: {
        name: 'Mercantile',
        ageRandom: new BoxMullerRandom(0.0, 30.0),
        infantMortality: 0.05,
        toString: () => { return this.name; }
    },
    NOBLE: {
        name: 'Noble',
        ageRandom: new BoxMullerRandom(0.0, 35.0),
        infantMortality: 0.02,
        toString: () => { return this.name; }
    },
};

const Appearances = ["Distinctive jewelry: earrings, necklace, circlet, bracelets", "Piercings", "Flamboyant or outlandish clothes", "Formal, clean clothes", "Ragged, dirty clothes", "Pronounced scar", "Missing teeth", "Missing fingers", "Unusual eye color (or two different colors)", "Tattoos", "Birthmark", "Unusual skin color", "Bald", "Braided beard or hair", "Unusual hair color", "Nervous eye twitch", "Distinctive nose", "Distinctive posture (crooked or rigid)", "Exceptionally beautiful", "Exceptionally ugly"];
const Strengths = ["Strength - powerful, brawny, strong as an ox", "Dexterity - lithe, agile, graceful", "Constitution - hardy, hale, healthy", "Intelligence - studious, learned, inquisitive", "Wisdom - perceptive, spiritual, insightful", "Charisma - persuasive, forceful, born leader"];
const Weaknesses = ["Strength - feeble, scrawny", "Dexterity - clumsy, fumbling", "Constitution - sickly, pale", "Intelligence - dim-witted, slow", "Wisdom - oblivious, absentminded", "Charisma - dull, boring"];
const Talents = ["Plays a musical instrument", "Speaks several languages fluently", "Unbelievably lucky", "Perfect memory", "Great with animals", "Great with children", "Great at solving puzzles", "Great at one game", "Great at impersonations", "Draws beautifully", "Paints beautifully", "Sings beautifully", "Drinks everyone under the table", "Expert carpenter", "Expert cook", "Expert dart thrower and rock skipper", "Expert juggler", "Skilled actor and master of disguise", "Skilled dancer", "Knows thieves’ cant"];
const Mannerisms = ["Prone to singing, whistling, or humming quietly", "Speaks in rhyme or some other peculiar way", "Particularly low or high voice", "Slurs words, lisps, or stutters", "Enunciates overly clearly", "Speaks loudly", "Whispers", "Uses flowery speech or long words", "Frequently uses the wrong word", "Uses colorful oaths and exclamations", "Makes constant jokes or puns", "Prone to predictions of doom", "Fidgets", "Squints", "Stares into the distance", "Chews something", "Paces", "Taps fingers", "Bites fingernails", "Twirls hair or tugs beard"];
const Interactions = ["Argumentative", "Arrogant", "Blustering", "Rude", "Curious", "Friendly", "Honest", "Hot tempered", "Irritable", "Ponderous", "Quiet", "Suspicious"];
const GoodOrEvilIdeals = ["Beauty or Domination", "Charity or Greed", "Greater good or Might", "Life or Pain", "Respect or Retribution", "Self-sacrifice or Slaughter"];
const LawfulOrChaoticIdeals = ["Community or Change", "Fairness or Creativity", "Honor or Freedom", "Logic or Independence", "Responsibility or No limits", "Tradition or Whimsy"];
const NeutralOrOtherIdeals = ["Balance or Aspiration", "Knowledge or Discovery", "Live and let live or Glory", "Moderation or Nation", "Neutrality or Redemption", "People or Self-knowledge"];
const Bonds = ["Dedicated to fulfilling a personal life goal", "Protective of close family members", "Protective of colleagues or compatriots", "Loyal to a benefactor, patron, or employer", "Captivated by a romantic interest", "Drawn to a special place", "Protective of a sentimental keepsake", "Protective of a valuable possession", "Out for revenge", "Roll twice, ignoring results of 10"];
const FlawOrSecrets = ["Forbidden love or susceptibility to romance", "Enjoys decadent pleasures", "Arrogance", "Envies another creature’s possessions or station", "Overpowering greed", "Prone to rage", "Has a powerful enemy", "Specific phobia", "Shameful or scandalous history", "Secret crime or misdeed", "Possession of forbidden lore", "Foolhardy bravery"];

const WorkingHumanAge = 12;

const PersonalityRandom = new BoxMullerRandom(50, 34);

const AdultHumanAge = 18;

const BusinessType = {
    ALCHEMIST_SHOP: {
        name: 'Alchemist Shop',
        toString: () => { return BusinessType.ALCHEMIST_SHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN],
        nouns: ["Cauldron", "Vial", "Mortar", "Alembic", "Flask", "Boiler", "Beaker", "Bottle", "Phial", "Cistern", "Abacus", "Draught", "Elixer", "Brew", "Dram", "Philter", "Tonic", "Leaf"],
        altNames: ["Hermetics", "Alchemy Supplies", "Potions", "Store Room", "Labaratory"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySize.VILLAGE:
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return 2;
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    ARMOR_SHOP: {
        name: 'Armor Shop',
        toString: () => { return BusinessType.ARMOR_SHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shield", "Bulwark", "Aegis", "Buckler", "Helmet", "Pauldron", "Breastplate", "Greaves", "Boot", "Gauntlet", "Chain", "Plate", "Bracer", "Defense", "Warrior", "Knight"],
        altNames: ["Armors", "Armory"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    BAKERY: {
        name: 'Bakery',
        toString: () => { return BusinessType.BAKERY.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Oven", "Kiln", "Bun", "Muffin", "Loaf", "Pastry", "Cake", "Roll", "Rolling Pin", "Measuring Cup", "Spoon", "Spatula", "Whisk", "Pan", "Slice", "Pie", "Dozen", "Bowl", "Cookie", "Tart"],
        altNames: ["Oven", "Baked Goods", "Pastry Shop", "Confectioneries", "Bake Shop", "Pâtisserie"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    SMITHY: {
        name: 'Smithy',
        toString: () => { return BusinessType.SMITHY.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Anvil", "Hammer", "Forge", "Sledge", "Chisel", "Poker", "Shovel", "Ingot", "Swage", "Bolt", "Chain"],
        altNames: ["Anvil", "Forge", "Ironworks"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    (Math.floor(CryptoRandom.random()) + 2)
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    BOW_SHOP: {
        name: 'Bow Shop',
        toString: () => { return BusinessType.BOW_SHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Bow", "Arrow", "Grip", "String", "Notch", "Bolt", "Quiver", "Shaft", "Bowyer", "Bracer", "Crest", "Draw", "Fletching", "Flight", "Limb", "Nib", "Nock", "Point", "Stringer"],
        altNames: ["Bows"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    BUTCHER_SHOP: {
        name: 'Butcher Shop',
        toString: () => { return BusinessType.BUTCHER_SHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Knife", "Blade", "Cleaver", "Block", "Roast", "Chop"],
        altNames: ["Meats", "Meat Market", "Prime Cuts"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    GENERAL_STORE: {
        name: 'General Store',
        toString: () => { return BusinessType.GENERAL_STORE.name },
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: ["General Goods", "Market", "Goods", "Marketplace"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    GROCERY: {
        name: 'Grocery',
        toString: () => { return BusinessType.GROCERY.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: ["Market", "Vegetables", "Fresh Foods"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.67 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    HERBS: {
        name: 'Herbs',
        toString: () => { return BusinessType.HERBS.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Herbalism Hut", "Herb Gathering", "Incense"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    HORSE_RANCH: {
        name: 'Horse Ranch',
        toString: () => { return BusinessType.HORSE_RANCH.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Horses", "Fine Steeds", "Mounts", "Colts and Fillies", "Ranch"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    HUNTING_CABIN: {
        name: 'Hunting Cabin',
        toString: () => { return BusinessType.HUNTING_CABIN.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN],
        nouns: [],
        altNames: ["Trapping", "Falconry", "Big Game Hunting"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    INN: {
        name: 'Inn',
        toString: () => { return BusinessType.INN.name },
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Hotel", "Lodge", "Public House"],
        notes: function () {
            var r = Math.floor(CryptoRandom.random() * 20) + 1;
            if (r <= 5)
                return "Quiet, low-key bar";
            else if (r <= 9)
                return "Raucous dive";
            else if (r <= 10)
                return "Thieves’ guild hangout";
            else if (r <= 11)
                return "Gathering place for a secret society";
            else if (r <= 13)
                return "Upper-class dining club";
            else if (r <= 15)
                return "Gambling den";
            else if (r <= 17)
                return "Caters to specific race or guild";
            else if (r <= 18)
                return "Members-only club";
            else if (r <= 20)
                return "Brothel";
        },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 3);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    JEWELERY_SHOP: {
        name: 'Jewelery Shop',
        toString: () => { return BusinessType.JEWELERY_SHOP.name },
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.TRADESMEN],
        nouns: ["Gem", "Tiara", "Jewel", "Jewel", "Treasure", "Trinket"],
        altNames: ["Fine Jewels", "Treasures", "Gems", "Trinkets"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 1);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    LEATHERWORKING: {
        name: 'Leatherworking',
        toString: () => { return BusinessType.LEATHERWORKING.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Hide", "Grain", "Stitch", "Beveler", "Gauge", "Needle"],
        altNames: ["Leather Goods", "Leather Armor", "Leathers", "Hides"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    SCRIPTORIUM: {
        name: 'Scriptorium',
        toString: () => { return BusinessType.SCRIPTORIUM.name },
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.MERCANTILE],
        nouns: ["Page", "Scroll", "Book", "Shelf", "Tome", "Manuscript", "Sheet"],
        altNames: ["Manuscripts", "Books", "Bookstore", "Tomes", "Volumes", "Scrolls"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySize.TOWN:
                    return 1;
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 1);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    TAILORING: {
        name: 'Tailoring',
        toString: () => { return BusinessType.TAILORING.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Needle", "Thread", "Spool", "Lace", "Thimble", "Pin", "Bobbin", "Stitch", "Cuff", "Weave", "Loom"],
        altNames: ["Beskpoke Clothing", "Threads", "Attire", "Wardrobe", "Garments", "Vestments", "Tailored Goods", "Fine Clothes"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    TANNERY: {
        name: 'Tannery',
        toString: () => { return BusinessType.TANNERY.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Animal Skins", "Hides", "Fine Leathers"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    TAVERN: {
        name: 'Tavern',
        toString: () => { return BusinessType.TAVERN.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.PEASANT],
        nouns: ["Kettle", "Board", "Spoon", "Fork", "Bowl", "Knife", "Skillet", "Pan", "Pot", "Dish", "Spatula", "Tongs", "Ladle", "Mug", "Pint", "Stein"
            , "Goblet", "Chalice", "Hop", "Grape", "Crock", "Platter", "Jug", "Pitcher", "Stool", "Chair", "Table", "Barrel", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Bar", "Pub", "Alehouse", "Brewery"],
        notes: function () {
            var r = Math.floor(CryptoRandom.random() * 20) + 1;
            if (r <= 5)
                return "Quiet, low-key bar";
            else if (r <= 9)
                return "Raucous dive";
            else if (r <= 10)
                return "Thieves’ guild hangout";
            else if (r <= 11)
                return "Gathering place for a secret society";
            else if (r <= 13)
                return "Upper-class dining club";
            else if (r <= 15)
                return "Gambling den";
            else if (r <= 17)
                return "Caters to specific race or guild";
            else if (r <= 18)
                return "Members-only club";
            else if (r <= 20)
                return "Brothel";
        },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    TEMPLE: {
        name: 'Temple',
        toString: () => { return BusinessType.TEMPLE.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Mother", "Father", "Chalice", "Spirit", "Star", "Dragon", "Hand", "Skull", "Rose", "Candle", "Eye", "Cog", "Gauntlet", "Scales", "Sun", "Moon", "Mist", "Mask", "Scroll", "Leaf", "Maiden", "Sword", "Coin", "Hammer", "Water", "Shield", "Stone", "Bridge", "Tree", "Mountain", "Spear", "Waterfall"],
        altNames: ["Monastery", "Chapel", "Shrine", "Cathedral", "Sanctuary"],
        adjectives: ["Holy", "Divine", "Revered", "Righteous", "Sublime", "Humble", "Devoted", "Faithful", "Blessed", "Devout", "Just", "Pious", "Reverent", "Virtuous", "Crimson", "Golden", "Verdant", "Azure", "Violet", "Rose", "Amber", "Silver", "Black", "White", "Sterling", "Gilded", "Gleaming", "Flaming", "Bloody", "Bound", "Unkown", "Forbidden"],
        notes: function () {
            var r = Math.floor(CryptoRandom.random() * 20) + 1;
            if (r <= 10)
                return "Temple to a good or neutral deity";
            else if (r <= 12)
                return "Temple to a false deity (run by charlatan priests)";
            else if (r <= 13)
                return "Home of ascetics";
            else if (r <= 15)
                return "Abandoned shrine";
            else if (r <= 17)
                return "Library dedicated to religious study";
            else if (r <= 20)
                return "Hidden shrine to a fiend or an evil deity";
        },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 2) + 3);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    WEAPON_SHOP: {
        name: 'Weapon Shop',
        toString: () => { return BusinessType.WEAPON_SHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Armory", "Blade", "Sword", "Arsenal", "Mace", "Axe", "Spear", "Hilt", "Pommel", "Hammer", "Edge", "Scabbard", "Sheath", "Warrior", "Knight"],
        altNames: ["Weapons", "Armory", "Blades", "Fine Swords", "Arsenal"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    WAINWRIGHT_WORKSHOP: {
        name: 'Wainwright Workshop',
        toString: () => { return BusinessType.WAINWRIGHT_WORKSHOP.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Wheel", "Spoke", "Hub", "Cart", "Wagon", "Carriage"],
        altNames: ["Carts", "Wagons", "Carriages", "Workshop"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    FARM: {
        name: 'Farm',
        toString: () => { return BusinessType.FARM.name },
        ownerCastes: [Caste.PEASANT],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.floor(CryptoRandom.random() * 3) + 7;
                case CitySize.SMALL_VILLAGE:
                    return Math.floor(CryptoRandom.random() * 12) + 28;
                case CitySize.VILLAGE:
                    return Math.floor(CryptoRandom.random() * 44) + 99;
                case CitySize.TOWN:
                    return Math.floor(CryptoRandom.random() * 220) + 447;
                case CitySize.CITY:
                    return Math.floor(CryptoRandom.random() * 1100) + 2233;
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    BREWERY: {
        name: 'Brewery',
        toString: () => { return BusinessType.BREWERY.name },
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Mug", "Pint", "Stein", "Barrel", "Mountain", "Valley", "River", "Forest", "Ocean", "Hill", "Lake", "Canyon", "Oasis", "Lagoon", "Beach", "Prairie", "Cove", "Island", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Ale Works", "Fine Ales", "Beer", "Beers and Ciders", "Brewing", "Brew Co", "Beer Co", "Brew Works", "Ale Co", "Ale", "Bierhaus"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    ESTATE: {
        name: 'Estate',
        toString: () => { return BusinessType.ESTATE.name },
        ownerCastes: [Caste.NOBLE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            return 0; // Generated per noble family
        },
        minEmployees: function (settings) {
            return 2;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    MINE: {
        name: 'Mine',
        toString: () => { return BusinessType.MINE.name },
        ownerCastes: [Caste.NOBLE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            return settings.NaturalFeatures.indexOf(NaturalFeatures.MOUNTAIN) >= 0 ? 1 : 0;
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var majorIndustryCount = settings.NaturalFeatures.filter(f => f == NaturalFeatures.MOUNTAIN
                || f == NaturalFeatures.FOREST)
                .length + 1;
            var maxEmployees = (settings.CitySize.avgSize * 0.9) / majorIndustryCount;
            return Math.floor(CryptoRandom.random() * maxEmployees / 2) + maxEmployees / 2;
        }
    },
    SHIPPING: {
        name: 'Shipping',
        toString: () => { return BusinessType.SHIPPING.name },
        ownerCastes: [Caste.NOBLE, Caste.MERCANTILE],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish", "Lady", "Mermaid"],
        altNames: ['Shipping Co', 'Imports'],
        notes: function () { return ''; },
        frequency: function (settings) {
            if (settings.NaturalFeatures.indexOf(NaturalFeatures.OCEAN) < 0)
                return 0;
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random()) + 2);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = (settings.CitySize.avgSize * 0.01);
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    },
    LUMBER_CAMP: {
        name: 'Lumber Camp',
        toString: () => { return BusinessType.LUMBER_CAMP.name },
        ownerCastes: [Caste.NOBLE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            return settings.NaturalFeatures.indexOf(NaturalFeatures.FOREST) >= 0 ? 1 : 0;
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var majorIndustryCount = settings.NaturalFeatures.filter(f => f == NaturalFeatures.MOUNTAIN
                || f == NaturalFeatures.FOREST)
                .length + 1;
            var maxEmployees = (settings.CitySize.avgSize * 0.9) / majorIndustryCount;
            return Math.floor(CryptoRandom.random() * maxEmployees / 2) + maxEmployees / 2;
        }
    },
    FISHING: {
        name: 'Fishing Boat',
        toString: () => { return BusinessType.FISHING.name },
        ownerCastes: [Caste.TRADESMEN, Caste.PEASANT],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish", "Lady", "Mermaid"],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            if (settings.NaturalFeatures.indexOf(NaturalFeatures.OCEAN) < 0
                && settings.NaturalFeatures.indexOf(NaturalFeatures.LAKE) < 0
                && settings.NaturalFeatures.indexOf(NaturalFeatures.RIVER) < 0)
                return 0;
            switch (settings.CitySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 1;
                case CitySize.SMALL_VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySize.VILLAGE:
                    return (Math.floor(CryptoRandom.random() * 5) + 5);
                case CitySize.TOWN:
                    return (Math.floor(CryptoRandom.random() * 10) + 10);
                case CitySize.CITY:
                    return (Math.floor(CryptoRandom.random() * 20) + 20);
            }
        },
        minEmployees: function (settings) {
            return 1;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    }
};

const GeneralAdjectives = [
    // Colors
    "Red",
    "Crimson",
    "Orange",
    "Coral",
    "Yellow",
    "Golden",
    "Green",
    "Verdant",
    "Blue",
    "Azure",
    "Purple",
    "Violet",
    "Pink",
    "Rose",
    "Brown",
    "Amber",
    "Grey",
    "Silver",
    "Black",
    "Onyx",
    "White",
    "Alabaster",
    // Other
    "Broken",
    "Cracked",
    "Ample",
    "Shiny",
    "Polished",
    "Sparkling",
    "Sunny",
    "Warm",
    "Happy",
    "Cheery",
    "Joyous",
    "Merry",
    "Blessed",
    "Jolly",
    "Playful",
    "Sturdy",
    "Hearty",
    "Stout",
    "Hefty",
    "Stalwart",
    "Tenacious",
    "Honest",
    "Honorable",
    "Loyal",
    "Righteous",
    "Staunch",
    "Sterling",
    "Trusty",
    "Upright",
    "Iron",
    "Copper",
    "Brass",
    "Adamantine",
    "Bronze",
    "Mithral",
    "Platinum",
    "Steel",
    "Tin",
    "Old",
    "New",
    "Odd",
    "Fancy",
    "Simple",
    "Staggering",
    "Laughing",
    "Prancing",
    "Gilded",
    "Running",
    "Howling",
    "Slaughtered",
    "Leering",
    "Drunken",
    "Leaping",
    "Roaring",
    "Frowning",
    "Lonely",
    "Wandering",
    "Mysterious",
    "Barking",
    "Gleaming",
    "Swift",
    "Steady",
    "Nimble",
    "Flying",
    "Winged",
    "Mighty"
]

const NotableTrait = [
    "canals in place of streets",
    "a massive statue or monument",
    "a grand temple",
    "a large fortress",
    "verdant parks and orchards",
    // "a river that divides town",
    "a major trade center",
    "the headquarters of a powerful family or guild",
    // "a population of mostly wealthy people",
    "destitute, rundown buildings",
    "an awful smell (tanneries, open sewers)",
    "the center of trade for one specific good",
    "a site of many battles",
    "a site of a mythic or magical event",
    "an important library or archive",
    "a ban on all worship of gods",
    "a sinister reputation",
    "a notable library or academy",
    "the site of important tomb or graveyard",
    "having been built atop ancient ruins",
]

const KnownForIts = [
    "delicious cuisine",
    "rude people",
    "greedy merchants",
    "artists and writers",
    "great hero/savior",
    "flowers",
    // "hordes of beggars",
    "tough warriors",
    "dark magic",
    // "decadence",
    "piety",
    "gambling",
    "godlessness",
    "education",
    "wines",
    "high fashion",
    "political intrigue",
    "powerful guilds",
    "strong drink",
    "patriotism",
]

const Calamity = [
    "a suspected vampire infestation",
    "a new cult seeking converts",
    "an important figure's death (murder suspected)",
    "a war between rival thieves’ guilds",
    "a plague or famine (sparks riots)",
    "a plague or famine (sparks riots)",
    "corrupt officials",
    "marauding monsters",
    "marauding monsters",
    "a powerful wizard who has moved into town",
    "an economic depression (trade disrupted)",
    "flooding",
    "the undead stirring in cemeteries",
    "a prophecy of doom",
    "the brink of war",
    "internal strife (leads to anarchy)",
    "being besieged by enemies",
    "a scandal threatening powerful families",
    "a dungeon being discovered (adventurers flock to town)",
    "religious sects struggling for power",
]

const Unit = {
    COPPER: "Copper",
    FAVOR: "Favor"
}

const ItemType = {
    AMMUNITION: 'Ammunition',
    ANIMAL: 'Animal',
    ARMOR: 'Armor',
    CLOTHES: 'Clothes',
    FOOD: 'Food',
    GAMINGSET: 'GamingSet',
    MISC: 'Misc',
    MUSICALINSTRUMENT: 'MusicalInstrument',
    POTION: 'Potion',
    RING: 'Ring',
    SCROLL: 'Scroll',
    SERVICE: 'Service',
    SHIELD: 'Shield',
    TACK: 'Tack',
    TOOL: 'Tool',
    VEHICLE: 'Vehicle',
    WEAPON: 'Weapon',
}

const NaturalFeatures = {
    FOREST: "Forest",
    MOUNTAIN: "Mountains/Hills",
    OCEAN: "Ocean",
    LAKE: "Lake",
    RIVER: "River"
}