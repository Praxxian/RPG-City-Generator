function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

const CitySize = {
    EXTRA_SMALL_VILLAGE: {
        name: 'Extra Small Village',
        avgSize: 50,
        maxEmployees: 0,
        label: function(){
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    SMALL_VILLAGE: {
        name: 'Small Village',
        avgSize: 300,
        maxEmployees: 1,
        label: function(){
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    VILLAGE: {
        name: 'Village',
        avgSize: 1000,
        maxEmployees: 2,
        label: function(){
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    TOWN: {
        name: 'Town',
        avgSize: 5000,
        maxEmployees: 3,
        label: function(){
            return `${this.name} (~${this.avgSize.toLocaleString()} people)`
        }
    },
    CITY: {
        name: 'City',
        avgSize: 25000,
        maxEmployees: 4,
        label: function(){
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
        notes: function () { return ''; },
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
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    (Math.floor(Math.random()) + 2);
            }
        }
    },
    BAKERY: {
        name: 'Bakery',
        caste: Caste.TRADESMEN,
        nouns: ["Oven", "Kiln", "Bun", "Muffin", "Loaf", "Pastry", "Cake", "Roll", "Rolling Pin", "Measuring Cup", "Spoon", "Spatula", "Whisk", "Pan", "Slice", "Pie", "Dozen", "Bowl", "Cookie", "Tart"],
        altNames: ["Oven", "Baked Goods", "Pastry Shop", "Confectioneries", "Bake Shop", "Pâtisserie"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    SMITHY: {
        name: 'Smithy',
        caste: Caste.TRADESMEN,
        nouns: ["Anvil", "Hammer", "Forge", "Sledge", "Chisel", "Poker", "Shovel", "Ingot", "Swage", "Bolt", "Chain"],
        altNames: ["Anvil", "Forge", "Ironworks"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    (Math.floor(Math.random()) + 2)
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    BOW_SHOP: {
        name: 'Bow Shop',
        caste: Caste.TRADESMEN,
        nouns: ["Bow", "Arrow", "Grip", "String", "Notch", "Bolt", "Quiver", "Shaft", "Bowyer", "Bracer", "Crest", "Draw", "Fletching", "Flight", "Limb", "Nib", "Nock", "Point", "Stringer"],
        altNames: ["Bows"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.1 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    BUTCHER_SHOP: {
        name: 'Butcher Shop',
        caste: Caste.TRADESMEN,
        nouns: ["Knife", "Blade", "Cleaver", "Block", "Roast", "Chop"],
        altNames: ["Meats", "Meat Market", "Prime Cuts"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    GENERAL_STORE: {
        name: 'General Store',
        caste: Caste.MERCANTILE,
        nouns: [],
        altNames: ["General Goods", "Market", "Goods", "Marketplace"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    GROCERY: {
        name: 'Grocery',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Market", "Vegetables", "Fresh Foods"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.67 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    HERBS: {
        name: 'Herbs',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Herbalism Hut", "Herb Gathering"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    HORSE_RANCH: {
        name: 'Horse Ranch',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Horses", "Fine Steeds", "Mounts", "Colts and Fillies", "Ranch"],
        notes: function () { return ''; },
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
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    HUNTING_CABIN: {
        name: 'Hunting Cabin',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Trapping", "Falconry", "Big Game Hunting"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
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
        notes: function () {
            var r = Math.floor(Math.random() * 20) + 1;
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
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 2);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 3);
            }
        }
    },
    JEWELERY_SHOP: {
        name: 'Jewelery Shop',
        caste: Caste.MERCANTILE,
        nouns: ["Gem", "Tiara", "Jewel", "Jewel", "Treasure", "Trinket"],
        altNames: ["Fine Jewels", "Treasures", "Gems", "Trinkets"],
        notes: function () { return ''; },
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
                    return (Math.floor(Math.random()) + 1);
            }
        }
    },
    LEATHERWORKING: {
        name: 'Leatherworking',
        caste: Caste.TRADESMEN,
        nouns: ["Hide", "Grain", "Stitch", "Beveler", "Gauge", "Needle"],
        altNames: ["Leather Goods", "Leather Armor", "Leathers", "Hides"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    SCRIPTORIUM: {
        name: 'Scriptorium',
        caste: Caste.MERCANTILE,
        nouns: ["Page", "Scroll", "Book", "Shelf", "Tome", "Manuscript", "Sheet"],
        altNames: ["Manuscripts", "Books", "Bookstore", "Tomes", "Volumes", "Scrolls"],
        notes: function () { return ''; },
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
                    return (Math.floor(Math.random()) + 1);
            }
        }
    },
    TAILORING: {
        name: 'Tailoring',
        caste: Caste.TRADESMEN,
        nouns: ["Needle", "Thread", "Spool", "Lace", "Thimble", "Pin", "Bobbin", "Stitch", "Cuff", "Weave", "Loom"],
        altNames: ["Beskpoke Clothing", "Threads", "Attire", "Wardrobe", "Garments", "Vestments", "Tailored Goods", "Fine Clothes"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return 1;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    TANNERY: {
        name: 'Tannery',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Animal Skins", "Hides", "Fine Leathers"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
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
        notes: function () {
            var r = Math.floor(Math.random() * 20) + 1;
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
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    TEMPLE: {
        name: 'Temple',
        caste: Caste.TRADESMEN,
        nouns: [],
        altNames: ["Monastery", "Chapel", "Shrine", "Cathedral", "Sanctuary"],
        notes: function () {
            var r = Math.floor(Math.random() * 20) + 1;
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
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.5 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                case CitySize.VILLAGE:
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random() * 2) + 2);
            }
        }
    },
    WEAPON_SHOP: {
        name: 'Weapon Shop',
        caste: Caste.TRADESMEN,
        nouns: ["Armory", "Blade", "Sword", "Arsenal", "Mace", "Axe", "Spear", "Hilt", "Pommel", "Hammer", "Edge", "Scabbard", "Sheath", "Warrior", "Knight"],
        altNames: ["Weapons", "Armory", "Blades", "Fine Swords", "Arsenal"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return 0;
                case CitySize.VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    (Math.floor(Math.random()) + 2);
            }
        }
    },
    WAINWRIGHT_WORKSHOP: {
        name: 'Wainwright Workshop',
        caste: Caste.TRADESMEN,
        nouns: ["Wheel", "Spoke", "Hub", "Cart", "Wagon", "Carriage"],
        altNames: ["Carts", "Wagons", "Carriages", "Workshop"],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.random() <= 0.01 ? 1 : 0;
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    FARM: {
        name: 'Farm',
        caste: Caste.PEASANT,
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                    return Math.floor(Math.random() * 3) + 7;
                case CitySize.SMALL_VILLAGE:
                    return Math.floor(Math.random() * 12) + 28;
                case CitySize.VILLAGE:
                    return Math.floor(Math.random() * 44) + 99;
                case CitySize.TOWN:
                    return Math.floor(Math.random() * 220) + 447;
                case CitySize.CITY:
                    return Math.floor(Math.random() * 1100) + 2233;
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
        notes: function () { return ''; },
        frequency: function (citySize) {
            switch (citySize) {
                case CitySize.EXTRA_SMALL_VILLAGE:
                case CitySize.SMALL_VILLAGE:
                    return Math.random() <= 0.33 ? 1 : 0;
                case CitySize.VILLAGE:
                    return 1;
                case CitySize.TOWN:
                    return (Math.floor(Math.random()) + 1);
                case CitySize.CITY:
                    return (Math.floor(Math.random()) + 2);
            }
        }
    },
    ESTATE: {
        name: 'Estate',
        caste: Caste.PEASANT,
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (citySize) {
            return 0; // Generated per noble family
        }
    },
    MINE: {
        name: 'Mine',
        caste: Caste.PEASANT,
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    SHIPPING: {
        name: 'Shipping',
        caste: Caste.PEASANT,
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
        frequency: function (citySize) {
            return 0; // Generated for top noble family
        }
    },
    QUARRY: {
        name: 'Quarry',
        caste: Caste.PEASANT,
        nouns: [],
        altNames: [],
        notes: function () { return ''; },
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

const NotableTrait = [
    "canals in place of streets",
    "a massive statue or monument",
    "a grand temple",
    "a large fortress",
    "verdant parks and orchards",
    "a river that divides town",
    "a major trade center",
    "the headquarters of a powerful family or guild",
    "a population of mostly wealthy people",
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
    "hordes of beggars",
    "tough warriors",
    "dark magic",
    "decadence",
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
