class Person {
    FirstName
    LastName
    Caste
    RaceFrequency
    Race
    Age
    Gender
    Family
    Spouse
    Appearance
    Strength
    Weakness
    Talent
    Manuerism
    Interaction
    GoodOrEvilIdeal
    LawfulOrChaoticIdeal
    NeutralOrOtherIdeal
    Bond
    FlawOrSecret
    Personality
    Schedule
    RaceAge

    ownedBusiness
    getBusiness() {
        return this.ownedBusiness;
    }
    setBusiness(business) {
        this.ownedBusiness = business.Name;
        if (!business.Owners.includes(this))
            business.Owners.push(this);
    }

    worksAt
    getEmployer() {
        return this.worksAt;
    }
    setEmployer(business) {
        this.worksAt = business.Name;
        if (!business.Employees.includes(this))
            business.Employees.push(this);
    }

    fullName() {
        return `${this.FirstName} ${this.LastName}`.trim();
    }
}

class City {
    Settings
    People = []
    Businesses = []
    Complete = false
    Details
}

class Personality {
    Openess
    Conscientiousness
    Extraversion
    Agreeableness
    Neuroticisms
}

class Family {
    LastName
    Caste
    UUID = createUUID()

    add(person) {
        if (!person)
            return;
        person.LastName = this.LastName;
        person.Caste = this.Caste;
        person.Family = this;
    }

    displayValue() {
        return `${this.LastName} (${this.UUID.substring(0, 7)}...)`;
    }
}

class Business {
    NameGenKey
    BusinessType
    Owners = []
    Employees = []
    Name
    Description
    Inventory = []
}

class InventoryItem {
    Name
    ItemType
    Cost
    Unit
    DefaultCost

    favors = ['Simple', 'Major', 'Heroic'];

    clone() {
        var inv = new InventoryItem();
        inv.Name = this.Name;
        inv.ItemType = this.ItemType;
        inv.Cost = this.Cost;
        inv.Unit = this.Unit;
        inv.DefaultCost = this.DefaultCost;
        return inv;
    }

    displayCost() {
        switch (this.Unit) {
            case Unit.COPPER:
                return this.goldCost(Cost);
            case Unit.FAVOR:
                var favorStr = `${favors[this.Cost + 1]} favor`;
                if (this.DefaultCost > 0)
                    favorStr += ` normally ${this.goldCost(this.DefaultCost)})`;
                return favorStr;
        }
    }

    goldCost(amount) {
        var gp;
        var sp;

        var remainder = amount;
        var costStr = '';

        if (remainder >= 100) {
            gp = remainder / 100;
            remainder -= gp * 100;
            costStr += ` ${gp} GP`;
        }
        if (remainder >= 10) {
            sp = remainder / 10;
            remainder -= sp * 10;
            costStr += ` ${sp} SP`;
        }

        if (remainder > 0)
            costStr += ` ${remainder} CP`;

        return costStr.Trim();
    }
}

const AllItems = {
    ALCHEMISTS_SUPPLIES: { ItemType: ItemType.TOOL, Name: "Alchemist's supplies", Cost: 5000, Unit: Unit.COPPER },
    BREWERS_SUPPLIES: { ItemType: ItemType.TOOL, Name: "Brewer's supplies", Cost: 2000, Unit: Unit.COPPER },
    CALLIGRAPHERS_SUPPLIES: { ItemType: ItemType.TOOL, Name: "Calligrapher's Supplies", Cost: 1000, Unit: Unit.COPPER },
    CARPENTERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Carpenter's tools", Cost: 800, Unit: Unit.COPPER },
    CARTOGRAPHERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Cartographer's tools", Cost: 1500, Unit: Unit.COPPER },
    COBBLERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Cobbler's tools", Cost: 500, Unit: Unit.COPPER },
    COOKS_UTENSILS: { ItemType: ItemType.TOOL, Name: "Cook's utensils", Cost: 100, Unit: Unit.COPPER },
    GLASSBLOWERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Glassblower's tools", Cost: 3000, Unit: Unit.COPPER },
    JEWELERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Jeweler's tools", Cost: 2500, Unit: Unit.COPPER },
    LEATHERWORKERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Leatherworker's tools", Cost: 500, Unit: Unit.COPPER },
    MASONS_TOOLS: { ItemType: ItemType.TOOL, Name: "Mason's tools", Cost: 1000, Unit: Unit.COPPER },
    PAINTERS_SUPPLIES: { ItemType: ItemType.TOOL, Name: "Painter's supplies", Cost: 1000, Unit: Unit.COPPER },
    POTTERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Potter's tools", Cost: 1000, Unit: Unit.COPPER },
    SMITHS_TOOLS: { ItemType: ItemType.TOOL, Name: "Smith's tools", Cost: 2000, Unit: Unit.COPPER },
    TINKERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Tinker's tools", Cost: 5000, Unit: Unit.COPPER },
    WEAVERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Weaver's tools", Cost: 100, Unit: Unit.COPPER },
    WOODCARVERS_TOOLS: { ItemType: ItemType.TOOL, Name: "Woodcarver's tools", Cost: 100, Unit: Unit.COPPER },
    DICE_SET: { ItemType: ItemType.GAMINGSET, Name: "Dice Set", Cost: 10, Unit: Unit.COPPER },
    PLAYING_CARD_SET: { ItemType: ItemType.GAMINGSET, Name: "Playing Card Set", Cost: 50, Unit: Unit.COPPER },
    BAGPIPES: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Bagpipes", Cost: 3000, Unit: Unit.COPPER },
    DRUM: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Drum", Cost: 600, Unit: Unit.COPPER },
    DULCIMER: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Dulcimer", Cost: 2500, Unit: Unit.COPPER },
    FLUTE: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Flute", Cost: 200, Unit: Unit.COPPER },
    LUTE: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Lute", Cost: 3500, Unit: Unit.COPPER },
    LYRE: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Lyre", Cost: 3000, Unit: Unit.COPPER },
    HORN: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Horn", Cost: 300, Unit: Unit.COPPER },
    PAN_FLUTE: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Pan Flute", Cost: 1200, Unit: Unit.COPPER },
    SHAWM: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Shawm", Cost: 200, Unit: Unit.COPPER },
    VIOL: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Viol", Cost: 3000, Unit: Unit.COPPER },
    NAVIGATORS_TOOLS: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Navigator's tools", Cost: 2500, Unit: Unit.COPPER },
    THIEVES_TOOLS: { ItemType: ItemType.MUSICALINSTRUMENT, Name: "Thieves' tools", Cost: 2500, Unit: Unit.COPPER },
    CLUB: { ItemType: ItemType.WEAPON, Name: "Club", Cost: 10, Unit: Unit.COPPER },
    DAGGER: { ItemType: ItemType.WEAPON, Name: "Dagger", Cost: 200, Unit: Unit.COPPER },
    GREATCLUB: { ItemType: ItemType.WEAPON, Name: "Greatclub", Cost: 20, Unit: Unit.COPPER },
    HANDAXE: { ItemType: ItemType.WEAPON, Name: "Handaxe", Cost: 500, Unit: Unit.COPPER },
    JAVELIN: { ItemType: ItemType.WEAPON, Name: "Javelin", Cost: 50, Unit: Unit.COPPER },
    LIGHT_HAMMER: { ItemType: ItemType.WEAPON, Name: "Light Hammer", Cost: 200, Unit: Unit.COPPER },
    MACE: { ItemType: ItemType.WEAPON, Name: "Mace", Cost: 500, Unit: Unit.COPPER },
    QUARTERSTAFF: { ItemType: ItemType.WEAPON, Name: "Quarterstaff", Cost: 20, Unit: Unit.COPPER },
    SICKLE: { ItemType: ItemType.WEAPON, Name: "Sickle", Cost: 100, Unit: Unit.COPPER },
    SPEAR: { ItemType: ItemType.WEAPON, Name: "Spear", Cost: 100, Unit: Unit.COPPER },
    CROSSBOW_LIGHT: { ItemType: ItemType.WEAPON, Name: "Crossbow, light", Cost: 2500, Unit: Unit.COPPER },
    DART: { ItemType: ItemType.WEAPON, Name: "Dart", Cost: 5, Unit: Unit.COPPER },
    SHORTBOW: { ItemType: ItemType.WEAPON, Name: "Shortbow", Cost: 2500, Unit: Unit.COPPER },
    SLING: { ItemType: ItemType.WEAPON, Name: "Sling", Cost: 10, Unit: Unit.COPPER },
    BATTLEAXE: { ItemType: ItemType.WEAPON, Name: "Battleaxe", Cost: 1000, Unit: Unit.COPPER },
    FLAIL: { ItemType: ItemType.WEAPON, Name: "Flail", Cost: 1000, Unit: Unit.COPPER },
    GLAIVE: { ItemType: ItemType.WEAPON, Name: "Glaive", Cost: 2000, Unit: Unit.COPPER },
    GREATAXE: { ItemType: ItemType.WEAPON, Name: "Greataxe", Cost: 3000, Unit: Unit.COPPER },
    GREATSWORD: { ItemType: ItemType.WEAPON, Name: "Greatsword", Cost: 5000, Unit: Unit.COPPER },
    HALBERD: { ItemType: ItemType.WEAPON, Name: "Halberd", Cost: 2000, Unit: Unit.COPPER },
    LANCE: { ItemType: ItemType.WEAPON, Name: "Lance", Cost: 1000, Unit: Unit.COPPER },
    LONGSWORD: { ItemType: ItemType.WEAPON, Name: "Longsword", Cost: 1500, Unit: Unit.COPPER },
    MAUL: { ItemType: ItemType.WEAPON, Name: "Maul", Cost: 1000, Unit: Unit.COPPER },
    MORNINGSTAR: { ItemType: ItemType.WEAPON, Name: "Morningstar", Cost: 1500, Unit: Unit.COPPER },
    PIKE: { ItemType: ItemType.WEAPON, Name: "Pike", Cost: 500, Unit: Unit.COPPER },
    RAPIER: { ItemType: ItemType.WEAPON, Name: "Rapier", Cost: 2500, Unit: Unit.COPPER },
    SCIMITAR: { ItemType: ItemType.WEAPON, Name: "Scimitar", Cost: 2500, Unit: Unit.COPPER },
    SHORTSWORD: { ItemType: ItemType.WEAPON, Name: "Shortsword", Cost: 1000, Unit: Unit.COPPER },
    TRIDENT: { ItemType: ItemType.WEAPON, Name: "Trident", Cost: 500, Unit: Unit.COPPER },
    WAR_PICK: { ItemType: ItemType.WEAPON, Name: "War Pick", Cost: 500, Unit: Unit.COPPER },
    WARHAMMER: { ItemType: ItemType.WEAPON, Name: "Warhammer", Cost: 1500, Unit: Unit.COPPER },
    WHIP: { ItemType: ItemType.WEAPON, Name: "Whip", Cost: 200, Unit: Unit.COPPER },
    BLOWGUN: { ItemType: ItemType.WEAPON, Name: "Blowgun", Cost: 1000, Unit: Unit.COPPER },
    CROSSBOW_HAND: { ItemType: ItemType.WEAPON, Name: "Crossbow, hand", Cost: 7500, Unit: Unit.COPPER },
    CROSSBOW_HEAVY: { ItemType: ItemType.WEAPON, Name: "Crossbow, heavy", Cost: 5000, Unit: Unit.COPPER },
    LONGBOW: { ItemType: ItemType.WEAPON, Name: "Longbow", Cost: 5000, Unit: Unit.COPPER },
    NET: { ItemType: ItemType.WEAPON, Name: "Net", Cost: 100, Unit: Unit.COPPER },
    DONKEY_OR_MULE: { ItemType: ItemType.ANIMAL, Name: "Donkey or mule", Cost: 800, Unit: Unit.COPPER },
    ELEPHANT: { ItemType: ItemType.ANIMAL, Name: "Elephant", Cost: 20000, Unit: Unit.COPPER },
    HORSE_DRAFT_OR_CAMEL: { ItemType: ItemType.ANIMAL, Name: "Horse, draft (or Camel)", Cost: 5000, Unit: Unit.COPPER },
    HORSE_RIDING: { ItemType: ItemType.ANIMAL, Name: "Horse, riding", Cost: 7500, Unit: Unit.COPPER },
    MASTIFF: { ItemType: ItemType.ANIMAL, Name: "Mastiff", Cost: 2500, Unit: Unit.COPPER },
    PONY: { ItemType: ItemType.ANIMAL, Name: "Pony", Cost: 3000, Unit: Unit.COPPER },
    WARHORSE: { ItemType: ItemType.ANIMAL, Name: "Warhorse", Cost: 40000, Unit: Unit.COPPER },
    BIT_AND_BRIDLE: { ItemType: ItemType.TACK, Name: "Bit and bridle", Cost: 200, Unit: Unit.COPPER },
    CARRIAGE: { ItemType: ItemType.VEHICLE, Name: "Carriage", Cost: 10000, Unit: Unit.COPPER },
    CART: { ItemType: ItemType.VEHICLE, Name: "Cart", Cost: 1500, Unit: Unit.COPPER },
    CHARIOT: { ItemType: ItemType.VEHICLE, Name: "Chariot", Cost: 25000, Unit: Unit.COPPER },
    ANIMAL_FEED_PER_DAY: { ItemType: ItemType.TACK, Name: "Animal Feed (per day)", Cost: 5, Unit: Unit.COPPER },
    SADDLE_EXOTIC: { ItemType: ItemType.TACK, Name: "Saddle, Exotic", Cost: 6000, Unit: Unit.COPPER },
    SADDLEMILITARY: { ItemType: ItemType.TACK, Name: "Saddle, Military", Cost: 2000, Unit: Unit.COPPER },
    SADDLE_PACK: { ItemType: ItemType.TACK, Name: "Saddle, Pack", Cost: 500, Unit: Unit.COPPER },
    SADDLE_RIDING: { ItemType: ItemType.TACK, Name: "Saddle, Riding", Cost: 1000, Unit: Unit.COPPER },
    SADDLEBAGS: { ItemType: ItemType.TACK, Name: "Saddlebags", Cost: 400, Unit: Unit.COPPER },
    SLED: { ItemType: ItemType.VEHICLE, Name: "Sled", Cost: 2000, Unit: Unit.COPPER },
    STABLING_PER_DAY: { ItemType: ItemType.SERVICE, Name: "Stabling (per day)", Cost: 50, Unit: Unit.COPPER },
    WAGON: { ItemType: ItemType.VEHICLE, Name: "Wagon", Cost: 3500, Unit: Unit.COPPER },
    GALLEY: { ItemType: ItemType.VEHICLE, Name: "Galley", Cost: 3000000, Unit: Unit.COPPER },
    KEELBOAT: { ItemType: ItemType.VEHICLE, Name: "Keelboat", Cost: 300000, Unit: Unit.COPPER },
    LONGSHIP: { ItemType: ItemType.VEHICLE, Name: "Longship", Cost: 1000000, Unit: Unit.COPPER },
    ROWBOAT: { ItemType: ItemType.VEHICLE, Name: "Rowboat", Cost: 5000, Unit: Unit.COPPER },
    SAILING_SHIP: { ItemType: ItemType.VEHICLE, Name: "Sailing Ship", Cost: 1000000, Unit: Unit.COPPER },
    WARSHIP: { ItemType: ItemType.VEHICLE, Name: "Warship", Cost: 2500000, Unit: Unit.COPPER },
    ABACUS: { ItemType: ItemType.MISC, Name: "Abacus", Cost: 200, Unit: Unit.COPPER },
    ACIDVIAL: { ItemType: ItemType.MISC, Name: "Acid (vial)", Cost: 2500, Unit: Unit.COPPER },
    ALCHEMISTS_FIRE_FLASK: { ItemType: ItemType.MISC, Name: "Alchemist's fire (flask)", Cost: 5000, Unit: Unit.COPPER },
    ARROWS20: { ItemType: ItemType.AMMUNITION, Name: "Arrows (20)", Cost: 100, Unit: Unit.COPPER },
    BLOWGUN_NEEDLES50: { ItemType: ItemType.AMMUNITION, Name: "Blowgun Needles (50)", Cost: 100, Unit: Unit.COPPER },
    CROSSBOW_BOLTS20: { ItemType: ItemType.AMMUNITION, Name: "Crossbow bolts (20)", Cost: 100, Unit: Unit.COPPER },
    SLING_BULLETS20: { ItemType: ItemType.AMMUNITION, Name: "Sling bullets (20)", Cost: 4, Unit: Unit.COPPER },
    ANTITOXIN: { ItemType: ItemType.POTION, Name: "Antitoxin", Cost: 5000, Unit: Unit.COPPER },
    CRYSTAL: { ItemType: ItemType.MISC, Name: "Crystal", Cost: 1000, Unit: Unit.COPPER },
    ORB: { ItemType: ItemType.MISC, Name: "Orb", Cost: 2000, Unit: Unit.COPPER },
    ROD: { ItemType: ItemType.MISC, Name: "Rod", Cost: 1000, Unit: Unit.COPPER },
    STAFF: { ItemType: ItemType.MISC, Name: "Staff", Cost: 500, Unit: Unit.COPPER },
    WAND: { ItemType: ItemType.MISC, Name: "Wand", Cost: 1000, Unit: Unit.COPPER },
    BACKPACK: { ItemType: ItemType.MISC, Name: "Backpack", Cost: 200, Unit: Unit.COPPER },
    BALL_BEARINGSBAG_OF_1000: { ItemType: ItemType.AMMUNITION, Name: "Ball bearings (bag of 1,000)", Cost: 100, Unit: Unit.COPPER },
    BARREL: { ItemType: ItemType.MISC, Name: "Barrel", Cost: 200, Unit: Unit.COPPER },
    BASKET: { ItemType: ItemType.MISC, Name: "Basket", Cost: 40, Unit: Unit.COPPER },
    BEDROLL: { ItemType: ItemType.MISC, Name: "Bedroll", Cost: 100, Unit: Unit.COPPER },
    BELL: { ItemType: ItemType.MISC, Name: "Bell", Cost: 100, Unit: Unit.COPPER },
    BLANKET: { ItemType: ItemType.MISC, Name: "Blanket", Cost: 50, Unit: Unit.COPPER },
    BLOCK_AND_TACKLE: { ItemType: ItemType.MISC, Name: "Block and tackle", Cost: 100, Unit: Unit.COPPER },
    BOOK: { ItemType: ItemType.MISC, Name: "Book", Cost: 2500, Unit: Unit.COPPER },
    GLASS_BOTTLE: { ItemType: ItemType.MISC, Name: "Glass bottle", Cost: 200, Unit: Unit.COPPER },
    BUCKET: { ItemType: ItemType.MISC, Name: "Bucket", Cost: 5, Unit: Unit.COPPER },
    CALTROPSBAG_OF_20: { ItemType: ItemType.AMMUNITION, Name: "Caltrops (bag of 20)", Cost: 100, Unit: Unit.COPPER },
    CANDLE: { ItemType: ItemType.MISC, Name: "Candle", Cost: 1, Unit: Unit.COPPER },
    CASE_CROSSBOW_BOLT: { ItemType: ItemType.AMMUNITION, Name: "Case, crossbow bolt", Cost: 100, Unit: Unit.COPPER },
    CASE_MAP_OR_SCROLL: { ItemType: ItemType.MISC, Name: "Case, map or scroll", Cost: 100, Unit: Unit.COPPER },
    CHAIN10_FEET: { ItemType: ItemType.MISC, Name: "Chain (10 feet)", Cost: 500, Unit: Unit.COPPER },
    CHALK1_PIECE: { ItemType: ItemType.MISC, Name: "Chalk (1 piece)", Cost: 1, Unit: Unit.COPPER },
    CHEST: { ItemType: ItemType.MISC, Name: "Chest", Cost: 500, Unit: Unit.COPPER },
    CLOTHESCOMMON: { ItemType: ItemType.CLOTHES, Name: "Clothes, Common", Cost: 50, Unit: Unit.COPPER },
    CLOTHES_COSTUME: { ItemType: ItemType.CLOTHES, Name: "Clothes, costume", Cost: 500, Unit: Unit.COPPER },
    CLOTHES_FINE: { ItemType: ItemType.CLOTHES, Name: "Clothes, fine", Cost: 1500, Unit: Unit.COPPER },
    CLOTHES_TRAVELERS: { ItemType: ItemType.CLOTHES, Name: "Clothes, traveler's", Cost: 200, Unit: Unit.COPPER },
    COMPONENT_POUCH: { ItemType: ItemType.MISC, Name: "Component pouch", Cost: 2500, Unit: Unit.COPPER },
    CROWBAR: { ItemType: ItemType.MISC, Name: "Crowbar", Cost: 200, Unit: Unit.COPPER },
    SPRIG_OF_MISTLETOE: { ItemType: ItemType.MISC, Name: "Sprig of mistletoe", Cost: 100, Unit: Unit.COPPER },
    TOTEM: { ItemType: ItemType.MISC, Name: "Totem", Cost: 100, Unit: Unit.COPPER },
    WOODEN_STAFF: { ItemType: ItemType.MISC, Name: "Wooden staff", Cost: 500, Unit: Unit.COPPER },
    YEW_WAND: { ItemType: ItemType.MISC, Name: "Yew wand", Cost: 1000, Unit: Unit.COPPER },
    FISHING_TACKLE: { ItemType: ItemType.MISC, Name: "Fishing tackle", Cost: 100, Unit: Unit.COPPER },
    FLASKORTANKARD: { ItemType: ItemType.MISC, Name: "Flask or Tankard", Cost: 2, Unit: Unit.COPPER },
    GRAPPLING_HOOK: { ItemType: ItemType.MISC, Name: "Grappling hook", Cost: 200, Unit: Unit.COPPER },
    HAMMER: { ItemType: ItemType.MISC, Name: "Hammer", Cost: 100, Unit: Unit.COPPER },
    HAMMER_SLEDGE: { ItemType: ItemType.MISC, Name: "Hammer, sledge", Cost: 200, Unit: Unit.COPPER },
    AMULET: { ItemType: ItemType.MISC, Name: "Amulet", Cost: 500, Unit: Unit.COPPER },
    EMBLEM: { ItemType: ItemType.MISC, Name: "Emblem", Cost: 500, Unit: Unit.COPPER },
    RELIQUARY: { ItemType: ItemType.MISC, Name: "Reliquary", Cost: 500, Unit: Unit.COPPER },
    HOLY_WATERFLASK: { ItemType: ItemType.MISC, Name: "Holy Water (flask)", Cost: 2500, Unit: Unit.COPPER },
    HOURGLASS: { ItemType: ItemType.MISC, Name: "Hourglass", Cost: 2500, Unit: Unit.COPPER },
    HUNTING_TRAP: { ItemType: ItemType.MISC, Name: "Hunting trap", Cost: 500, Unit: Unit.COPPER },
    INK1_OUNCE_BOTTLE: { ItemType: ItemType.MISC, Name: "Ink (1 ounce bottle)", Cost: 1000, Unit: Unit.COPPER },
    INK_PEN: { ItemType: ItemType.MISC, Name: "Ink pen", Cost: 2, Unit: Unit.COPPER },
    JUGORPITCHER: { ItemType: ItemType.MISC, Name: "Jug or Pitcher", Cost: 2, Unit: Unit.COPPER },
    KIT_CLIMBERS: { ItemType: ItemType.TOOL, Name: "Kit, climber's", Cost: 2500, Unit: Unit.COPPER },
    KIT_DISGUISE: { ItemType: ItemType.TOOL, Name: "Kit, disguise", Cost: 2500, Unit: Unit.COPPER },
    KIT_FORGERY: { ItemType: ItemType.TOOL, Name: "Kit, forgery", Cost: 1500, Unit: Unit.COPPER },
    KIT_HERBALISM: { ItemType: ItemType.TOOL, Name: "Kit, herbalism", Cost: 500, Unit: Unit.COPPER },
    KIT_HEALERS: { ItemType: ItemType.TOOL, Name: "Kit, healer's", Cost: 500, Unit: Unit.COPPER },
    KIT_MESS: { ItemType: ItemType.TOOL, Name: "Kit, mess", Cost: 20, Unit: Unit.COPPER },
    KIT_POISONERS: { ItemType: ItemType.TOOL, Name: "Kit, poisoner's", Cost: 5000, Unit: Unit.COPPER },
    LADDER10_FOOT: { ItemType: ItemType.MISC, Name: "Ladder (10-foot)", Cost: 10, Unit: Unit.COPPER },
    LAMP: { ItemType: ItemType.MISC, Name: "Lamp", Cost: 50, Unit: Unit.COPPER },
    LANTERN_BULLSEYE: { ItemType: ItemType.MISC, Name: "Lantern, bullseye", Cost: 1000, Unit: Unit.COPPER },
    LANTERN_HOODED: { ItemType: ItemType.MISC, Name: "Lantern, hooded", Cost: 500, Unit: Unit.COPPER },
    LOCK: { ItemType: ItemType.MISC, Name: "Lock", Cost: 1000, Unit: Unit.COPPER },
    MAGNIFYING_GLASS: { ItemType: ItemType.MISC, Name: "Magnifying glass", Cost: 10000, Unit: Unit.COPPER },
    MANACLES: { ItemType: ItemType.MISC, Name: "Manacles", Cost: 200, Unit: Unit.COPPER },
    MIRROR_STEEL: { ItemType: ItemType.MISC, Name: "Mirror, steel", Cost: 500, Unit: Unit.COPPER },
    OILFLASK: { ItemType: ItemType.MISC, Name: "Oil (flask)", Cost: 10, Unit: Unit.COPPER },
    PAPERONE_SHEET: { ItemType: ItemType.MISC, Name: "Paper (one sheet)", Cost: 20, Unit: Unit.COPPER },
    PARCHMENTONE_SHEET: { ItemType: ItemType.MISC, Name: "Parchment (one sheet)", Cost: 10, Unit: Unit.COPPER },
    PERFUMEVIAL: { ItemType: ItemType.MISC, Name: "Perfume (vial)", Cost: 500, Unit: Unit.COPPER },
    PICK_MINERS: { ItemType: ItemType.MISC, Name: "Pick, miner's", Cost: 200, Unit: Unit.COPPER },
    PITON: { ItemType: ItemType.MISC, Name: "Piton", Cost: 5, Unit: Unit.COPPER },
    POISON_BASIC_VIAL: { ItemType: ItemType.MISC, Name: "Poison, basic (vial)", Cost: 10000, Unit: Unit.COPPER },
    POLE10_FOOT: { ItemType: ItemType.MISC, Name: "Pole (10-foot)", Cost: 5, Unit: Unit.COPPER },
    POT_IRON: { ItemType: ItemType.MISC, Name: "Pot, iron", Cost: 200, Unit: Unit.COPPER },
    POTION_OF_HEALING: { ItemType: ItemType.Potion, Name: "Potion of Healing", Cost: 5000, Unit: Unit.COPPER },
    POUCH: { ItemType: ItemType.MISC, Name: "Pouch", Cost: 50, Unit: Unit.COPPER },
    QUIVER: { ItemType: ItemType.AMMUNITION, Name: "Quiver", Cost: 100, Unit: Unit.COPPER },
    RAM_PORTABLE: { ItemType: ItemType.MISC, Name: "Ram, portable", Cost: 400, Unit: Unit.COPPER },
    RATIONS1_DAY: { ItemType: ItemType.FOOD, Name: "Rations (1 day)", Cost: 50, Unit: Unit.COPPER },
    ROBES: { ItemType: ItemType.CLOTHES, Name: "Robes", Cost: 100, Unit: Unit.COPPER },
    ROPE_HEMPEN_50_FEET: { ItemType: ItemType.MISC, Name: "Rope, hempen (50 feet)", Cost: 100, Unit: Unit.COPPER },
    ROPE_SILK_50_FEET: { ItemType: ItemType.MISC, Name: "Rope, silk (50 feet)", Cost: 1000, Unit: Unit.COPPER },
    SACK: { ItemType: ItemType.MISC, Name: "Sack", Cost: 1, Unit: Unit.COPPER },
    SCALE_MERCHANTS: { ItemType: ItemType.MISC, Name: "Scale, merchant's", Cost: 500, Unit: Unit.COPPER },
    SEALING_WAX: { ItemType: ItemType.MISC, Name: "Sealing wax", Cost: 50, Unit: Unit.COPPER },
    SHOVEL: { ItemType: ItemType.MISC, Name: "Shovel", Cost: 200, Unit: Unit.COPPER },
    SIGNAL_WHISTLE: { ItemType: ItemType.MISC, Name: "Signal whistle", Cost: 5, Unit: Unit.COPPER },
    SIGNET_RING: { ItemType: ItemType.MISC, Name: "Signet ring", Cost: 500, Unit: Unit.COPPER },
    SOAP: { ItemType: ItemType.MISC, Name: "Soap", Cost: 2, Unit: Unit.COPPER },
    SPELLBOOK: { ItemType: ItemType.MISC, Name: "Spellbook", Cost: 5000, Unit: Unit.COPPER },
    SPIKES_IRON_10: { ItemType: ItemType.MISC, Name: "Spikes, iron (10)", Cost: 100, Unit: Unit.COPPER },
    SPYGLASS: { ItemType: ItemType.MISC, Name: "Spyglass", Cost: 100000, Unit: Unit.COPPER },
    TENT_TWO_PERSON: { ItemType: ItemType.MISC, Name: "Tent, two-person", Cost: 200, Unit: Unit.COPPER },
    TINDERBOX: { ItemType: ItemType.MISC, Name: "Tinderbox", Cost: 50, Unit: Unit.COPPER },
    TORCH: { ItemType: ItemType.MISC, Name: "Torch", Cost: 1, Unit: Unit.COPPER },
    VIAL: { ItemType: ItemType.MISC, Name: "Vial", Cost: 100, Unit: Unit.COPPER },
    WATERSKIN: { ItemType: ItemType.MISC, Name: "Waterskin", Cost: 20, Unit: Unit.COPPER },
    WHETSTONE: { ItemType: ItemType.MISC, Name: "Whetstone", Cost: 1, Unit: Unit.COPPER },
    BREASTPLATE: { ItemType: ItemType.ARMOR, Name: "Breastplate", Cost: 40000, Unit: Unit.COPPER },
    CHAIN_MAIL: { ItemType: ItemType.ARMOR, Name: "Chain Mail", Cost: 7500, Unit: Unit.COPPER },
    CHAIN_SHIRT: { ItemType: ItemType.ARMOR, Name: "Chain Shirt", Cost: 5000, Unit: Unit.COPPER },
    HALF_PLATE: { ItemType: ItemType.ARMOR, Name: "Half Plate", Cost: 75000, Unit: Unit.COPPER },
    HIDE: { ItemType: ItemType.ARMOR, Name: "Hide", Cost: 1000, Unit: Unit.COPPER },
    LEATHER: { ItemType: ItemType.ARMOR, Name: "Leather", Cost: 1000, Unit: Unit.COPPER },
    PADDED: { ItemType: ItemType.ARMOR, Name: "Padded", Cost: 500, Unit: Unit.COPPER },
    PLATE: { ItemType: ItemType.ARMOR, Name: "Plate", Cost: 150000, Unit: Unit.COPPER },
    RING_MAIL: { ItemType: ItemType.ARMOR, Name: "Ring Mail", Cost: 3000, Unit: Unit.COPPER },
    SCALE_MAIL: { ItemType: ItemType.ARMOR, Name: "Scale Mail", Cost: 5000, Unit: Unit.COPPER },
    SPIKED_ARMOR: { ItemType: ItemType.ARMOR, Name: "Spiked Armor", Cost: 7500, Unit: Unit.COPPER },
    SPLINT: { ItemType: ItemType.ARMOR, Name: "Splint", Cost: 20000, Unit: Unit.COPPER },
    STUDDED_LEATHER: { ItemType: ItemType.ARMOR, Name: "Studded Leather", Cost: 4500, Unit: Unit.COPPER },
    SHIELD: { ItemType: ItemType.ARMOR, Name: "Shield", Cost: 1000, Unit: Unit.COPPER },
    COOKIES: { ItemType: ItemType.FOOD, Name: "Cookie (1 dozen)", Cost: 30, Unit: Unit.COPPER },
    HARDTACK: { ItemType: ItemType.FOOD, Name: "Hardtack (1 day ration)", Cost: 50, Unit: Unit.COPPER },
    BREAD_LOAF: { ItemType: ItemType.FOOD, Name: "Bread, loaf", Cost: 2, Unit: Unit.COPPER },
    FRUIT_TART: { ItemType: ItemType.FOOD, Name: "Fruit tart", Cost: 10, Unit: Unit.COPPER },
    PIE: { ItemType: ItemType.FOOD, Name: "Pie", Cost: 60, Unit: Unit.COPPER },
    CAKE: { ItemType: ItemType.FOOD, Name: "Cake (bespoke)", Cost: 600, Unit: Unit.COPPER },
    MUFFINS: { ItemType: ItemType.FOOD, Name: "Muffins (half dozen)", Cost: 80, Unit: Unit.COPPER },
    MEAT_PIE: { ItemType: ItemType.FOOD, Name: "Meat pie", Cost: 50, Unit: Unit.COPPER },
    POT_ROAST: { ItemType: ItemType.FOOD, Name: "Venison/lamb/beef roast", Cost: 60, Unit: Unit.COPPER },
    CHOPS: { ItemType: ItemType.FOOD, Name: "Venison/lamb/pork chops (6)", Cost: 80, Unit: Unit.COPPER },
    STEAK: { ItemType: ItemType.FOOD, Name: "Venison/lamb/beef steak", Cost: 60, Unit: Unit.COPPER },
    LOIN: { ItemType: ItemType.FOOD, Name: "Venison/lamb/beef/pork loin", Cost: 80, Unit: Unit.COPPER },
    RIBS: { ItemType: ItemType.FOOD, Name: "Venison/lamb/beef/pork ribs", Cost: 60, Unit: Unit.COPPER },
    SAUSAGES: { ItemType: ItemType.FOOD, Name: "Venison/lamb/pork sausages (6)", Cost: 60, Unit: Unit.COPPER },
    BACON: { ItemType: ItemType.FOOD, Name: "Bacon", Cost: 60, Unit: Unit.COPPER },
    GALLON_OF_ALE: { ItemType: ItemType.FOOD, Name: "Gallon of Ale", Cost: 20, Unit: Unit.COPPER },
    MUG_OF_ALE: { ItemType: ItemType.FOOD, Name: "Mug of Ale", Cost: 4, Unit: Unit.COPPER },
    BANQUET_PER_PERSON: { ItemType: ItemType.FOOD, Name: "Banquet (per person)", Cost: 1000, Unit: Unit.COPPER },
    CHEESE_HUNK: { ItemType: ItemType.FOOD, Name: "Cheese, hunk", Cost: 10, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_SQUALID: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Squalid)", Cost: 7, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_POOR: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Poor)", Cost: 10, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_MODEST: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Modest)", Cost: 50, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_COMFORTABLE: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Comfortable)", Cost: 80, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_WEALTHY: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Wealthy)", Cost: 200, Unit: Unit.COPPER },
    INN_STAY_PER_DAY_ARISTOCRATIC: { ItemType: ItemType.SERVICE, Name: "Inn Stay per day (Aristocratic)", Cost: 400, Unit: Unit.COPPER },
    MEALS_PER_DAY_SQUALID: { ItemType: ItemType.FOOD, Name: "Meals per day (Squalid)", Cost: 3, Unit: Unit.COPPER },
    MEALS_PER_DAY_POOR: { ItemType: ItemType.FOOD, Name: "Meals per day (Poor)", Cost: 6, Unit: Unit.COPPER },
    MEALS_PER_DAY_MODEST: { ItemType: ItemType.FOOD, Name: "Meals per day (Modest)", Cost: 30, Unit: Unit.COPPER },
    MEALS_PER_DAY_COMFORTABLE: { ItemType: ItemType.FOOD, Name: "Meals per day (Comfortable)", Cost: 50, Unit: Unit.COPPER },
    MEALS_PER_DAY_WEALTHY: { ItemType: ItemType.FOOD, Name: "Meals per day (Wealthy)", Cost: 80, Unit: Unit.COPPER },
    MEALS_PER_DAY_ARISTOCRATIC: { ItemType: ItemType.FOOD, Name: "Meals per day (Aristocratic)", Cost: 200, Unit: Unit.COPPER },
    MEAT_CHUNK: { ItemType: ItemType.FOOD, Name: "Meat, chunk", Cost: 30, Unit: Unit.COPPER },
    PITCHER_OF_COMMON_WINE: { ItemType: ItemType.FOOD, Name: "Pitcher of Common Wine", Cost: 20, Unit: Unit.COPPER },
    FINE_BOTTLE_OF_WINE: { ItemType: ItemType.FOOD, Name: "Fine Bottle of Wine", Cost: 1000, Unit: Unit.COPPER },
    COACH_CAB_BETEEN_TOWNS_PER_MILE: { ItemType: ItemType.SERVICE, Name: "Coach Cab Beteen Towns (per mile)", Cost: 3, Unit: Unit.COPPER },
    COACH_CAB_WITHIN_CITY: { ItemType: ItemType.SERVICE, Name: "Coach Cab within City", Cost: 1, Unit: Unit.COPPER },
    SKILLED_LABOR_PER_DAY: { ItemType: ItemType.SERVICE, Name: "Skilled Labor (per day)", Cost: 200, Unit: Unit.COPPER },
    UNTRAINED_LABOR_PER_DAY: { ItemType: ItemType.SERVICE, Name: "Untrained Labor (per day)", Cost: 20, Unit: Unit.COPPER },
    MESSENGER_PER_MILE: { ItemType: ItemType.SERVICE, Name: "Messenger (per mile)", Cost: 2, Unit: Unit.COPPER },
    ROAD_OR_GATE_TOLL: { ItemType: ItemType.SERVICE, Name: "Road or Gate Toll", Cost: 1, Unit: Unit.COPPER },
    SHIP_PASSSAGE_PER_MILE: { ItemType: ItemType.SERVICE, Name: "Ship Passsage (per mile)", Cost: 10, Unit: Unit.COPPER },
    LEVEL_1_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 1 Spell (before components)", Cost: 1000, Unit: Unit.COPPER },
    LEVEL_2_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 2 Spell (before components)", Cost: 4000, Unit: Unit.COPPER },
    LEVEL_3_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 3 Spell (before components)", Cost: 9000, Unit: Unit.COPPER },
    LEVEL_4_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 4 Spell (before components)", Cost: 16000, Unit: Unit.COPPER },
    LEVEL_5_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 5 Spell (before components)", Cost: 25000, Unit: Unit.COPPER },
    LEVEL_6_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 6 Spell (before components)", Cost: 36000, Unit: Unit.COPPER },
    LEVEL_7_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 7 Spell (before components)", Cost: 49000, Unit: Unit.COPPER },
    LEVEL_8_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 8 Spell (before components)", Cost: 64000, Unit: Unit.COPPER },
    LEVEL_9_SPELL_BEFORE_COMPONENTS: { ItemType: ItemType.SERVICE, Name: "Level 9 Spell (before components)", Cost: 81000, Unit: Unit.COPPER },
    BREASTPLATE_BARDING: { ItemType: ItemType.ARMOR, Name: "Breastplate Barding", Cost: 160000, Unit: Unit.COPPER },
    CHAIN_MAIL_BARDING: { ItemType: ItemType.ARMOR, Name: "Chain Mail Barding", Cost: 30000, Unit: Unit.COPPER },
    CHAIN_SHIRT_BARDING: { ItemType: ItemType.ARMOR, Name: "Chain Shirt Barding", Cost: 20000, Unit: Unit.COPPER },
    HALF_PLATE_BARDING: { ItemType: ItemType.ARMOR, Name: "Half Plate Barding", Cost: 300000, Unit: Unit.COPPER },
    HIDE_BARDING: { ItemType: ItemType.ARMOR, Name: "Hide Barding", Cost: 4000, Unit: Unit.COPPER },
    LEATHER_BARDING: { ItemType: ItemType.ARMOR, Name: "Leather Barding", Cost: 4000, Unit: Unit.COPPER },
    PADDED_BARDING: { ItemType: ItemType.ARMOR, Name: "Padded Barding", Cost: 2000, Unit: Unit.COPPER },
    PLATE_BARDING: { ItemType: ItemType.ARMOR, Name: "Plate Barding", Cost: 600000, Unit: Unit.COPPER },
    RING_MAIL_BARDING: { ItemType: ItemType.ARMOR, Name: "Ring Mail Barding", Cost: 12000, Unit: Unit.COPPER },
    SCALE_MAIL_BARDING: { ItemType: ItemType.ARMOR, Name: "Scale Mail Barding", Cost: 20000, Unit: Unit.COPPER },
    SPIKED_ARMOR_BARDING: { ItemType: ItemType.ARMOR, Name: "Spiked Armor Barding", Cost: 30000, Unit: Unit.COPPER },
    SPLINT_BARDING: { ItemType: ItemType.ARMOR, Name: "Splint Barding", Cost: 80000, Unit: Unit.COPPER },
    STUDDED_LEATHER_BARDING: { ItemType: ItemType.ARMOR, Name: "Studded Leather Barding", Cost: 18000, Unit: Unit.COPPER },
}