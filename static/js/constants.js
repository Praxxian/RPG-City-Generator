var MajorIndustry;
(function (MajorIndustry) {
    MajorIndustry["AGRICULTURE"] = "Agriculture";
    MajorIndustry["MINING"] = "Mining";
    MajorIndustry["HARBOR"] = "Harbor";
    MajorIndustry["QUARRY"] = "Quarry";
})(MajorIndustry || (MajorIndustry = {}));
;
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
    Gender["NONBINARY"] = "Non-Binary";
    Gender["GENDERFLUID"] = "Gender-Fluid";
})(Gender || (Gender = {}));
;
var RaceFrequency;
(function (RaceFrequency) {
    RaceFrequency["COMMON"] = "Common";
    RaceFrequency["UNCOMMON"] = "Uncommon";
    RaceFrequency["RARE"] = "Rare";
    RaceFrequency["NONE"] = "None";
})(RaceFrequency || (RaceFrequency = {}));
;
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
const GeneralAdjectives = [
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
];
const NotableTrait = [
    "canals in place of streets",
    "a massive statue or monument",
    "a grand temple",
    "a large fortress",
    "verdant parks and orchards",
    "a major trade center",
    "the headquarters of a powerful family or guild",
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
];
const KnownForIts = [
    "delicious cuisine",
    "rude people",
    "greedy merchants",
    "artists and writers",
    "great hero/savior",
    "flowers",
    "tough warriors",
    "dark magic",
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
];
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
];
var Unit;
(function (Unit) {
    Unit["COPPER"] = "Copper";
    Unit["FAVOR"] = "Favor";
})(Unit || (Unit = {}));
var ItemType;
(function (ItemType) {
    ItemType["AMMUNITION"] = "Ammunition";
    ItemType["ANIMAL"] = "Animal";
    ItemType["ARMOR"] = "Armor";
    ItemType["CLOTHES"] = "Clothes";
    ItemType["FOOD"] = "Food";
    ItemType["GAMINGSET"] = "GamingSet";
    ItemType["MISC"] = "Misc";
    ItemType["MUSICALINSTRUMENT"] = "MusicalInstrument";
    ItemType["POTION"] = "Potion";
    ItemType["RING"] = "Ring";
    ItemType["SCROLL"] = "Scroll";
    ItemType["SERVICE"] = "Service";
    ItemType["SHIELD"] = "Shield";
    ItemType["TACK"] = "Tack";
    ItemType["TOOL"] = "Tool";
    ItemType["VEHICLE"] = "Vehicle";
    ItemType["WEAPON"] = "Weapon";
    ItemType["MAGIC"] = "Magic Item";
    ItemType["SPELLCASTING"] = "Spellcasting";
})(ItemType || (ItemType = {}));
var NaturalFeatures;
(function (NaturalFeatures) {
    NaturalFeatures["FOREST"] = "Forest";
    NaturalFeatures["MOUNTAIN"] = "Mountains/Hills";
    NaturalFeatures["OCEAN"] = "Ocean";
    NaturalFeatures["LAKE"] = "Lake";
    NaturalFeatures["RIVER"] = "River";
})(NaturalFeatures || (NaturalFeatures = {}));
var MagicItemTier;
(function (MagicItemTier) {
    MagicItemTier["MINOR"] = "Minor";
    MagicItemTier["MAJOR"] = "Major";
})(MagicItemTier || (MagicItemTier = {}));
const Races = {
    DRAGONBORN: new Race('Dragonborn', FirstNamesMaleDragonborn, FirstNamesFemaleDragonborn, LastNamesDragonborn),
    DWARF: new Race('Dwarf', FirstNamesMaleDwarf, FirstNamesFemaleDwarf, LastNamesDwarf),
    ELF: new Race('Elf', FirstNamesMaleElf, FirstNamesFemaleElf, LastNamesElf),
    GNOME: new Race('Gnome', FirstNamesMaleGnome, FirstNamesFemaleGnome, LastNamesGnome),
    HALF_ELF: new Race('Half-Elf', FirstNamesMaleElf.concat(Stats.randomSample(FirstNamesMale, FirstNamesMale.length / 2)), FirstNamesMaleElf.concat(Stats.randomSample(FirstNamesMale, FirstNamesMale.length / 2)), LastNames.concat(LastNamesElf)),
    HALFLING: new Race('Halfling', FirstNamesMaleHalfing, FirstNamesFemaleHalfing, LastNamesHalfing),
    HALF_ORC: new Race('Half-Orc', FirstNamesMaleHalfOrc, FirstNamesFemaleHalfOrc, LastNamesHalfOrc),
    HUMAN: new Race('Human', FirstNamesMale, FirstNamesFemale, LastNames),
    TIEFLING: new Race('Tiefling', FirstNamesMaleTiefling, FirstNamesFemaleTiefling, LastNamesTiefling),
    AARAKOCRA: new Race('Aarakocra', FirstNamesMaleAarakocra, FirstNamesFemaleAarakocra, LastNamesAarakocra),
    GENASI: new Race('Genasi', FirstNamesMaleGenasi, FirstNamesFemaleGenasi, LastNamesGenasi),
    GOLIATH: new Race('Goliath', FirstNamesMaleGoliath, FirstNamesFemaleGoliath, LastNamesGoliath, ['Bear', 'Dawn', 'Flint', 'Horn', 'Keen', 'Lone', 'Long', 'Root', 'Sky', 'Steady', 'Thread', 'Twisted', 'Word', 'Owl', 'Panther', 'Rat', 'Hare', 'Fox', 'Otter', 'Badger', 'Horse', 'Mule', 'Boar', 'Deer', 'Bear', 'Elk', 'Ox', 'Lynx', 'Wolf', 'Crane', 'Eagle', 'Toad', 'Snake', 'Mountain', 'Hill', 'Star', 'Crow'], ['killer', 'caller', 'finder', 'carver', 'eye', 'hunter', 'leaper', 'smasher', 'watcher', 'hand', 'twister', 'limb', 'painter', 'seeker', 'speaker']),
    AASIMAR: new Race('Aasimar', FirstNamesMale, FirstNamesFemale, LastNames),
    BUGBEAR: new Race('Bugbear', FirstNamesMaleInverse, FirstNamesFemaleInverse, LastNamesInverse),
    FIRBOLG: new Race('Firbolg', FirstNamesMaleElf, FirstNamesFemaleElf, LastNamesElf),
    GOBLIN: new Race('Goblin', FirstNamesMaleInverse, FirstNamesFemaleInverse, LastNamesInverse),
    HOBGOBLIN: new Race('Hobgoblin', FirstNamesMaleInverse, FirstNamesFemaleInverse, LastNamesInverse),
    KENKU: new Race('Kenku', FirstNamesKenku, FirstNamesKenku, FirstNamesKenku),
    KOBOLD: new Race('Kobold', FirstNamesKobold, FirstNamesKobold, FirstNamesKobold),
    LIZARDFOLK: new Race('Lizardfolk', FirstNamesLizardFolk, FirstNamesLizardFolk, FirstNamesLizardFolk),
    ORC: new Race('Orc', FirstNamesMaleOrc, FirstNamesFemaleOrc, LastNamesOrc),
    TABAXI: new Race('Tabaxi', FirstNamesTabaxi, FirstNamesTabaxi, LastNames),
    TRITON: new Race('Triton', FirstNamesMaleTriton, FirstNamesFemaleTriton, LastNamesTriton),
    YUANTI_PUREBLOOD: new Race('Yuanti Pureblood', FirstNamesYuanTi, FirstNamesYuanTi, FirstNamesYuanTi),
    TORTLE: new Race('Tortle', FirstNamesTortle, FirstNamesTortle, FirstNamesTortle),
    GITH: new Race('Gith', FirstNamesMaleGith, FirstNamesFemaleGith, FirstNamesMaleGith.concat(FirstNamesFemaleGith)),
};
const CitySizes = {
    EXTRA_SMALL_VILLAGE: new CitySize('Extra Small Village', 50, 0),
    SMALL_VILLAGE: new CitySize('Small Village', 300, 1),
    VILLAGE: new CitySize('Village', 1000, 2),
    TOWN: new CitySize('Town', 5000, 3),
    CITY: new CitySize('City', 25000, 4),
};
const BusinessTypes = {
    ALCHEMIST_SHOP: ({
        name: 'Alchemist Shop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN],
        nouns: ["Cauldron", "Vial", "Mortar", "Alembic", "Flask", "Boiler", "Beaker", "Bottle", "Phial", "Cistern", "Abacus", "Draught", "Elixer", "Brew", "Dram", "Philter", "Tonic", "Leaf"],
        altNames: ["Hermetics", "Alchemy Supplies", "Potions", "Store Room", "Labaratory"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySizes.VILLAGE:
                case CitySizes.TOWN:
                    return 1;
                case CitySizes.CITY:
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
    }),
    ARMOR_SHOP: ({
        name: 'Armor Shop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shield", "Bulwark", "Aegis", "Buckler", "Helmet", "Pauldron", "Breastplate", "Greaves", "Boot", "Gauntlet", "Chain", "Plate", "Bracer", "Defense", "Warrior", "Knight"],
        altNames: ["Armors", "Armory"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                case CitySizes.SMALL_VILLAGE:
                    return 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    BAKERY: ({
        name: 'Bakery',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Oven", "Kiln", "Bun", "Muffin", "Loaf", "Pastry", "Cake", "Roll", "Rolling Pin", "Measuring Cup", "Spoon", "Spatula", "Whisk", "Pan", "Slice", "Pie", "Dozen", "Bowl", "Cookie", "Tart"],
        altNames: ["Oven", "Baked Goods", "Pastry Shop", "Confectioneries", "Bake Shop", "Pâtisserie"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    SMITHY: ({
        name: 'Smithy',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Anvil", "Hammer", "Forge", "Sledge", "Chisel", "Poker", "Shovel", "Ingot", "Swage", "Bolt", "Chain"],
        altNames: ["Anvil", "Forge", "Ironworks"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    (Math.floor(CryptoRandom.random()) + 2);
                case CitySizes.CITY:
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
    }),
    BOW_SHOP: ({
        name: 'Bow Shop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Bow", "Arrow", "Grip", "String", "Notch", "Bolt", "Quiver", "Shaft", "Bowyer", "Bracer", "Crest", "Draw", "Fletching", "Flight", "Limb", "Nib", "Nock", "Point", "Stringer"],
        altNames: ["Bows"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    BUTCHER_SHOP: ({
        name: 'Butcher Shop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Knife", "Blade", "Cleaver", "Block", "Roast", "Chop"],
        altNames: ["Meats", "Meat Market", "Prime Cuts"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    GENERAL_STORE: ({
        name: 'General Store',
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: ["General Goods", "Market", "Goods", "Marketplace"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    GROCERY: ({
        name: 'Grocery',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: ["Market", "Vegetables", "Fresh Foods"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.67 ? 1 : 0;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    HERBS: ({
        name: 'Herbs',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Herbalism Hut", "Herb Gathering", "Incense"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    HORSE_RANCH: ({
        name: 'Horse Ranch',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Horses", "Fine Steeds", "Mounts", "Colts and Fillies", "Ranch"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return 1;
                case CitySizes.CITY:
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
    }),
    HUNTING_CABIN: ({
        name: 'Hunting Cabin',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN],
        nouns: [],
        altNames: ["Trapping", "Falconry", "Big Game Hunting"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    INN: ({
        name: 'Inn',
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin",
            "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony",
            "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake",
            "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken",
            "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star",
            "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
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
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySizes.CITY:
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
    }),
    JEWELERY_SHOP: ({
        name: 'Jewelery Shop',
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.TRADESMEN],
        nouns: ["Gem", "Tiara", "Jewel", "Jewel", "Treasure", "Trinket"],
        altNames: ["Fine Jewels", "Treasures", "Gems", "Trinkets"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySizes.TOWN:
                    return 1;
                case CitySizes.CITY:
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
    }),
    LEATHERWORKING: ({
        name: 'Leatherworking',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Hide", "Grain", "Stitch", "Beveler", "Gauge", "Needle"],
        altNames: ["Leather Goods", "Leather Armor", "Leathers", "Hides"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    SCRIPTORIUM: ({
        name: 'Scriptorium',
        ownerCastes: [Caste.MERCANTILE],
        employeeCastes: [Caste.MERCANTILE],
        nouns: ["Page", "Scroll", "Book", "Shelf", "Tome", "Manuscript", "Sheet"],
        altNames: ["Manuscripts", "Books", "Bookstore", "Tomes", "Volumes", "Scrolls"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.1 ? 1 : 0;
                case CitySizes.TOWN:
                    return 1;
                case CitySizes.CITY:
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
    }),
    TAILORING: ({
        name: 'Tailoring',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Needle", "Thread", "Spool", "Lace", "Thimble", "Pin", "Bobbin", "Stitch", "Cuff", "Weave", "Loom"],
        altNames: ["Beskpoke Clothing", "Threads", "Attire", "Wardrobe", "Garments", "Vestments", "Tailored Goods", "Fine Clothes"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    TANNERY: ({
        name: 'Tannery',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: [],
        altNames: ["Animal Skins", "Hides", "Fine Leathers"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    TAVERN: ({
        name: 'Tavern',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.PEASANT],
        nouns: ["Kettle", "Board", "Spoon", "Fork", "Bowl", "Knife", "Skillet", "Pan", "Pot", "Dish", "Spatula", "Tongs", "Ladle", "Mug", "Pint", "Stein",
            "Goblet", "Chalice", "Hop", "Grape", "Crock", "Platter", "Jug", "Pitcher", "Stool", "Chair", "Table", "Barrel", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin",
            "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony",
            "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake",
            "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken",
            "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star",
            "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
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
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    TEMPLE: ({
        name: 'Temple',
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
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.5 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return 1;
                case CitySizes.VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySizes.CITY:
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
    }),
    WEAPON_SHOP: ({
        name: 'Weapon Shop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Armory", "Blade", "Sword", "Arsenal", "Mace", "Axe", "Spear", "Hilt", "Pommel", "Hammer", "Edge", "Scabbard", "Sheath", "Warrior", "Knight"],
        altNames: ["Weapons", "Armory", "Blades", "Fine Swords", "Arsenal"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                case CitySizes.SMALL_VILLAGE:
                    return 0;
                case CitySizes.VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    WAINWRIGHT_WORKSHOP: ({
        name: 'Wainwright Workshop',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Wheel", "Spoke", "Hub", "Cart", "Wagon", "Carriage"],
        altNames: ["Carts", "Wagons", "Carriages", "Workshop"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.01 ? 1 : 0;
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    FARM: ({
        name: 'Farm',
        ownerCastes: [Caste.PEASANT],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return Math.floor(CryptoRandom.random() * 3) + 7;
                case CitySizes.SMALL_VILLAGE:
                    return Math.floor(CryptoRandom.random() * 12) + 28;
                case CitySizes.VILLAGE:
                    return Math.floor(CryptoRandom.random() * 44) + 99;
                case CitySizes.TOWN:
                    return Math.floor(CryptoRandom.random() * 220) + 447;
                case CitySizes.CITY:
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
    }),
    BREWERY: ({
        name: 'Brewery',
        ownerCastes: [Caste.TRADESMEN],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Mug", "Pint", "Stein", "Barrel", "Mountain", "Valley", "River", "Forest", "Ocean", "Hill", "Lake", "Canyon", "Oasis", "Lagoon", "Beach", "Prairie", "Cove", "Island", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin",
            "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony",
            "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake",
            "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken",
            "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star",
            "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Ale Works", "Fine Ales", "Beer", "Beers and Ciders", "Brewing", "Brew Co", "Beer Co", "Brew Works", "Ale Co", "Ale", "Bierhaus"],
        notes: function () { return ''; },
        frequency: function (settings) {
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                case CitySizes.SMALL_VILLAGE:
                    return CryptoRandom.random() <= 0.33 ? 1 : 0;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    ESTATE: ({
        name: 'Estate',
        ownerCastes: [Caste.NOBLE],
        employeeCastes: [Caste.PEASANT],
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            return 0;
        },
        minEmployees: function (settings) {
            return 2;
        },
        maxEmployees: function (settings) {
            var maxEmployees = settings.CitySize.maxEmployees;
            return Math.floor(CryptoRandom.random() * maxEmployees) + this.minEmployees(settings);
        }
    }),
    MINE: ({
        name: 'Mine',
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
    }),
    SHIPPING: ({
        name: 'Shipping',
        ownerCastes: [Caste.NOBLE, Caste.MERCANTILE],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin",
            "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony",
            "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake",
            "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken",
            "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Satyr", "Star",
            "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish", "Lady", "Mermaid"],
        altNames: ['Shipping Co', 'Imports'],
        notes: function () { return ''; },
        frequency: function (settings) {
            if (settings.NaturalFeatures.indexOf(NaturalFeatures.OCEAN) < 0)
                return 0;
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                case CitySizes.SMALL_VILLAGE:
                    return 0;
                case CitySizes.VILLAGE:
                    return 1;
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random()) + 1);
                case CitySizes.CITY:
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
    }),
    LUMBER_CAMP: ({
        name: 'Lumber Camp',
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
    }),
    FISHING: ({
        name: 'Fishing Boat',
        ownerCastes: [Caste.TRADESMEN, Caste.PEASANT],
        employeeCastes: [Caste.TRADESMEN, Caste.PEASANT],
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin",
            "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony",
            "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake",
            "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken",
            "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Satyr", "Star",
            "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish", "Lady", "Mermaid"],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (settings) {
            if (settings.NaturalFeatures.indexOf(NaturalFeatures.OCEAN) < 0
                && settings.NaturalFeatures.indexOf(NaturalFeatures.LAKE) < 0
                && settings.NaturalFeatures.indexOf(NaturalFeatures.RIVER) < 0)
                return 0;
            switch (settings.CitySize) {
                case CitySizes.EXTRA_SMALL_VILLAGE:
                    return 1;
                case CitySizes.SMALL_VILLAGE:
                    return (Math.floor(CryptoRandom.random()) + 2);
                case CitySizes.VILLAGE:
                    return (Math.floor(CryptoRandom.random() * 5) + 5);
                case CitySizes.TOWN:
                    return (Math.floor(CryptoRandom.random() * 10) + 10);
                case CitySizes.CITY:
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
    })
};
const AllItems = {
    Alchemists_Supplies: new InventoryItem(ItemType.TOOL, "Alchemist's supplies", 5000, Unit.COPPER),
    Brewers_Supplies: new InventoryItem(ItemType.TOOL, "Brewer's supplies", 2000, Unit.COPPER),
    Calligraphers_Supplies: new InventoryItem(ItemType.TOOL, "Calligrapher's Supplies", 1000, Unit.COPPER),
    Carpenters_Tools: new InventoryItem(ItemType.TOOL, "Carpenter's tools", 800, Unit.COPPER),
    Cartographers_Tools: new InventoryItem(ItemType.TOOL, "Cartographer's tools", 1500, Unit.COPPER),
    Cobblers_Tools: new InventoryItem(ItemType.TOOL, "Cobbler's tools", 500, Unit.COPPER),
    Cooks_Utensils: new InventoryItem(ItemType.TOOL, "Cook's utensils", 100, Unit.COPPER),
    Glassblowers_Tools: new InventoryItem(ItemType.TOOL, "Glassblower's tools", 3000, Unit.COPPER),
    Jewelers_Tools: new InventoryItem(ItemType.TOOL, "Jeweler's tools", 2500, Unit.COPPER),
    Leatherworkers_Tools: new InventoryItem(ItemType.TOOL, "Leatherworker's tools", 500, Unit.COPPER),
    Masons_Tools: new InventoryItem(ItemType.TOOL, "Mason's tools", 1000, Unit.COPPER),
    Painters_Supplies: new InventoryItem(ItemType.TOOL, "Painter's supplies", 1000, Unit.COPPER),
    Potters_Tools: new InventoryItem(ItemType.TOOL, "Potter's tools", 1000, Unit.COPPER),
    Smiths_Tools: new InventoryItem(ItemType.TOOL, "Smith's tools", 2000, Unit.COPPER),
    Tinkers_Tools: new InventoryItem(ItemType.TOOL, "Tinker's tools", 5000, Unit.COPPER),
    Weavers_Tools: new InventoryItem(ItemType.TOOL, "Weaver's tools", 100, Unit.COPPER),
    Woodcarvers_Tools: new InventoryItem(ItemType.TOOL, "Woodcarver's tools", 100, Unit.COPPER),
    Dice_Set: new InventoryItem(ItemType.GAMINGSET, "Dice Set", 10, Unit.COPPER),
    Playing_Card_Set: new InventoryItem(ItemType.GAMINGSET, "Playing Card Set", 50, Unit.COPPER),
    Bagpipes: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Bagpipes", 3000, Unit.COPPER),
    Drum: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Drum", 600, Unit.COPPER),
    Dulcimer: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Dulcimer", 2500, Unit.COPPER),
    Flute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Flute", 200, Unit.COPPER),
    Lute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Lute", 3500, Unit.COPPER),
    Lyre: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Lyre", 3000, Unit.COPPER),
    Horn: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Horn", 300, Unit.COPPER),
    Pan_Flute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Pan Flute", 1200, Unit.COPPER),
    Shawm: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Shawm", 200, Unit.COPPER),
    Viol: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Viol", 3000, Unit.COPPER),
    Navigators_Tools: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Navigator's tools", 2500, Unit.COPPER),
    Thieves_Tools: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Thieves' tools", 2500, Unit.COPPER),
    Club: new InventoryItem(ItemType.WEAPON, "Club", 10, Unit.COPPER),
    Dagger: new InventoryItem(ItemType.WEAPON, "Dagger", 200, Unit.COPPER),
    Greatclub: new InventoryItem(ItemType.WEAPON, "Greatclub", 20, Unit.COPPER),
    Handaxe: new InventoryItem(ItemType.WEAPON, "Handaxe", 500, Unit.COPPER),
    Javelin: new InventoryItem(ItemType.WEAPON, "Javelin", 50, Unit.COPPER),
    Light_Hammer: new InventoryItem(ItemType.WEAPON, "Light Hammer", 200, Unit.COPPER),
    Mace: new InventoryItem(ItemType.WEAPON, "Mace", 500, Unit.COPPER),
    Quarterstaff: new InventoryItem(ItemType.WEAPON, "Quarterstaff", 20, Unit.COPPER),
    Sickle: new InventoryItem(ItemType.WEAPON, "Sickle", 100, Unit.COPPER),
    Spear: new InventoryItem(ItemType.WEAPON, "Spear", 100, Unit.COPPER),
    Crossbow_Light: new InventoryItem(ItemType.WEAPON, "Crossbow, light", 2500, Unit.COPPER),
    Dart: new InventoryItem(ItemType.WEAPON, "Dart", 5, Unit.COPPER),
    Shortbow: new InventoryItem(ItemType.WEAPON, "Shortbow", 2500, Unit.COPPER),
    Sling: new InventoryItem(ItemType.WEAPON, "Sling", 10, Unit.COPPER),
    Battleaxe: new InventoryItem(ItemType.WEAPON, "Battleaxe", 1000, Unit.COPPER),
    Flail: new InventoryItem(ItemType.WEAPON, "Flail", 1000, Unit.COPPER),
    Glaive: new InventoryItem(ItemType.WEAPON, "Glaive", 2000, Unit.COPPER),
    Greataxe: new InventoryItem(ItemType.WEAPON, "Greataxe", 3000, Unit.COPPER),
    Greatsword: new InventoryItem(ItemType.WEAPON, "Greatsword", 5000, Unit.COPPER),
    Halberd: new InventoryItem(ItemType.WEAPON, "Halberd", 2000, Unit.COPPER),
    Lance: new InventoryItem(ItemType.WEAPON, "Lance", 1000, Unit.COPPER),
    Longsword: new InventoryItem(ItemType.WEAPON, "Longsword", 1500, Unit.COPPER),
    Maul: new InventoryItem(ItemType.WEAPON, "Maul", 1000, Unit.COPPER),
    Morningstar: new InventoryItem(ItemType.WEAPON, "Morningstar", 1500, Unit.COPPER),
    Pike: new InventoryItem(ItemType.WEAPON, "Pike", 500, Unit.COPPER),
    Rapier: new InventoryItem(ItemType.WEAPON, "Rapier", 2500, Unit.COPPER),
    Scimitar: new InventoryItem(ItemType.WEAPON, "Scimitar", 2500, Unit.COPPER),
    Shortsword: new InventoryItem(ItemType.WEAPON, "Shortsword", 1000, Unit.COPPER),
    Trident: new InventoryItem(ItemType.WEAPON, "Trident", 500, Unit.COPPER),
    War_Pick: new InventoryItem(ItemType.WEAPON, "War Pick", 500, Unit.COPPER),
    Warhammer: new InventoryItem(ItemType.WEAPON, "Warhammer", 1500, Unit.COPPER),
    Whip: new InventoryItem(ItemType.WEAPON, "Whip", 200, Unit.COPPER),
    Blowgun: new InventoryItem(ItemType.WEAPON, "Blowgun", 1000, Unit.COPPER),
    Crossbow_Hand: new InventoryItem(ItemType.WEAPON, "Crossbow, hand", 7500, Unit.COPPER),
    Crossbow_Heavy: new InventoryItem(ItemType.WEAPON, "Crossbow, heavy", 5000, Unit.COPPER),
    Longbow: new InventoryItem(ItemType.WEAPON, "Longbow", 5000, Unit.COPPER),
    Net: new InventoryItem(ItemType.WEAPON, "Net", 100, Unit.COPPER),
    Donkey_Or_Mule: new InventoryItem(ItemType.ANIMAL, "Donkey or mule", 800, Unit.COPPER),
    Elephant: new InventoryItem(ItemType.ANIMAL, "Elephant", 20000, Unit.COPPER),
    Horse_Draft_Or_Camel: new InventoryItem(ItemType.ANIMAL, "Horse, draft (or Camel)", 5000, Unit.COPPER),
    Horse_Riding: new InventoryItem(ItemType.ANIMAL, "Horse, riding", 7500, Unit.COPPER),
    Mastiff: new InventoryItem(ItemType.ANIMAL, "Mastiff", 2500, Unit.COPPER),
    Pony: new InventoryItem(ItemType.ANIMAL, "Pony", 3000, Unit.COPPER),
    Warhorse: new InventoryItem(ItemType.ANIMAL, "Warhorse", 40000, Unit.COPPER),
    Bit_And_Bridle: new InventoryItem(ItemType.TACK, "Bit and bridle", 200, Unit.COPPER),
    Carriage: new InventoryItem(ItemType.VEHICLE, "Carriage", 10000, Unit.COPPER),
    Cart: new InventoryItem(ItemType.VEHICLE, "Cart", 1500, Unit.COPPER),
    Chariot: new InventoryItem(ItemType.VEHICLE, "Chariot", 25000, Unit.COPPER),
    Animal_Feed_Per_Day: new InventoryItem(ItemType.TACK, "Animal Feed (per day)", 5, Unit.COPPER),
    Saddle_Exotic: new InventoryItem(ItemType.TACK, "Saddle, Exotic", 6000, Unit.COPPER),
    SaddleMilitary: new InventoryItem(ItemType.TACK, "Saddle, Military", 2000, Unit.COPPER),
    Saddle_Pack: new InventoryItem(ItemType.TACK, "Saddle, Pack", 500, Unit.COPPER),
    Saddle_Riding: new InventoryItem(ItemType.TACK, "Saddle, Riding", 1000, Unit.COPPER),
    Saddlebags: new InventoryItem(ItemType.TACK, "Saddlebags", 400, Unit.COPPER),
    Sled: new InventoryItem(ItemType.VEHICLE, "Sled", 2000, Unit.COPPER),
    Stabling_Per_Day: new InventoryItem(ItemType.SERVICE, "Stabling (per day)", 50, Unit.COPPER),
    Wagon: new InventoryItem(ItemType.VEHICLE, "Wagon", 3500, Unit.COPPER),
    Galley: new InventoryItem(ItemType.VEHICLE, "Galley", 3000000, Unit.COPPER),
    Keelboat: new InventoryItem(ItemType.VEHICLE, "Keelboat", 300000, Unit.COPPER),
    Longship: new InventoryItem(ItemType.VEHICLE, "Longship", 1000000, Unit.COPPER),
    Rowboat: new InventoryItem(ItemType.VEHICLE, "Rowboat", 5000, Unit.COPPER),
    Sailing_Ship: new InventoryItem(ItemType.VEHICLE, "Sailing Ship", 1000000, Unit.COPPER),
    Warship: new InventoryItem(ItemType.VEHICLE, "Warship", 2500000, Unit.COPPER),
    Abacus: new InventoryItem(ItemType.MISC, "Abacus", 200, Unit.COPPER),
    AcidVial: new InventoryItem(ItemType.MISC, "Acid (vial)", 2500, Unit.COPPER),
    Alchemists_Fire_Flask: new InventoryItem(ItemType.MISC, "Alchemist's fire (flask)", 5000, Unit.COPPER),
    Arrows20: new InventoryItem(ItemType.AMMUNITION, "Arrows (20)", 100, Unit.COPPER),
    Blowgun_Needles50: new InventoryItem(ItemType.AMMUNITION, "Blowgun Needles (50)", 100, Unit.COPPER),
    Crossbow_Bolts20: new InventoryItem(ItemType.AMMUNITION, "Crossbow bolts (20)", 100, Unit.COPPER),
    Sling_Bullets20: new InventoryItem(ItemType.AMMUNITION, "Sling bullets (20)", 4, Unit.COPPER),
    Antitoxin: new InventoryItem(ItemType.POTION, "Antitoxin", 5000, Unit.COPPER),
    Crystal: new InventoryItem(ItemType.MISC, "Crystal", 1000, Unit.COPPER),
    Orb: new InventoryItem(ItemType.MISC, "Orb", 2000, Unit.COPPER),
    Rod: new InventoryItem(ItemType.MISC, "Rod", 1000, Unit.COPPER),
    Staff: new InventoryItem(ItemType.MISC, "Staff", 500, Unit.COPPER),
    Wand: new InventoryItem(ItemType.MISC, "Wand", 1000, Unit.COPPER),
    Backpack: new InventoryItem(ItemType.MISC, "Backpack", 200, Unit.COPPER),
    Ball_BearingsBag_Of_1000: new InventoryItem(ItemType.AMMUNITION, "Ball bearings (bag of 1,000)", 100, Unit.COPPER),
    Barrel: new InventoryItem(ItemType.MISC, "Barrel", 200, Unit.COPPER),
    Basket: new InventoryItem(ItemType.MISC, "Basket", 40, Unit.COPPER),
    Bedroll: new InventoryItem(ItemType.MISC, "Bedroll", 100, Unit.COPPER),
    Bell: new InventoryItem(ItemType.MISC, "Bell", 100, Unit.COPPER),
    Blanket: new InventoryItem(ItemType.MISC, "Blanket", 50, Unit.COPPER),
    Block_And_Tackle: new InventoryItem(ItemType.MISC, "Block and tackle", 100, Unit.COPPER),
    Book: new InventoryItem(ItemType.MISC, "Book", 2500, Unit.COPPER),
    Glass_Bottle: new InventoryItem(ItemType.MISC, "Glass bottle", 200, Unit.COPPER),
    Bucket: new InventoryItem(ItemType.MISC, "Bucket", 5, Unit.COPPER),
    CaltropsBag_Of_20: new InventoryItem(ItemType.AMMUNITION, "Caltrops (bag of 20)", 100, Unit.COPPER),
    Candle: new InventoryItem(ItemType.MISC, "Candle", 1, Unit.COPPER),
    Case_Crossbow_Bolt: new InventoryItem(ItemType.AMMUNITION, "Case, crossbow bolt", 100, Unit.COPPER),
    Case_Map_Or_Scroll: new InventoryItem(ItemType.MISC, "Case, map or scroll", 100, Unit.COPPER),
    Chain10_Feet: new InventoryItem(ItemType.MISC, "Chain (10 feet)", 500, Unit.COPPER),
    Chalk1_Piece: new InventoryItem(ItemType.MISC, "Chalk (1 piece)", 1, Unit.COPPER),
    Chest: new InventoryItem(ItemType.MISC, "Chest", 500, Unit.COPPER),
    ClothesCommon: new InventoryItem(ItemType.CLOTHES, "Clothes, Common", 50, Unit.COPPER),
    Clothes_Costume: new InventoryItem(ItemType.CLOTHES, "Clothes, costume", 500, Unit.COPPER),
    Clothes_Fine: new InventoryItem(ItemType.CLOTHES, "Clothes, fine", 1500, Unit.COPPER),
    Clothes_Travelers: new InventoryItem(ItemType.CLOTHES, "Clothes, traveler's", 200, Unit.COPPER),
    Component_Pouch: new InventoryItem(ItemType.MISC, "Component pouch", 2500, Unit.COPPER),
    Crowbar: new InventoryItem(ItemType.MISC, "Crowbar", 200, Unit.COPPER),
    Sprig_Of_Mistletoe: new InventoryItem(ItemType.MISC, "Sprig of mistletoe", 100, Unit.COPPER),
    Totem: new InventoryItem(ItemType.MISC, "Totem", 100, Unit.COPPER),
    Wooden_Staff: new InventoryItem(ItemType.MISC, "Wooden staff", 500, Unit.COPPER),
    Yew_Wand: new InventoryItem(ItemType.MISC, "Yew wand", 1000, Unit.COPPER),
    Fishing_Tackle: new InventoryItem(ItemType.MISC, "Fishing tackle", 100, Unit.COPPER),
    FlaskOrTankard: new InventoryItem(ItemType.MISC, "Flask or Tankard", 2, Unit.COPPER),
    Grappling_Hook: new InventoryItem(ItemType.MISC, "Grappling hook", 200, Unit.COPPER),
    Hammer: new InventoryItem(ItemType.MISC, "Hammer", 100, Unit.COPPER),
    Hammer_Sledge: new InventoryItem(ItemType.MISC, "Hammer, sledge", 200, Unit.COPPER),
    Amulet: new InventoryItem(ItemType.MISC, "Amulet", 500, Unit.COPPER),
    Emblem: new InventoryItem(ItemType.MISC, "Emblem", 500, Unit.COPPER),
    Reliquary: new InventoryItem(ItemType.MISC, "Reliquary", 500, Unit.COPPER),
    Holy_WaterFlask: new InventoryItem(ItemType.MISC, "Holy Water (flask)", 2500, Unit.COPPER),
    Hourglass: new InventoryItem(ItemType.MISC, "Hourglass", 2500, Unit.COPPER),
    Hunting_Trap: new InventoryItem(ItemType.MISC, "Hunting trap", 500, Unit.COPPER),
    Ink1_Ounce_Bottle: new InventoryItem(ItemType.MISC, "Ink (1 ounce bottle)", 1000, Unit.COPPER),
    Ink_Pen: new InventoryItem(ItemType.MISC, "Ink pen", 2, Unit.COPPER),
    JugOrPitcher: new InventoryItem(ItemType.MISC, "Jug or Pitcher", 2, Unit.COPPER),
    Kit_Climbers: new InventoryItem(ItemType.TOOL, "Kit, climber's", 2500, Unit.COPPER),
    Kit_Disguise: new InventoryItem(ItemType.TOOL, "Kit, disguise", 2500, Unit.COPPER),
    Kit_Forgery: new InventoryItem(ItemType.TOOL, "Kit, forgery", 1500, Unit.COPPER),
    Kit_Herbalism: new InventoryItem(ItemType.TOOL, "Kit, herbalism", 500, Unit.COPPER),
    Kit_Healers: new InventoryItem(ItemType.TOOL, "Kit, healer's", 500, Unit.COPPER),
    Kit_Mess: new InventoryItem(ItemType.TOOL, "Kit, mess", 20, Unit.COPPER),
    Kit_Poisoners: new InventoryItem(ItemType.TOOL, "Kit, poisoner's", 5000, Unit.COPPER),
    Ladder10_Foot: new InventoryItem(ItemType.MISC, "Ladder (10-foot)", 10, Unit.COPPER),
    Lamp: new InventoryItem(ItemType.MISC, "Lamp", 50, Unit.COPPER),
    Lantern_Bullseye: new InventoryItem(ItemType.MISC, "Lantern, bullseye", 1000, Unit.COPPER),
    Lantern_Hooded: new InventoryItem(ItemType.MISC, "Lantern, hooded", 500, Unit.COPPER),
    Lock: new InventoryItem(ItemType.MISC, "Lock", 1000, Unit.COPPER),
    Magnifying_Glass: new InventoryItem(ItemType.MISC, "Magnifying glass", 10000, Unit.COPPER),
    Manacles: new InventoryItem(ItemType.MISC, "Manacles", 200, Unit.COPPER),
    Mirror_Steel: new InventoryItem(ItemType.MISC, "Mirror, steel", 500, Unit.COPPER),
    OilFlask: new InventoryItem(ItemType.MISC, "Oil (flask)", 10, Unit.COPPER),
    PaperOne_Sheet: new InventoryItem(ItemType.MISC, "Paper (one sheet)", 20, Unit.COPPER),
    ParchmentOne_Sheet: new InventoryItem(ItemType.MISC, "Parchment (one sheet)", 10, Unit.COPPER),
    PerfumeVial: new InventoryItem(ItemType.MISC, "Perfume (vial)", 500, Unit.COPPER),
    Pick_Miners: new InventoryItem(ItemType.MISC, "Pick, miner's", 200, Unit.COPPER),
    Piton: new InventoryItem(ItemType.MISC, "Piton", 5, Unit.COPPER),
    Poison_Basic_Vial: new InventoryItem(ItemType.MISC, "Poison, basic (vial)", 10000, Unit.COPPER),
    Pole10_Foot: new InventoryItem(ItemType.MISC, "Pole (10-foot)", 5, Unit.COPPER),
    Pot_Iron: new InventoryItem(ItemType.MISC, "Pot, iron", 200, Unit.COPPER),
    Potion_Of_Healing: new InventoryItem(ItemType.POTION, "Potion of Healing", 5000, Unit.COPPER),
    Pouch: new InventoryItem(ItemType.MISC, "Pouch", 50, Unit.COPPER),
    Quiver: new InventoryItem(ItemType.AMMUNITION, "Quiver", 100, Unit.COPPER),
    Ram_Portable: new InventoryItem(ItemType.MISC, "Ram, portable", 400, Unit.COPPER),
    Rations1_Day: new InventoryItem(ItemType.FOOD, "Rations (1 day)", 50, Unit.COPPER),
    Robes: new InventoryItem(ItemType.CLOTHES, "Robes", 100, Unit.COPPER),
    Rope_Hempen_50_Feet: new InventoryItem(ItemType.MISC, "Rope, hempen (50 feet)", 100, Unit.COPPER),
    Rope_Silk_50_Feet: new InventoryItem(ItemType.MISC, "Rope, silk (50 feet)", 1000, Unit.COPPER),
    Sack: new InventoryItem(ItemType.MISC, "Sack", 1, Unit.COPPER),
    Scale_Merchants: new InventoryItem(ItemType.MISC, "Scale, merchant's", 500, Unit.COPPER),
    Sealing_Wax: new InventoryItem(ItemType.MISC, "Sealing wax", 50, Unit.COPPER),
    Shovel: new InventoryItem(ItemType.MISC, "Shovel", 200, Unit.COPPER),
    Signal_Whistle: new InventoryItem(ItemType.MISC, "Signal whistle", 5, Unit.COPPER),
    Signet_Ring: new InventoryItem(ItemType.MISC, "Signet ring", 500, Unit.COPPER),
    Soap: new InventoryItem(ItemType.MISC, "Soap", 2, Unit.COPPER),
    Spellbook: new InventoryItem(ItemType.MISC, "Spellbook", 5000, Unit.COPPER),
    Spikes_Iron_10: new InventoryItem(ItemType.MISC, "Spikes, iron (10)", 100, Unit.COPPER),
    Spyglass: new InventoryItem(ItemType.MISC, "Spyglass", 100000, Unit.COPPER),
    Tent_Two_Person: new InventoryItem(ItemType.MISC, "Tent, two-person", 200, Unit.COPPER),
    Tinderbox: new InventoryItem(ItemType.MISC, "Tinderbox", 50, Unit.COPPER),
    Torch: new InventoryItem(ItemType.MISC, "Torch", 1, Unit.COPPER),
    Vial: new InventoryItem(ItemType.MISC, "Vial", 100, Unit.COPPER),
    Waterskin: new InventoryItem(ItemType.MISC, "Waterskin", 20, Unit.COPPER),
    Whetstone: new InventoryItem(ItemType.MISC, "Whetstone", 1, Unit.COPPER),
    Breastplate: new InventoryItem(ItemType.ARMOR, "Breastplate", 40000, Unit.COPPER),
    Chain_Mail: new InventoryItem(ItemType.ARMOR, "Chain Mail", 7500, Unit.COPPER),
    Chain_Shirt: new InventoryItem(ItemType.ARMOR, "Chain Shirt", 5000, Unit.COPPER),
    Half_Plate: new InventoryItem(ItemType.ARMOR, "Half Plate", 75000, Unit.COPPER),
    Hide: new InventoryItem(ItemType.ARMOR, "Hide", 1000, Unit.COPPER),
    Leather: new InventoryItem(ItemType.ARMOR, "Leather", 1000, Unit.COPPER),
    Padded: new InventoryItem(ItemType.ARMOR, "Padded", 500, Unit.COPPER),
    Plate: new InventoryItem(ItemType.ARMOR, "Plate", 150000, Unit.COPPER),
    Ring_Mail: new InventoryItem(ItemType.ARMOR, "Ring Mail", 3000, Unit.COPPER),
    Scale_Mail: new InventoryItem(ItemType.ARMOR, "Scale Mail", 5000, Unit.COPPER),
    Spiked_Armor: new InventoryItem(ItemType.ARMOR, "Spiked Armor", 7500, Unit.COPPER),
    Splint: new InventoryItem(ItemType.ARMOR, "Splint", 20000, Unit.COPPER),
    Studded_Leather: new InventoryItem(ItemType.ARMOR, "Studded Leather", 4500, Unit.COPPER),
    Shield: new InventoryItem(ItemType.ARMOR, "Shield", 1000, Unit.COPPER),
    Cookies: new InventoryItem(ItemType.FOOD, "Cookie (1 dozen)", 30, Unit.COPPER),
    Hardtack: new InventoryItem(ItemType.FOOD, "Hardtack (1 day ration)", 50, Unit.COPPER),
    Bread_Loaf: new InventoryItem(ItemType.FOOD, "Bread, loaf", 2, Unit.COPPER),
    Fruit_Tart: new InventoryItem(ItemType.FOOD, "Fruit tart", 10, Unit.COPPER),
    Pie: new InventoryItem(ItemType.FOOD, "Pie", 60, Unit.COPPER),
    Cake: new InventoryItem(ItemType.FOOD, "Cake (bespoke)", 600, Unit.COPPER),
    Muffins: new InventoryItem(ItemType.FOOD, "Muffins (half dozen)", 80, Unit.COPPER),
    Meat_Pie: new InventoryItem(ItemType.FOOD, "Meat pie", 50, Unit.COPPER),
    Pot_Roast: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef roast", 60, Unit.COPPER),
    Chops: new InventoryItem(ItemType.FOOD, "Venison/lamb/pork chops (6)", 80, Unit.COPPER),
    Steak: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef steak", 60, Unit.COPPER),
    Loin: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef/pork loin", 80, Unit.COPPER),
    Ribs: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef/pork ribs", 60, Unit.COPPER),
    Sausages: new InventoryItem(ItemType.FOOD, "Venison/lamb/pork sausages (6)", 60, Unit.COPPER),
    Bacon: new InventoryItem(ItemType.FOOD, "Bacon", 60, Unit.COPPER),
    Gallon_Of_Ale: new InventoryItem(ItemType.FOOD, "Gallon of Ale", 20, Unit.COPPER),
    Mug_Of_Ale: new InventoryItem(ItemType.FOOD, "Mug of Ale", 4, Unit.COPPER),
    Banquet_Per_Person: new InventoryItem(ItemType.FOOD, "Banquet (per person)", 1000, Unit.COPPER),
    Cheese_Hunk: new InventoryItem(ItemType.FOOD, "Cheese, hunk", 10, Unit.COPPER),
    Inn_Stay_Per_Day_Squalid: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Squalid)", 7, Unit.COPPER),
    Inn_Stay_Per_Day_Poor: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Poor)", 10, Unit.COPPER),
    Inn_Stay_Per_Day_Modest: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Modest)", 50, Unit.COPPER),
    Inn_Stay_Per_Day_Comfortable: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Comfortable)", 80, Unit.COPPER),
    Inn_Stay_Per_Day_Wealthy: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Wealthy)", 200, Unit.COPPER),
    Inn_Stay_Per_Day_Aristocratic: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Aristocratic)", 400, Unit.COPPER),
    Meals_Per_Day_Squalid: new InventoryItem(ItemType.FOOD, "Meals per day (Squalid)", 3, Unit.COPPER),
    Meals_Per_Day_Poor: new InventoryItem(ItemType.FOOD, "Meals per day (Poor)", 6, Unit.COPPER),
    Meals_Per_Day_Modest: new InventoryItem(ItemType.FOOD, "Meals per day (Modest)", 30, Unit.COPPER),
    Meals_Per_Day_Comfortable: new InventoryItem(ItemType.FOOD, "Meals per day (Comfortable)", 50, Unit.COPPER),
    Meals_Per_Day_Wealthy: new InventoryItem(ItemType.FOOD, "Meals per day (Wealthy)", 80, Unit.COPPER),
    Meals_Per_Day_Aristocratic: new InventoryItem(ItemType.FOOD, "Meals per day (Aristocratic)", 200, Unit.COPPER),
    Meat_Chunk: new InventoryItem(ItemType.FOOD, "Meat, chunk", 30, Unit.COPPER),
    Pitcher_Of_Common_Wine: new InventoryItem(ItemType.FOOD, "Pitcher of Common Wine", 20, Unit.COPPER),
    Fine_Bottle_Of_Wine: new InventoryItem(ItemType.FOOD, "Fine Bottle of Wine", 1000, Unit.COPPER),
    Coach_Cab_Beteen_Towns_Per_Mile: new InventoryItem(ItemType.SERVICE, "Coach Cab Beteen Towns (per mile)", 3, Unit.COPPER),
    Coach_Cab_Within_City: new InventoryItem(ItemType.SERVICE, "Coach Cab within City", 1, Unit.COPPER),
    Skilled_Labor_Per_Day: new InventoryItem(ItemType.SERVICE, "Skilled Labor (per day)", 200, Unit.COPPER),
    Untrained_Labor_Per_Day: new InventoryItem(ItemType.SERVICE, "Untrained Labor (per day)", 20, Unit.COPPER),
    Messenger_Per_Mile: new InventoryItem(ItemType.SERVICE, "Messenger (per mile)", 2, Unit.COPPER),
    Road_Or_Gate_Toll: new InventoryItem(ItemType.SERVICE, "Road or Gate Toll", 1, Unit.COPPER),
    Ship_Passsage_Per_Mile: new InventoryItem(ItemType.SERVICE, "Ship Passsage (per mile)", 10, Unit.COPPER),
    Level_1_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 1 Spell (before components)", 1000, Unit.COPPER),
    Level_2_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 2 Spell (before components)", 4000, Unit.COPPER),
    Level_3_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 3 Spell (before components)", 9000, Unit.COPPER),
    Level_4_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 4 Spell (before components)", 16000, Unit.COPPER),
    Level_5_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 5 Spell (before components)", 25000, Unit.COPPER),
    Level_6_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 6 Spell (before components)", 36000, Unit.COPPER),
    Level_7_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 7 Spell (before components)", 49000, Unit.COPPER),
    Level_8_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 8 Spell (before components)", 64000, Unit.COPPER),
    Level_9_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 9 Spell (before components)", 81000, Unit.COPPER),
    Breastplate_Barding: new InventoryItem(ItemType.ARMOR, "Breastplate Barding", 160000, Unit.COPPER),
    Chain_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Chain Mail Barding", 30000, Unit.COPPER),
    Chain_Shirt_Barding: new InventoryItem(ItemType.ARMOR, "Chain Shirt Barding", 20000, Unit.COPPER),
    Half_Plate_Barding: new InventoryItem(ItemType.ARMOR, "Half Plate Barding", 300000, Unit.COPPER),
    Hide_Barding: new InventoryItem(ItemType.ARMOR, "Hide Barding", 4000, Unit.COPPER),
    Leather_Barding: new InventoryItem(ItemType.ARMOR, "Leather Barding", 4000, Unit.COPPER),
    Padded_Barding: new InventoryItem(ItemType.ARMOR, "Padded Barding", 2000, Unit.COPPER),
    Plate_Barding: new InventoryItem(ItemType.ARMOR, "Plate Barding", 600000, Unit.COPPER),
    Ring_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Ring Mail Barding", 12000, Unit.COPPER),
    Scale_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Scale Mail Barding", 20000, Unit.COPPER),
    Spiked_Armor_Barding: new InventoryItem(ItemType.ARMOR, "Spiked Armor Barding", 30000, Unit.COPPER),
    Splint_Barding: new InventoryItem(ItemType.ARMOR, "Splint Barding", 80000, Unit.COPPER),
    Studded_Leather_Barding: new InventoryItem(ItemType.ARMOR, "Studded Leather Barding", 18000, Unit.COPPER),
};
const Prosperities = [
    { Label: "Average Prosperity", noblePercent: 0.005, mercantilePercent: 0.015, tradePercent: 0.18, peasantPercent: 0.80 },
    { Label: "Destitute", noblePercent: 0.0025, mercantilePercent: 0.0075, tradePercent: 0.09, peasantPercent: 0.90 },
    { Label: "Prosperous", noblePercent: 0.01, mercantilePercent: 0.03, tradePercent: 0.36, peasantPercent: 0.60 },
    { Label: "Custom", noblePercent: 0.005, mercantilePercent: 0.015, tradePercent: 0.18, peasantPercent: 0.80 },
];
const MagicLevels = {
    NONE: new MagicLevel("None", "Magic locations, like Wizard Towers, will not appear and businesses will not sell magic items, potions, scrolls, or spellcasting."),
    LOW: new MagicLevel("Low", "Magic locations, like Wizard Towers, are rare. Businesses will only sell common magic items, potions, scrolls, and spellcasting (up to level 1)."),
    HIGH: new MagicLevel("High", "Magic locations, like Wizard Towers, appear rarely for small villages and more frequently for larger settlements. Businesses might sell magic items, potions, scrolls, and spellcasting of all rarity and levels.")
};
