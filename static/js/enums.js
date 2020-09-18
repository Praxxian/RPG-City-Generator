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

const BusinessType = {
    ALCHEMIST_SHOP: {
        name: 'Alchemist Shop',
        caste: Caste.TRADESMEN,
        nouns: ["Cauldron", "Vial", "Mortar", "Alembic", "Flask", "Boiler", "Beaker", "Bottle", "Phial", "Cistern", "Abacus", "Draught", "Elixer", "Brew", "Dram", "Philter", "Tonic"],
        altNames: ["Hermetics", "Alchemy Supplies", "Potions", "Store Room", "Labaratory"],
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
        nouns: ["Shield", "Bulwark", "Aegis", "Buckler", "Helmet", "Pauldron", "Breastplate", "Greaves", "Boot", "Gauntlet", "Chain", "Plate", "Bracer", "Defense", "Warrior", "Knight"],
        altNames: ["Armors", "Armory"],
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
        nouns: ["Oven", "Kiln", "Bun", "Muffin", "Loaf", "Pastry", "Cake", "Roll", "Rolling Pin", "Measuring Cup", "Spoon", "Spatula", "Whisk", "Pan", "Slice", "Pie", "Dozen", "Bowl", "Cookie", "Tart"],
        altNames: ["Oven", "Baked Goods", "Pastry Shop", "Confectioneries", "Bake Shop", "Pâtisserie"],
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
        nouns: ["Anvil", "Hammer", "Forge", "Sledge", "Chisel", "Poker", "Shovel", "Ingot", "Swage", "Bolt", "Chain"],
        altNames: ["Anvil", "Forge", "Ironworks"],
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
        nouns: ["Bow", "Arrow", "Grip", "String", "Notch", "Bolt", "Quiver", "Shaft", "Bowyer", "Bracer", "Crest", "Draw", "Fletching", "Flight", "Limb", "Nib", "Nock", "Point", "Stringer"],
        altNames: ["Bows"],
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
        nouns: ["Knife", "Blade", "Cleaver", "Block", "Roast", "Chop"],
        altNames: ["Meats", "Meat Market", "Prime Cuts"],
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
        nouns: [],
        altNames: ["General Goods", "Market", "Goods", "Marketplace"],
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
        nouns: [],
        altNames: ["Market", "Vegetables", "Fresh Foods"],
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
        nouns: [],
        altNames: ["Herbalism Hut", "Herb Gathering"],
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
        nouns: [],
        altNames: ["Horses", "Fine Steeds", "Mounts", "Colts and Fillies", "Ranch"],
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
        nouns: [],
        altNames: ["Trapping", "Falconry", "Big Game Hunting"],
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
        nouns: ["Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Hotel", "Lodge", "Public House"],
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
        nouns: ["Gem", "Tiara", "Jewel", "Jewel", "Treasure", "Trinket"],
        altNames: ["Fine Jewels", "Treasures", "Gems", "Trinkets"],
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
        nouns: ["Hide", "Grain", "Stitch", "Beveler", "Gauge", "Needle"],
        altNames: ["Leather Goods", "Leather Armor", "Leathers", "Hides"],
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
        nouns: ["Page", "Scroll", "Book", "Shelf", "Tome", "Manuscript", "Sheet"],
        altNames: ["Manuscripts", "Books", "Bookstore", "Tomes", "Volumes", "Scrolls"],
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
        nouns: ["Needle", "Thread", "Spool", "Lace", "Thimble", "Pin", "Bobbin", "Stitch", "Cuff", "Weave", "Loom"],
        altNames: ["Beskpoke Clothing", "Threads", "Attire", "Wardrobe", "Garments", "Vestments", "Tailored Goods", "Fine Clothes"],
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
        nouns: [],
        altNames: ["Animal Skins", "Hides", "Fine Leathers"],
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
        nouns: ["Kettle", "Board", "Spoon", "Fork", "Bowl", "Knife", "Skillet", "Pan", "Pot", "Dish", "Spatula", "Tongs", "Ladle", "Mug", "Pint", "Stein"
            , "Goblet", "Chalice", "Hop", "Grape", "Crock", "Platter", "Jug", "Pitcher", "Stool", "Chair", "Table", "Barrel", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Bar", "Pub", "Alehouse", "Brewery"],
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
        nouns: [],
        altNames: ["Monastery", "Chapel", "Shrine", "Cathedral", "Sanctuary"],
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
        nouns: ["Armory", "Blade", "Sword", "Arsenal", "Mace", "Axe", "Spear", "Hilt", "Pommel", "Hammer", "Edge", "Scabbard", "Sheath", "Warrior", "Knight"],
        altNames: ["Weapons", "Armory", "Blades", "Fine Swords", "Arsenal"],
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
        nouns: ["Wheel", "Spoke", "Hub", "Cart", "Wagon", "Carriage"],
        altNames: ["Carts", "Wagons", "Carriages", "Workshop"],
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
        nouns: [],
        altNames: [],
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
        nouns: ["Mug", "Pint", "Stein", "Barrel", "Mountain", "Valley", "River", "Forest", "Ocean", "Hill", "Lake", "Canyon", "Oasis", "Lagoon", "Beach", "Prairie", "Cove", "Island", "Shrew", "Squirrel", "Owl", "Vole", "Cat", "Dog", "Hound", "Seal", "Mouse", "Hog", "Pig", "Hedgehog", "Urchin", "Whale", "Lion", "Tiger", "Panther", "Cur", "Dolphin"
            , "Monkey", "Ape", "Beaver", "Mouse", "Rat", "Hare", "Rabbit", "Mole", "Bat", "Fox", "Otter", "Badger", "Mink", "Horse", "Colt", "Filly", "Mare", "Stallion", "Pony"
            , "Donkey", "Mule", "Boar", "Deer", "Walrus", "Bear", "Elk", "Ox", "Reindeer", "Hearth", "Lynx", "Wolf", "Elephant", "Crane", "Eagle", "Shrike", "Frog", "Toad", "Snake"
            , "Serpent", "Lizard", "Beetle", "Butterfly", "Moth", "Spider", "Scorpion", "Snail", "Cow", "Bull", "Rooster", "Chicken"
            , "Eel", "Dwarf", "Pegasus", "Rose", "Stag", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Satyr", "Star"
            , "Elf", "Devil", "Gnome", "Orc", "Dragon", "Giant", "Angel", "Goblin", "Raven", "Crow", "Kobold", "Leopard", "Jaguar", "Fish"],
        altNames: ["Ale Works", "Fine Ales", "Beer", "Beers and Ciders", "Brewing", "Brew Co", "Beer Co", "Brew Works", "Ale Co", "Ale", "Bierhaus"],
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
        nouns: [],
        altNames: [],
        frequency: function (citySize) {
            return 0; // Generated per noble family
        }
    },
    MINE: {
        name: 'Mine',
        caste: Caste.NOBLE,
        nouns: [],
        altNames: [],
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    SHIPPING: {
        name: 'Shipping',
        caste: Caste.NOBLE,
        nouns: [],
        altNames: [],
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    QUARRY: {
        name: 'Quarry',
        caste: Caste.NOBLE,
        nouns: [],
        altNames: [],
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
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
    "Gleaming"
]