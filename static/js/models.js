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

    toLabel() {
        var traits = [];

        if (this.Openess <= 10)
            traits.push("Very cautious");
        else if (this.Openess <= 30)
            traits.push("Cautious");
        else if (this.Openess >= 90)
            traits.push("Very adventurous");
        else if (this.Openess >= 60)
            traits.push("Adventurous");

        if (this.Conscientiousness <= 10)
            traits.push("Unreliable");
        else if (this.Conscientiousness <= 30)
            traits.push("Slightly unreliable");
        else if (this.Conscientiousness >= 90)
            traits.push("Extremely reliable");
        else if (this.Conscientiousness >= 60)
            traits.push("Reliable");

        if (this.Extraversion <= 10)
            traits.push("Very introverted");
        else if (this.Extraversion <= 30)
            traits.push("Introverted");
        else if (this.Extraversion >= 90)
            traits.push("Extremely extraverted");
        else if (this.Extraversion >= 70)
            traits.push("Extraverted");

        if (this.Agreeableness <= 5)
            traits.push("Mean");
        else if (this.Agreeableness <= 15)
            traits.push("Grumpy");
        else if (this.Agreeableness >= 90)
            traits.push("Extremely kind");
        else if (this.Agreeableness >= 60)
            traits.push("Courteous");

        if (this.Neuroticisms <= 10)
            traits.push("Extremely confident");
        else if (this.Neuroticisms <= 40)
            traits.push("Confident");
        else if (this.Neuroticisms >= 95)
            traits.push("Extremely anxious");
        else if (this.Neuroticisms >= 80)
            traits.push("Slightly anxious");

        if (traits.Count == 0)
            traits.push("Moderate");

        return traits.join(', ');
    }
}

class Family {
    LastName
    Caste
    Id

    add(person) {
        if (!person)
            return;
        person.LastName = this.LastName;
        person.Caste = this.Caste;
        person.Family = this;
    }

    displayValue() {
        return `${this.LastName} [${this.Id}]`;
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

    constructor(itemType, name, cost, unit) {
        this.ItemType = itemType;
        this.Name = name;
        this.Cost = cost;
        this.Unit = unit;
    }

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
                return this.goldCost(this.Cost);
            case Unit.FAVOR:
                var favorStr = `${this.favors[this.Cost - 1]} favor`;
                if (this.DefaultCost > 0)
                    favorStr += ` (normally ${this.goldCost(this.DefaultCost)})`;
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

        return costStr.trim();
    }
}

const AllItems = {
    Alchemists_Supplies: new InventoryItem(ItemType.TOOL, "Alchemist's supplies", 5000, Unit.COPPER),
    Brewers_Supplies: new InventoryItem(ItemType.TOOL, "Brewer's supplies", 2000, Unit.COPPER),
    Calligraphers_Supplies: new InventoryItem(ItemType.TOOL, "Calligrapher's Supplies", 1000, Unit.COPPER),
    Carpenters_Tools: new InventoryItem(ItemType.TOOL, "Carpenter's tools", 800, Unit.COPPER),
    Cartographers_Tools: new InventoryItem(ItemType.TOOL, "Cartographer's tools", 1500, Unit.COPPER),
    Cobblers_Tools: new InventoryItem(ItemType.TOOL, "Cobbler's tools", 500, Unit.COPPER),
    Cooks_Utensils: new InventoryItem(ItemType.TOOL, "Cook's utensils", 100, Unit.COPPER),
    Glassblowers_Tools: new InventoryItem(ItemType.TOOL, "Glassblower's tools", 3000, Unit.COPPER),
    Jewelers_Tools: new InventoryItem(ItemType.TOOL, "Jeweler's tools", 2500, Unit.COPPER),
    Leatherworkers_Tools: new InventoryItem(ItemType.TOOL, "Leatherworker's tools", 500, Unit.COPPER),
    Masons_Tools: new InventoryItem(ItemType.TOOL, "Mason's tools", 1000, Unit.COPPER),
    Painters_Supplies: new InventoryItem(ItemType.TOOL, "Painter's supplies", 1000, Unit.COPPER),
    Potters_Tools: new InventoryItem(ItemType.TOOL, "Potter's tools", 1000, Unit.COPPER),
    Smiths_Tools: new InventoryItem(ItemType.TOOL, "Smith's tools", 2000, Unit.COPPER),
    Tinkers_Tools: new InventoryItem(ItemType.TOOL, "Tinker's tools", 5000, Unit.COPPER),
    Weavers_Tools: new InventoryItem(ItemType.TOOL, "Weaver's tools", 100, Unit.COPPER),
    Woodcarvers_Tools: new InventoryItem(ItemType.TOOL, "Woodcarver's tools", 100, Unit.COPPER),
    Dice_Set: new InventoryItem(ItemType.GAMINGSET, "Dice Set", 10, Unit.COPPER),
    Playing_Card_Set: new InventoryItem(ItemType.GAMINGSET, "Playing Card Set", 50, Unit.COPPER),
    Bagpipes: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Bagpipes", 3000, Unit.COPPER),
    Drum: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Drum", 600, Unit.COPPER),
    Dulcimer: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Dulcimer", 2500, Unit.COPPER),
    Flute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Flute", 200, Unit.COPPER),
    Lute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Lute", 3500, Unit.COPPER),
    Lyre: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Lyre", 3000, Unit.COPPER),
    Horn: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Horn", 300, Unit.COPPER),
    Pan_Flute: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Pan Flute", 1200, Unit.COPPER),
    Shawm: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Shawm", 200, Unit.COPPER),
    Viol: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Viol", 3000, Unit.COPPER),
    Navigators_Tools: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Navigator's tools", 2500, Unit.COPPER),
    Thieves_Tools: new InventoryItem(ItemType.MUSICALINSTRUMENT, "Thieves' tools", 2500, Unit.COPPER),
    Club: new InventoryItem(ItemType.WEAPON, "Club", 10, Unit.COPPER),
    Dagger: new InventoryItem(ItemType.WEAPON, "Dagger", 200, Unit.COPPER),
    Greatclub: new InventoryItem(ItemType.WEAPON, "Greatclub", 20, Unit.COPPER),
    Handaxe: new InventoryItem(ItemType.WEAPON, "Handaxe", 500, Unit.COPPER),
    Javelin: new InventoryItem(ItemType.WEAPON, "Javelin", 50, Unit.COPPER),
    Light_Hammer: new InventoryItem(ItemType.WEAPON, "Light Hammer", 200, Unit.COPPER),
    Mace: new InventoryItem(ItemType.WEAPON, "Mace", 500, Unit.COPPER),
    Quarterstaff: new InventoryItem(ItemType.WEAPON, "Quarterstaff", 20, Unit.COPPER),
    Sickle: new InventoryItem(ItemType.WEAPON, "Sickle", 100, Unit.COPPER),
    Spear: new InventoryItem(ItemType.WEAPON, "Spear", 100, Unit.COPPER),
    Crossbow_Light: new InventoryItem(ItemType.WEAPON, "Crossbow, light", 2500, Unit.COPPER),
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
    War_Pick: new InventoryItem(ItemType.WEAPON, "War Pick", 500, Unit.COPPER),
    Warhammer: new InventoryItem(ItemType.WEAPON, "Warhammer", 1500, Unit.COPPER),
    Whip: new InventoryItem(ItemType.WEAPON, "Whip", 200, Unit.COPPER),
    Blowgun: new InventoryItem(ItemType.WEAPON, "Blowgun", 1000, Unit.COPPER),
    Crossbow_Hand: new InventoryItem(ItemType.WEAPON, "Crossbow, hand", 7500, Unit.COPPER),
    Crossbow_Heavy: new InventoryItem(ItemType.WEAPON, "Crossbow, heavy", 5000, Unit.COPPER),
    Longbow: new InventoryItem(ItemType.WEAPON, "Longbow", 5000, Unit.COPPER),
    Net: new InventoryItem(ItemType.WEAPON, "Net", 100, Unit.COPPER),
    Donkey_Or_Mule: new InventoryItem(ItemType.ANIMAL, "Donkey or mule", 800, Unit.COPPER),
    Elephant: new InventoryItem(ItemType.ANIMAL, "Elephant", 20000, Unit.COPPER),
    Horse_Draft_Or_Camel: new InventoryItem(ItemType.ANIMAL, "Horse, draft (or Camel)", 5000, Unit.COPPER),
    Horse_Riding: new InventoryItem(ItemType.ANIMAL, "Horse, riding", 7500, Unit.COPPER),
    Mastiff: new InventoryItem(ItemType.ANIMAL, "Mastiff", 2500, Unit.COPPER),
    Pony: new InventoryItem(ItemType.ANIMAL, "Pony", 3000, Unit.COPPER),
    Warhorse: new InventoryItem(ItemType.ANIMAL, "Warhorse", 40000, Unit.COPPER),
    Bit_And_Bridle: new InventoryItem(ItemType.TACK, "Bit and bridle", 200, Unit.COPPER),
    Carriage: new InventoryItem(ItemType.VEHICLE, "Carriage", 10000, Unit.COPPER),
    Cart: new InventoryItem(ItemType.VEHICLE, "Cart", 1500, Unit.COPPER),
    Chariot: new InventoryItem(ItemType.VEHICLE, "Chariot", 25000, Unit.COPPER),
    Animal_Feed_Per_Day: new InventoryItem(ItemType.TACK, "Animal Feed (per day)", 5, Unit.COPPER),
    Saddle_Exotic: new InventoryItem(ItemType.TACK, "Saddle, Exotic", 6000, Unit.COPPER),
    SaddleMilitary: new InventoryItem(ItemType.TACK, "Saddle, Military", 2000, Unit.COPPER),
    Saddle_Pack: new InventoryItem(ItemType.TACK, "Saddle, Pack", 500, Unit.COPPER),
    Saddle_Riding: new InventoryItem(ItemType.TACK, "Saddle, Riding", 1000, Unit.COPPER),
    Saddlebags: new InventoryItem(ItemType.TACK, "Saddlebags", 400, Unit.COPPER),
    Sled: new InventoryItem(ItemType.VEHICLE, "Sled", 2000, Unit.COPPER),
    Stabling_Per_Day: new InventoryItem(ItemType.SERVICE, "Stabling (per day)", 50, Unit.COPPER),
    Wagon: new InventoryItem(ItemType.VEHICLE, "Wagon", 3500, Unit.COPPER),
    Galley: new InventoryItem(ItemType.VEHICLE, "Galley", 3000000, Unit.COPPER),
    Keelboat: new InventoryItem(ItemType.VEHICLE, "Keelboat", 300000, Unit.COPPER),
    Longship: new InventoryItem(ItemType.VEHICLE, "Longship", 1000000, Unit.COPPER),
    Rowboat: new InventoryItem(ItemType.VEHICLE, "Rowboat", 5000, Unit.COPPER),
    Sailing_Ship: new InventoryItem(ItemType.VEHICLE, "Sailing Ship", 1000000, Unit.COPPER),
    Warship: new InventoryItem(ItemType.VEHICLE, "Warship", 2500000, Unit.COPPER),
    Abacus: new InventoryItem(ItemType.MISC, "Abacus", 200, Unit.COPPER),
    AcidVial: new InventoryItem(ItemType.MISC, "Acid (vial)", 2500, Unit.COPPER),
    Alchemists_Fire_Flask: new InventoryItem(ItemType.MISC, "Alchemist's fire (flask)", 5000, Unit.COPPER),
    Arrows20: new InventoryItem(ItemType.AMMUNITION, "Arrows (20)", 100, Unit.COPPER),
    Blowgun_Needles50: new InventoryItem(ItemType.AMMUNITION, "Blowgun Needles (50)", 100, Unit.COPPER),
    Crossbow_Bolts20: new InventoryItem(ItemType.AMMUNITION, "Crossbow bolts (20)", 100, Unit.COPPER),
    Sling_Bullets20: new InventoryItem(ItemType.AMMUNITION, "Sling bullets (20)", 4, Unit.COPPER),
    Antitoxin: new InventoryItem(ItemType.POTION, "Antitoxin", 5000, Unit.COPPER),
    Crystal: new InventoryItem(ItemType.MISC, "Crystal", 1000, Unit.COPPER),
    Orb: new InventoryItem(ItemType.MISC, "Orb", 2000, Unit.COPPER),
    Rod: new InventoryItem(ItemType.MISC, "Rod", 1000, Unit.COPPER),
    Staff: new InventoryItem(ItemType.MISC, "Staff", 500, Unit.COPPER),
    Wand: new InventoryItem(ItemType.MISC, "Wand", 1000, Unit.COPPER),
    Backpack: new InventoryItem(ItemType.MISC, "Backpack", 200, Unit.COPPER),
    Ball_BearingsBag_Of_1000: new InventoryItem(ItemType.AMMUNITION, "Ball bearings (bag of 1,000)", 100, Unit.COPPER),
    Barrel: new InventoryItem(ItemType.MISC, "Barrel", 200, Unit.COPPER),
    Basket: new InventoryItem(ItemType.MISC, "Basket", 40, Unit.COPPER),
    Bedroll: new InventoryItem(ItemType.MISC, "Bedroll", 100, Unit.COPPER),
    Bell: new InventoryItem(ItemType.MISC, "Bell", 100, Unit.COPPER),
    Blanket: new InventoryItem(ItemType.MISC, "Blanket", 50, Unit.COPPER),
    Block_And_Tackle: new InventoryItem(ItemType.MISC, "Block and tackle", 100, Unit.COPPER),
    Book: new InventoryItem(ItemType.MISC, "Book", 2500, Unit.COPPER),
    Glass_Bottle: new InventoryItem(ItemType.MISC, "Glass bottle", 200, Unit.COPPER),
    Bucket: new InventoryItem(ItemType.MISC, "Bucket", 5, Unit.COPPER),
    CaltropsBag_Of_20: new InventoryItem(ItemType.AMMUNITION, "Caltrops (bag of 20)", 100, Unit.COPPER),
    Candle: new InventoryItem(ItemType.MISC, "Candle", 1, Unit.COPPER),
    Case_Crossbow_Bolt: new InventoryItem(ItemType.AMMUNITION, "Case, crossbow bolt", 100, Unit.COPPER),
    Case_Map_Or_Scroll: new InventoryItem(ItemType.MISC, "Case, map or scroll", 100, Unit.COPPER),
    Chain10_Feet: new InventoryItem(ItemType.MISC, "Chain (10 feet)", 500, Unit.COPPER),
    Chalk1_Piece: new InventoryItem(ItemType.MISC, "Chalk (1 piece)", 1, Unit.COPPER),
    Chest: new InventoryItem(ItemType.MISC, "Chest", 500, Unit.COPPER),
    ClothesCommon: new InventoryItem(ItemType.CLOTHES, "Clothes, Common", 50, Unit.COPPER),
    Clothes_Costume: new InventoryItem(ItemType.CLOTHES, "Clothes, costume", 500, Unit.COPPER),
    Clothes_Fine: new InventoryItem(ItemType.CLOTHES, "Clothes, fine", 1500, Unit.COPPER),
    Clothes_Travelers: new InventoryItem(ItemType.CLOTHES, "Clothes, traveler's", 200, Unit.COPPER),
    Component_Pouch: new InventoryItem(ItemType.MISC, "Component pouch", 2500, Unit.COPPER),
    Crowbar: new InventoryItem(ItemType.MISC, "Crowbar", 200, Unit.COPPER),
    Sprig_Of_Mistletoe: new InventoryItem(ItemType.MISC, "Sprig of mistletoe", 100, Unit.COPPER),
    Totem: new InventoryItem(ItemType.MISC, "Totem", 100, Unit.COPPER),
    Wooden_Staff: new InventoryItem(ItemType.MISC, "Wooden staff", 500, Unit.COPPER),
    Yew_Wand: new InventoryItem(ItemType.MISC, "Yew wand", 1000, Unit.COPPER),
    Fishing_Tackle: new InventoryItem(ItemType.MISC, "Fishing tackle", 100, Unit.COPPER),
    FlaskOrTankard: new InventoryItem(ItemType.MISC, "Flask or Tankard", 2, Unit.COPPER),
    Grappling_Hook: new InventoryItem(ItemType.MISC, "Grappling hook", 200, Unit.COPPER),
    Hammer: new InventoryItem(ItemType.MISC, "Hammer", 100, Unit.COPPER),
    Hammer_Sledge: new InventoryItem(ItemType.MISC, "Hammer, sledge", 200, Unit.COPPER),
    Amulet: new InventoryItem(ItemType.MISC, "Amulet", 500, Unit.COPPER),
    Emblem: new InventoryItem(ItemType.MISC, "Emblem", 500, Unit.COPPER),
    Reliquary: new InventoryItem(ItemType.MISC, "Reliquary", 500, Unit.COPPER),
    Holy_WaterFlask: new InventoryItem(ItemType.MISC, "Holy Water (flask)", 2500, Unit.COPPER),
    Hourglass: new InventoryItem(ItemType.MISC, "Hourglass", 2500, Unit.COPPER),
    Hunting_Trap: new InventoryItem(ItemType.MISC, "Hunting trap", 500, Unit.COPPER),
    Ink1_Ounce_Bottle: new InventoryItem(ItemType.MISC, "Ink (1 ounce bottle)", 1000, Unit.COPPER),
    Ink_Pen: new InventoryItem(ItemType.MISC, "Ink pen", 2, Unit.COPPER),
    JugOrPitcher: new InventoryItem(ItemType.MISC, "Jug or Pitcher", 2, Unit.COPPER),
    Kit_Climbers: new InventoryItem(ItemType.TOOL, "Kit, climber's", 2500, Unit.COPPER),
    Kit_Disguise: new InventoryItem(ItemType.TOOL, "Kit, disguise", 2500, Unit.COPPER),
    Kit_Forgery: new InventoryItem(ItemType.TOOL, "Kit, forgery", 1500, Unit.COPPER),
    Kit_Herbalism: new InventoryItem(ItemType.TOOL, "Kit, herbalism", 500, Unit.COPPER),
    Kit_Healers: new InventoryItem(ItemType.TOOL, "Kit, healer's", 500, Unit.COPPER),
    Kit_Mess: new InventoryItem(ItemType.TOOL, "Kit, mess", 20, Unit.COPPER),
    Kit_Poisoners: new InventoryItem(ItemType.TOOL, "Kit, poisoner's", 5000, Unit.COPPER),
    Ladder10_Foot: new InventoryItem(ItemType.MISC, "Ladder (10-foot)", 10, Unit.COPPER),
    Lamp: new InventoryItem(ItemType.MISC, "Lamp", 50, Unit.COPPER),
    Lantern_Bullseye: new InventoryItem(ItemType.MISC, "Lantern, bullseye", 1000, Unit.COPPER),
    Lantern_Hooded: new InventoryItem(ItemType.MISC, "Lantern, hooded", 500, Unit.COPPER),
    Lock: new InventoryItem(ItemType.MISC, "Lock", 1000, Unit.COPPER),
    Magnifying_Glass: new InventoryItem(ItemType.MISC, "Magnifying glass", 10000, Unit.COPPER),
    Manacles: new InventoryItem(ItemType.MISC, "Manacles", 200, Unit.COPPER),
    Mirror_Steel: new InventoryItem(ItemType.MISC, "Mirror, steel", 500, Unit.COPPER),
    OilFlask: new InventoryItem(ItemType.MISC, "Oil (flask)", 10, Unit.COPPER),
    PaperOne_Sheet: new InventoryItem(ItemType.MISC, "Paper (one sheet)", 20, Unit.COPPER),
    ParchmentOne_Sheet: new InventoryItem(ItemType.MISC, "Parchment (one sheet)", 10, Unit.COPPER),
    PerfumeVial: new InventoryItem(ItemType.MISC, "Perfume (vial)", 500, Unit.COPPER),
    Pick_Miners: new InventoryItem(ItemType.MISC, "Pick, miner's", 200, Unit.COPPER),
    Piton: new InventoryItem(ItemType.MISC, "Piton", 5, Unit.COPPER),
    Poison_Basic_Vial: new InventoryItem(ItemType.MISC, "Poison, basic (vial)", 10000, Unit.COPPER),
    Pole10_Foot: new InventoryItem(ItemType.MISC, "Pole (10-foot)", 5, Unit.COPPER),
    Pot_Iron: new InventoryItem(ItemType.MISC, "Pot, iron", 200, Unit.COPPER),
    Potion_Of_Healing: new InventoryItem(ItemType.Potion, "Potion of Healing", 5000, Unit.COPPER),
    Pouch: new InventoryItem(ItemType.MISC, "Pouch", 50, Unit.COPPER),
    Quiver: new InventoryItem(ItemType.AMMUNITION, "Quiver", 100, Unit.COPPER),
    Ram_Portable: new InventoryItem(ItemType.MISC, "Ram, portable", 400, Unit.COPPER),
    Rations1_Day: new InventoryItem(ItemType.FOOD, "Rations (1 day)", 50, Unit.COPPER),
    Robes: new InventoryItem(ItemType.CLOTHES, "Robes", 100, Unit.COPPER),
    Rope_Hempen_50_Feet: new InventoryItem(ItemType.MISC, "Rope, hempen (50 feet)", 100, Unit.COPPER),
    Rope_Silk_50_Feet: new InventoryItem(ItemType.MISC, "Rope, silk (50 feet)", 1000, Unit.COPPER),
    Sack: new InventoryItem(ItemType.MISC, "Sack", 1, Unit.COPPER),
    Scale_Merchants: new InventoryItem(ItemType.MISC, "Scale, merchant's", 500, Unit.COPPER),
    Sealing_Wax: new InventoryItem(ItemType.MISC, "Sealing wax", 50, Unit.COPPER),
    Shovel: new InventoryItem(ItemType.MISC, "Shovel", 200, Unit.COPPER),
    Signal_Whistle: new InventoryItem(ItemType.MISC, "Signal whistle", 5, Unit.COPPER),
    Signet_Ring: new InventoryItem(ItemType.MISC, "Signet ring", 500, Unit.COPPER),
    Soap: new InventoryItem(ItemType.MISC, "Soap", 2, Unit.COPPER),
    Spellbook: new InventoryItem(ItemType.MISC, "Spellbook", 5000, Unit.COPPER),
    Spikes_Iron_10: new InventoryItem(ItemType.MISC, "Spikes, iron (10)", 100, Unit.COPPER),
    Spyglass: new InventoryItem(ItemType.MISC, "Spyglass", 100000, Unit.COPPER),
    Tent_Two_Person: new InventoryItem(ItemType.MISC, "Tent, two-person", 200, Unit.COPPER),
    Tinderbox: new InventoryItem(ItemType.MISC, "Tinderbox", 50, Unit.COPPER),
    Torch: new InventoryItem(ItemType.MISC, "Torch", 1, Unit.COPPER),
    Vial: new InventoryItem(ItemType.MISC, "Vial", 100, Unit.COPPER),
    Waterskin: new InventoryItem(ItemType.MISC, "Waterskin", 20, Unit.COPPER),
    Whetstone: new InventoryItem(ItemType.MISC, "Whetstone", 1, Unit.COPPER),
    Breastplate: new InventoryItem(ItemType.ARMOR, "Breastplate", 40000, Unit.COPPER),
    Chain_Mail: new InventoryItem(ItemType.ARMOR, "Chain Mail", 7500, Unit.COPPER),
    Chain_Shirt: new InventoryItem(ItemType.ARMOR, "Chain Shirt", 5000, Unit.COPPER),
    Half_Plate: new InventoryItem(ItemType.ARMOR, "Half Plate", 75000, Unit.COPPER),
    Hide: new InventoryItem(ItemType.ARMOR, "Hide", 1000, Unit.COPPER),
    Leather: new InventoryItem(ItemType.ARMOR, "Leather", 1000, Unit.COPPER),
    Padded: new InventoryItem(ItemType.ARMOR, "Padded", 500, Unit.COPPER),
    Plate: new InventoryItem(ItemType.ARMOR, "Plate", 150000, Unit.COPPER),
    Ring_Mail: new InventoryItem(ItemType.ARMOR, "Ring Mail", 3000, Unit.COPPER),
    Scale_Mail: new InventoryItem(ItemType.ARMOR, "Scale Mail", 5000, Unit.COPPER),
    Spiked_Armor: new InventoryItem(ItemType.ARMOR, "Spiked Armor", 7500, Unit.COPPER),
    Splint: new InventoryItem(ItemType.ARMOR, "Splint", 20000, Unit.COPPER),
    Studded_Leather: new InventoryItem(ItemType.ARMOR, "Studded Leather", 4500, Unit.COPPER),
    Shield: new InventoryItem(ItemType.ARMOR, "Shield", 1000, Unit.COPPER),
    Cookies: new InventoryItem(ItemType.FOOD, "Cookie (1 dozen)", 30, Unit.COPPER),
    Hardtack: new InventoryItem(ItemType.FOOD, "Hardtack (1 day ration)", 50, Unit.COPPER),
    Bread_Loaf: new InventoryItem(ItemType.FOOD, "Bread, loaf", 2, Unit.COPPER),
    Fruit_Tart: new InventoryItem(ItemType.FOOD, "Fruit tart", 10, Unit.COPPER),
    Pie: new InventoryItem(ItemType.FOOD, "Pie", 60, Unit.COPPER),
    Cake: new InventoryItem(ItemType.FOOD, "Cake (bespoke)", 600, Unit.COPPER),
    Muffins: new InventoryItem(ItemType.FOOD, "Muffins (half dozen)", 80, Unit.COPPER),
    Meat_Pie: new InventoryItem(ItemType.FOOD, "Meat pie", 50, Unit.COPPER),
    Pot_Roast: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef roast", 60, Unit.COPPER),
    Chops: new InventoryItem(ItemType.FOOD, "Venison/lamb/pork chops (6)", 80, Unit.COPPER),
    Steak: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef steak", 60, Unit.COPPER),
    Loin: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef/pork loin", 80, Unit.COPPER),
    Ribs: new InventoryItem(ItemType.FOOD, "Venison/lamb/beef/pork ribs", 60, Unit.COPPER),
    Sausages: new InventoryItem(ItemType.FOOD, "Venison/lamb/pork sausages (6)", 60, Unit.COPPER),
    Bacon: new InventoryItem(ItemType.FOOD, "Bacon", 60, Unit.COPPER),
    Gallon_Of_Ale: new InventoryItem(ItemType.FOOD, "Gallon of Ale", 20, Unit.COPPER),
    Mug_Of_Ale: new InventoryItem(ItemType.FOOD, "Mug of Ale", 4, Unit.COPPER),
    Banquet_Per_Person: new InventoryItem(ItemType.FOOD, "Banquet (per person)", 1000, Unit.COPPER),
    Cheese_Hunk: new InventoryItem(ItemType.FOOD, "Cheese, hunk", 10, Unit.COPPER),
    Inn_Stay_Per_Day_Squalid: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Squalid)", 7, Unit.COPPER),
    Inn_Stay_Per_Day_Poor: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Poor)", 10, Unit.COPPER),
    Inn_Stay_Per_Day_Modest: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Modest)", 50, Unit.COPPER),
    Inn_Stay_Per_Day_Comfortable: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Comfortable)", 80, Unit.COPPER),
    Inn_Stay_Per_Day_Wealthy: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Wealthy)", 200, Unit.COPPER),
    Inn_Stay_Per_Day_Aristocratic: new InventoryItem(ItemType.SERVICE, "Inn Stay per day (Aristocratic)", 400, Unit.COPPER),
    Meals_Per_Day_Squalid: new InventoryItem(ItemType.FOOD, "Meals per day (Squalid)", 3, Unit.COPPER),
    Meals_Per_Day_Poor: new InventoryItem(ItemType.FOOD, "Meals per day (Poor)", 6, Unit.COPPER),
    Meals_Per_Day_Modest: new InventoryItem(ItemType.FOOD, "Meals per day (Modest)", 30, Unit.COPPER),
    Meals_Per_Day_Comfortable: new InventoryItem(ItemType.FOOD, "Meals per day (Comfortable)", 50, Unit.COPPER),
    Meals_Per_Day_Wealthy: new InventoryItem(ItemType.FOOD, "Meals per day (Wealthy)", 80, Unit.COPPER),
    Meals_Per_Day_Aristocratic: new InventoryItem(ItemType.FOOD, "Meals per day (Aristocratic)", 200, Unit.COPPER),
    Meat_Chunk: new InventoryItem(ItemType.FOOD, "Meat, chunk", 30, Unit.COPPER),
    Pitcher_Of_Common_Wine: new InventoryItem(ItemType.FOOD, "Pitcher of Common Wine", 20, Unit.COPPER),
    Fine_Bottle_Of_Wine: new InventoryItem(ItemType.FOOD, "Fine Bottle of Wine", 1000, Unit.COPPER),
    Coach_Cab_Beteen_Towns_Per_Mile: new InventoryItem(ItemType.SERVICE, "Coach Cab Beteen Towns (per mile)", 3, Unit.COPPER),
    Coach_Cab_Within_City: new InventoryItem(ItemType.SERVICE, "Coach Cab within City", 1, Unit.COPPER),
    Skilled_Labor_Per_Day: new InventoryItem(ItemType.SERVICE, "Skilled Labor (per day)", 200, Unit.COPPER),
    Untrained_Labor_Per_Day: new InventoryItem(ItemType.SERVICE, "Untrained Labor (per day)", 20, Unit.COPPER),
    Messenger_Per_Mile: new InventoryItem(ItemType.SERVICE, "Messenger (per mile)", 2, Unit.COPPER),
    Road_Or_Gate_Toll: new InventoryItem(ItemType.SERVICE, "Road or Gate Toll", 1, Unit.COPPER),
    Ship_Passsage_Per_Mile: new InventoryItem(ItemType.SERVICE, "Ship Passsage (per mile)", 10, Unit.COPPER),
    Level_1_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 1 Spell (before components)", 1000, Unit.COPPER),
    Level_2_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 2 Spell (before components)", 4000, Unit.COPPER),
    Level_3_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 3 Spell (before components)", 9000, Unit.COPPER),
    Level_4_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 4 Spell (before components)", 16000, Unit.COPPER),
    Level_5_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 5 Spell (before components)", 25000, Unit.COPPER),
    Level_6_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 6 Spell (before components)", 36000, Unit.COPPER),
    Level_7_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 7 Spell (before components)", 49000, Unit.COPPER),
    Level_8_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 8 Spell (before components)", 64000, Unit.COPPER),
    Level_9_Spell_Before_Components: new InventoryItem(ItemType.SERVICE, "Level 9 Spell (before components)", 81000, Unit.COPPER),
    Breastplate_Barding: new InventoryItem(ItemType.ARMOR, "Breastplate Barding", 160000, Unit.COPPER),
    Chain_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Chain Mail Barding", 30000, Unit.COPPER),
    Chain_Shirt_Barding: new InventoryItem(ItemType.ARMOR, "Chain Shirt Barding", 20000, Unit.COPPER),
    Half_Plate_Barding: new InventoryItem(ItemType.ARMOR, "Half Plate Barding", 300000, Unit.COPPER),
    Hide_Barding: new InventoryItem(ItemType.ARMOR, "Hide Barding", 4000, Unit.COPPER),
    Leather_Barding: new InventoryItem(ItemType.ARMOR, "Leather Barding", 4000, Unit.COPPER),
    Padded_Barding: new InventoryItem(ItemType.ARMOR, "Padded Barding", 2000, Unit.COPPER),
    Plate_Barding: new InventoryItem(ItemType.ARMOR, "Plate Barding", 600000, Unit.COPPER),
    Ring_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Ring Mail Barding", 12000, Unit.COPPER),
    Scale_Mail_Barding: new InventoryItem(ItemType.ARMOR, "Scale Mail Barding", 20000, Unit.COPPER),
    Spiked_Armor_Barding: new InventoryItem(ItemType.ARMOR, "Spiked Armor Barding", 30000, Unit.COPPER),
    Splint_Barding: new InventoryItem(ItemType.ARMOR, "Splint Barding", 80000, Unit.COPPER),
    Studded_Leather_Barding: new InventoryItem(ItemType.ARMOR, "Studded Leather Barding", 18000, Unit.COPPER),
}

function getInventory(businessType) {
    switch (businessType) {
        case BusinessType.ALCHEMIST_SHOP:
            return [
                { item: AllItems.AcidVial, probability: 1.0 },
                { item: AllItems.Alchemists_Fire_Flask, probability: 0.67 },
                { item: AllItems.Abacus, probability: 1 },
                { item: AllItems.Alchemists_Supplies, probability: 1.0 },
                { item: AllItems.Antitoxin, probability: 0.33 },
                { item: AllItems.Book, probability: 1 },
                { item: AllItems.Brewers_Supplies, probability: .33 },
                { item: AllItems.FlaskOrTankard, probability: 1 },
                { item: AllItems.Glassblowers_Tools, probability: .33 },
                { item: AllItems.Glass_Bottle, probability: 1 },
                { item: AllItems.Holy_WaterFlask, probability: .33 },
                { item: AllItems.Hourglass, probability: 1 },
                { item: AllItems.Ink1_Ounce_Bottle, probability: 1 },
                { item: AllItems.Ink_Pen, probability: 1 },
                { item: AllItems.JugOrPitcher, probability: 1 },
                { item: AllItems.Kit_Healers, probability: 0.33 },
                { item: AllItems.Kit_Herbalism, probability: 0.33 },
                { item: AllItems.Kit_Poisoners, probability: 0.1 },
                { item: AllItems.Magnifying_Glass, probability: 0.67 },
                { item: AllItems.OilFlask, probability: 1 },
                { item: AllItems.PaperOne_Sheet, probability: 1 },
                { item: AllItems.ParchmentOne_Sheet, probability: 1 },
                { item: AllItems.PerfumeVial, probability: 0.33 },
                { item: AllItems.Poison_Basic_Vial, probability: 0.10 },
                { item: AllItems.Potion_Of_Healing, probability: 1 },
                { item: AllItems.Pot_Iron, probability: 1 },
                { item: AllItems.Pouch, probability: 1 },
                { item: AllItems.Sack, probability: 0.67 },
                { item: AllItems.Sealing_Wax, probability: 0.67 },
                { item: AllItems.Soap, probability: 1 },
                { item: AllItems.Tinderbox, probability: 1 },
                { item: AllItems.Vial, probability: 1 },
                { item: new InventoryItem(ItemType.Misc, "Vial of Mercury", 5000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.Misc, "Phosphorus", 5000, Unit.COPPER), probability: 0.67 },

            ];
        case BusinessType.ARMOR_SHOP:
            return [
                //Armor
                { item: AllItems.Breastplate, probability: 0.8 },
                { item: AllItems.Chain_Mail, probability: 1.0 },
                { item: AllItems.Chain_Shirt, probability: 1.0 },
                { item: AllItems.Half_Plate, probability: 0.8 },
                { item: AllItems.Plate, probability: .67 },
                { item: AllItems.Ring_Mail, probability: 1.0 },
                { item: AllItems.Scale_Mail, probability: 1.0 },
                { item: AllItems.Spiked_Armor, probability: 0.8 },
                { item: AllItems.Splint, probability: 0.8 },
                { item: AllItems.Shield, probability: 1.0 },
                { item: AllItems.Smiths_Tools, probability: 0.33 },
                //Barding
                { item: AllItems.Breastplate_Barding, probability: 0.33 },
                { item: AllItems.Chain_Mail_Barding, probability: 0.67 },
                { item: AllItems.Chain_Shirt_Barding, probability: 0.67 },
                { item: AllItems.Half_Plate_Barding, probability: 0.33 },
                { item: AllItems.Plate_Barding, probability: .33 },
                { item: AllItems.Ring_Mail_Barding, probability: 0.67 },
                { item: AllItems.Scale_Mail_Barding, probability: 0.67 },
                { item: AllItems.Spiked_Armor_Barding, probability: 0.33 },
                { item: AllItems.Splint_Barding, probability: 0.33 },
                //Misc
                { item: new InventoryItem(ItemType.Misc, "Small Mithral Orb", 50000, Unit.COPPER), probability: 0.1 },
                { item: new InventoryItem(ItemType.Misc, "Small Piece of Adamantine", 50000, Unit.COPPER), probability: 0.05 },
            ];
        case BusinessType.BAKERY:
            return [
                { item: AllItems.Cookies, probability: 1 },
                { item: AllItems.Hardtack, probability: 1 },
                { item: AllItems.Bread_Loaf, probability: 1 },
                { item: AllItems.Fruit_Tart, probability: .67 },
                { item: AllItems.Pie, probability: .67 },
                { item: AllItems.Cake, probability: .67 },
                { item: AllItems.Muffins, probability: .67 },
                { item: AllItems.Meat_Pie, probability: .33 }
            ];
        case BusinessType.SMITHY:
            return [
                // Misc
                { item: AllItems.Smiths_Tools, probability: 0.67 },
                { item: AllItems.Carpenters_Tools, probability: 0.33 },
                { item: AllItems.Masons_Tools, probability: 0.33 },
                { item: AllItems.Tinkers_Tools, probability: 0.33 },
                { item: AllItems.Woodcarvers_Tools, probability: 0.33 },
                { item: AllItems.Thieves_Tools, probability: 0.05 },
                { item: AllItems.CaltropsBag_Of_20, probability: 0.33 },
                { item: AllItems.Chain10_Feet, probability: 1 },
                { item: AllItems.Crowbar, probability: 1 },
                { item: AllItems.Grappling_Hook, probability: .67 },
                { item: AllItems.Hammer, probability: 1 },
                { item: AllItems.Hammer_Sledge, probability: 0.67 },
                { item: AllItems.Hunting_Trap, probability: 0.33 },
                { item: AllItems.Manacles, probability: 0.33 },
                { item: AllItems.Pick_Miners, probability: 1 },
                { item: AllItems.Piton, probability: 1 },
                { item: AllItems.Shovel, probability: 1 },
                { item: AllItems.Spikes_Iron_10, probability: 1 },
                // Armor
                { item: AllItems.Breastplate, probability: 0.4 },
                { item: AllItems.Chain_Mail, probability: 0.5 },
                { item: AllItems.Chain_Shirt, probability: 0.5 },
                { item: AllItems.Half_Plate, probability: 0.4 },
                { item: AllItems.Plate, probability: .33 },
                { item: AllItems.Ring_Mail, probability: 0.5 },
                { item: AllItems.Scale_Mail, probability: 0.5 },
                { item: AllItems.Spiked_Armor, probability: 0.4 },
                { item: AllItems.Splint, probability: 0.4 },
                { item: AllItems.Shield, probability: 0.5 },
                // Barding
                { item: AllItems.Breastplate_Barding, probability: 0.2 },
                { item: AllItems.Chain_Mail_Barding, probability: 0.25 },
                { item: AllItems.Chain_Shirt_Barding, probability: 0.25 },
                { item: AllItems.Half_Plate_Barding, probability: 0.2 },
                { item: AllItems.Plate_Barding, probability: .1 },
                { item: AllItems.Ring_Mail_Barding, probability: 0.25 },
                { item: AllItems.Scale_Mail_Barding, probability: 0.25 },
                { item: AllItems.Spiked_Armor_Barding, probability: 0.2 },
                { item: AllItems.Splint_Barding, probability: 0.2 },
                // Weapons                        
                { item: AllItems.Club, probability: 0.5 },
                { item: AllItems.Dagger, probability: 0.5 },
                { item: AllItems.Greatclub, probability: 0.5 },
                { item: AllItems.Handaxe, probability: 0.5 },
                { item: AllItems.Javelin, probability: 0.5 },
                { item: AllItems.Light_Hammer, probability: 0.5 },
                { item: AllItems.Mace, probability: 0.5 },
                { item: AllItems.Quarterstaff, probability: 0.5 },
                { item: AllItems.Sickle, probability: 0.5 },
                { item: AllItems.Spear, probability: 0.5 },
                { item: AllItems.Dart, probability: 0.5 },
                { item: AllItems.Battleaxe, probability: 0.5 },
                { item: AllItems.Flail, probability: 0.5 },
                { item: AllItems.Glaive, probability: 0.33 },
                { item: AllItems.Greataxe, probability: 0.33 },
                { item: AllItems.Greatsword, probability: 0.33 },
                { item: AllItems.Halberd, probability: 0.33 },
                { item: AllItems.Lance, probability: 0.33 },
                { item: AllItems.Longsword, probability: 0.5 },
                { item: AllItems.Maul, probability: 0.33 },
                { item: AllItems.Morningstar, probability: 0.5 },
                { item: AllItems.Pike, probability: 0.33 },
                { item: AllItems.Rapier, probability: 0.5 },
                { item: AllItems.Scimitar, probability: 0.5 },
                { item: AllItems.Shortsword, probability: 0.5 },
                { item: AllItems.Trident, probability: 0.33 },
                { item: AllItems.War_Pick, probability: 0.5 },
                { item: AllItems.Warhammer, probability: 0.5 }
            ];
        case BusinessType.BOW_SHOP:
            return [
                { item: AllItems.Crossbow_Hand, probability: 1 },
                { item: AllItems.Crossbow_Heavy, probability: .67 },
                { item: AllItems.Crossbow_Light, probability: 1 },
                { item: AllItems.Longbow, probability: 1 },
                { item: AllItems.Shortbow, probability: 1 },
                { item: AllItems.Arrows20, probability: 1 },
                { item: AllItems.Crossbow_Bolts20, probability: 1 },
                { item: AllItems.Case_Crossbow_Bolt, probability: 1 },
                { item: AllItems.Quiver, probability: 1 }
            ];
        case BusinessType.BUTCHER_SHOP:
            return [
                { item: AllItems.Pot_Roast, probability: 1 },
                { item: AllItems.Chops, probability: 1 },
                { item: AllItems.Steak, probability: 1 },
                { item: AllItems.Loin, probability: 1 },
                { item: AllItems.Ribs, probability: 1 },
                { item: AllItems.Sausages, probability: 1 },
                { item: AllItems.Bacon, probability: 1 }
            ];
        case BusinessType.GENERAL_STORE:
            return [
                { item: AllItems.Alchemists_Supplies, probability: 0.10 },
                { item: AllItems.Brewers_Supplies, probability: 0.67 },
                { item: AllItems.Calligraphers_Supplies, probability: 0.33 },
                { item: AllItems.Carpenters_Tools, probability: 0.67 },
                { item: AllItems.Cartographers_Tools, probability: 0.33 },
                { item: AllItems.Cobblers_Tools, probability: 0.33 },
                { item: AllItems.Cooks_Utensils, probability: 1 },
                { item: AllItems.Glassblowers_Tools, probability: 0.33 },
                { item: AllItems.Jewelers_Tools, probability: 0.33 },
                { item: AllItems.Leatherworkers_Tools, probability: 1 },
                { item: AllItems.Masons_Tools, probability: 1 },
                { item: AllItems.Painters_Supplies, probability: 0.33 },
                { item: AllItems.Potters_Tools, probability: 1 },
                { item: AllItems.Smiths_Tools, probability: 1 },
                { item: AllItems.Tinkers_Tools, probability: .33 },
                { item: AllItems.Weavers_Tools, probability: 0.67 },
                { item: AllItems.Woodcarvers_Tools, probability: 1 },
                { item: AllItems.Dice_Set, probability: 0.67 },
                { item: AllItems.Playing_Card_Set, probability: 0.67 },
                { item: AllItems.Bagpipes, probability: 0.33 },
                { item: AllItems.Drum, probability: 0.33 },
                { item: AllItems.Dulcimer, probability: 0.33 },
                { item: AllItems.Flute, probability: 0.33 },
                { item: AllItems.Lute, probability: 0.33 },
                { item: AllItems.Lyre, probability: 0.33 },
                { item: AllItems.Horn, probability: 0.33 },
                { item: AllItems.Pan_Flute, probability: 0.33 },
                { item: AllItems.Shawm, probability: 0.33 },
                { item: AllItems.Viol, probability: 0.33 },
                { item: AllItems.Navigators_Tools, probability: 0.33 },
                { item: AllItems.Thieves_Tools, probability: 0.1 },
                { item: AllItems.Club, probability: 0.33 },
                { item: AllItems.Dagger, probability: 0.33 },
                { item: AllItems.Greatclub, probability: 0.33 },
                { item: AllItems.Handaxe, probability: 0.33 },
                { item: AllItems.Javelin, probability: 0.33 },
                { item: AllItems.Light_Hammer, probability: 0.33 },
                { item: AllItems.Mace, probability: 0.33 },
                { item: AllItems.Quarterstaff, probability: 0.33 },
                { item: AllItems.Sickle, probability: 0.33 },
                { item: AllItems.Spear, probability: 0.33 },
                { item: AllItems.Crossbow_Light, probability: 0.33 },
                { item: AllItems.Dart, probability: 0.33 },
                { item: AllItems.Shortbow, probability: 0.33 },
                { item: AllItems.Sling, probability: 0.67 },
                { item: AllItems.Whip, probability: 0.33 },
                { item: AllItems.Net, probability: 0.67 },
                { item: AllItems.Blowgun, probability: 0.33 },
                { item: AllItems.Donkey_Or_Mule, probability: 0.33 },
                { item: AllItems.Bit_And_Bridle, probability: 1 },
                { item: AllItems.Cart, probability: 1 },
                { item: AllItems.Animal_Feed_Per_Day, probability: 1 },
                { item: AllItems.Saddle_Pack, probability: 1 },
                { item: AllItems.Saddle_Riding, probability: 1 },
                { item: AllItems.Saddlebags, probability: 1 },
                { item: AllItems.Sled, probability: 0.33 },
                { item: AllItems.Abacus, probability: 0.33 },
                { item: AllItems.Arrows20, probability: 0.33 },
                { item: AllItems.Blowgun_Needles50, probability: 0.33 },
                { item: AllItems.Crossbow_Bolts20, probability: 0.33 },
                { item: AllItems.Sling_Bullets20, probability: 0.67 },
                { item: AllItems.Crystal, probability: 0.1 },
                { item: AllItems.Orb, probability: 0.1 },
                { item: AllItems.Rod, probability: 0.1 },
                { item: AllItems.Staff, probability: 0.1 },
                { item: AllItems.Wand, probability: 0.1 },
                { item: AllItems.Backpack, probability: 1 },
                { item: AllItems.Ball_BearingsBag_Of_1000, probability: 0.67 },
                { item: AllItems.Barrel, probability: 1 },
                { item: AllItems.Basket, probability: 1 },
                { item: AllItems.Bedroll, probability: 1 },
                { item: AllItems.Bell, probability: 1 },
                { item: AllItems.Blanket, probability: 1 },
                { item: AllItems.Block_And_Tackle, probability: 1 },
                { item: AllItems.Book, probability: 1 },
                { item: AllItems.Glass_Bottle, probability: 1 },
                { item: AllItems.Bucket, probability: 1 },
                { item: AllItems.CaltropsBag_Of_20, probability: 0.33 },
                { item: AllItems.Candle, probability: 1 },
                { item: AllItems.Case_Crossbow_Bolt, probability: 0.33 },
                { item: AllItems.Case_Map_Or_Scroll, probability: 0.67 },
                { item: AllItems.Chain10_Feet, probability: 1 },
                { item: AllItems.Chalk1_Piece, probability: 1 },
                { item: AllItems.Chest, probability: 1 },
                { item: AllItems.ClothesCommon, probability: 1 },
                { item: AllItems.Clothes_Costume, probability: 0.33 },
                { item: AllItems.Clothes_Fine, probability: 0.1 },
                { item: AllItems.Clothes_Travelers, probability: 1 },
                { item: AllItems.Component_Pouch, probability: 0.1 },
                { item: AllItems.Crowbar, probability: 1 },
                { item: AllItems.Sprig_Of_Mistletoe, probability: 0.1 },
                { item: AllItems.Totem, probability: 0.1 },
                { item: AllItems.Wooden_Staff, probability: 0.67 },
                { item: AllItems.Yew_Wand, probability: 0.1 },
                { item: AllItems.Fishing_Tackle, probability: 1 },
                { item: AllItems.FlaskOrTankard, probability: 1 },
                { item: AllItems.Grappling_Hook, probability: 0.67 },
                { item: AllItems.Hammer, probability: 1 },
                { item: AllItems.Hammer_Sledge, probability: 0.67 },
                { item: AllItems.Amulet, probability: 0.1 },
                { item: AllItems.Emblem, probability: 0.1 },
                { item: AllItems.Reliquary, probability: 0.1 },
                { item: AllItems.Hourglass, probability: 0.33 },
                { item: AllItems.Hunting_Trap, probability: 0.67 },
                { item: AllItems.Ink1_Ounce_Bottle, probability: 1 },
                { item: AllItems.Ink_Pen, probability: 1 },
                { item: AllItems.JugOrPitcher, probability: 1 },
                { item: AllItems.Kit_Climbers, probability: 0.33 },
                { item: AllItems.Kit_Disguise, probability: 0.01 },
                { item: AllItems.Kit_Forgery, probability: 0.01 },
                { item: AllItems.Kit_Herbalism, probability: 0.67 },
                { item: AllItems.Kit_Healers, probability: 0.33 },
                { item: AllItems.Kit_Mess, probability: 1 },
                { item: AllItems.Kit_Poisoners, probability: 0.01 },
                { item: AllItems.Ladder10_Foot, probability: 1 },
                { item: AllItems.Lamp, probability: 1 },
                { item: AllItems.Lantern_Bullseye, probability: 1 },
                { item: AllItems.Lantern_Hooded, probability: 1 },
                { item: AllItems.Lock, probability: 1 },
                { item: AllItems.Magnifying_Glass, probability: 0.33 },
                { item: AllItems.Manacles, probability: 0.33 },
                { item: AllItems.Mirror_Steel, probability: 0.67 },
                { item: AllItems.OilFlask, probability: 0.67 },
                { item: AllItems.PaperOne_Sheet, probability: 1 },
                { item: AllItems.ParchmentOne_Sheet, probability: 1 },
                { item: AllItems.PerfumeVial, probability: 0.33 },
                { item: AllItems.Pick_Miners, probability: 0.67 },
                { item: AllItems.Piton, probability: 1 },
                { item: AllItems.Poison_Basic_Vial, probability: 0.01 },
                { item: AllItems.Pole10_Foot, probability: 1 },
                { item: AllItems.Pot_Iron, probability: 1 },
                { item: AllItems.Potion_Of_Healing, probability: 0.33 },
                { item: AllItems.Pouch, probability: 1 },
                { item: AllItems.Quiver, probability: 0.33 },
                { item: AllItems.Ram_Portable, probability: 0.33 },
                { item: AllItems.Rations1_Day, probability: 1 },
                { item: AllItems.Rope_Hempen_50_Feet, probability: 1 },
                { item: AllItems.Rope_Silk_50_Feet, probability: 0.1 },
                { item: AllItems.Sack, probability: 1 },
                { item: AllItems.Scale_Merchants, probability: 0.67 },
                { item: AllItems.Sealing_Wax, probability: 1 },
                { item: AllItems.Shovel, probability: 1 },
                { item: AllItems.Signal_Whistle, probability: 0.67 },
                { item: AllItems.Signet_Ring, probability: 0.67 },
                { item: AllItems.Soap, probability: 1 },
                { item: AllItems.Spellbook, probability: 0.1 },
                { item: AllItems.Spikes_Iron_10, probability: 1 },
                { item: AllItems.Spyglass, probability: 0.33 },
                { item: AllItems.Tent_Two_Person, probability: 1 },
                { item: AllItems.Tinderbox, probability: 1 },
                { item: AllItems.Torch, probability: 1 },
                { item: AllItems.Vial, probability: 1 },
                { item: AllItems.Waterskin, probability: 1 },
                { item: AllItems.Whetstone, probability: 1 },
                { item: AllItems.Padded, probability: 0.33 },
                { item: AllItems.Leather, probability: 0.33 },
                { item: AllItems.Studded_Leather, probability: 0.1 },
                { item: AllItems.Shield, probability: 0.33 }
            ];
        case BusinessType.GROCERY:
            return [
                { item: AllItems.Animal_Feed_Per_Day, probability: 1 },
                { item: AllItems.Cheese_Hunk, probability: 1 },
                { item: AllItems.Meals_Per_Day_Squalid, probability: 1 },
                { item: AllItems.Meals_Per_Day_Poor, probability: 1 },
                { item: AllItems.Meals_Per_Day_Modest, probability: 1 },
                { item: AllItems.Meat_Chunk, probability: 1 },
                { item: AllItems.Bread_Loaf, probability: 1 }
            ];
        case BusinessType.HERBS:
            return [
                { item: AllItems.Alchemists_Supplies, probability: 1.0 },
                { item: AllItems.Antitoxin, probability: 0.67 },
                { item: AllItems.Kit_Healers, probability: 0.67 },
                { item: AllItems.Kit_Herbalism, probability: 1 },
                { item: AllItems.Kit_Poisoners, probability: 0.1 },
                { item: AllItems.PerfumeVial, probability: 0.67 },
                { item: AllItems.Poison_Basic_Vial, probability: 0.10 },
                { item: AllItems.Potion_Of_Healing, probability: 1 },
                { item: AllItems.Soap, probability: 1 },
                { item: AllItems.Sprig_Of_Mistletoe, probability: 1 },
                { item: new InventoryItem(ItemType.MISC, "Herbs or Incense (by weight)", 100, Unit.COPPER), probability: 1 },
                { item: new InventoryItem(ItemType.MISC, "Rare Soporific Herbs", 500, Unit.COPPER), probability: 0.33 },
                { item: new InventoryItem(ItemType.MISC, "Mushroom and Saffron Ointment", 2500, Unit.COPPER), probability: 0.67 }
            ];
        case BusinessType.HORSE_RANCH:
            return [
                { item: AllItems.Donkey_Or_Mule, probability: 1 },
                { item: AllItems.Horse_Draft_Or_Camel, probability: 1 },
                { item: AllItems.Horse_Riding, probability: 1 },
                { item: AllItems.Mastiff, probability: 1 },
                { item: AllItems.Pony, probability: 1 },
                { item: AllItems.Warhorse, probability: 0.33 },
                { item: AllItems.Bit_And_Bridle, probability: 1 },
                { item: AllItems.Animal_Feed_Per_Day, probability: 1 },
                { item: AllItems.Saddle_Exotic, probability: 0.33 },
                { item: AllItems.SaddleMilitary, probability: 0.67 },
                { item: AllItems.Saddle_Pack, probability: 1 },
                { item: AllItems.Saddle_Riding, probability: 1 },
                { item: AllItems.Saddlebags, probability: 1 },
                { item: AllItems.Stabling_Per_Day, probability: 1 },
                { item: AllItems.Untrained_Labor_Per_Day, probability: 1 }
            ];
        case BusinessType.HUNTING_CABIN:
            return [
                { item: AllItems.Skilled_Labor_Per_Day, probability: 1 }
            ];
        case BusinessType.INN:
            return [
                { item: AllItems.Animal_Feed_Per_Day, probability: 1 },
                { item: AllItems.Untrained_Labor_Per_Day, probability: 1 },
                { item: AllItems.Gallon_Of_Ale, probability: 1 },
                { item: AllItems.Mug_Of_Ale, probability: 1 },
                { item: AllItems.Cheese_Hunk, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Squalid, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Poor, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Modest, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Comfortable, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Wealthy, probability: 1 },
                { item: AllItems.Inn_Stay_Per_Day_Aristocratic, probability: 1 },
                { item: AllItems.Meals_Per_Day_Squalid, probability: 1 },
                { item: AllItems.Meals_Per_Day_Poor, probability: 1 },
                { item: AllItems.Meals_Per_Day_Modest, probability: 1 },
                { item: AllItems.Meals_Per_Day_Comfortable, probability: 1 },
                { item: AllItems.Meals_Per_Day_Wealthy, probability: 1 },
                { item: AllItems.Meals_Per_Day_Aristocratic, probability: 1 },
                { item: AllItems.Meat_Chunk, probability: 1 },
                { item: AllItems.Pitcher_Of_Common_Wine, probability: 1 },
                { item: AllItems.Fine_Bottle_Of_Wine, probability: 1 },
                { item: AllItems.Messenger_Per_Mile, probability: 1 },
                { item: AllItems.Stabling_Per_Day, probability: 1 },
                { item: AllItems.Bread_Loaf, probability: 1 },
                { item: AllItems.Coach_Cab_Beteen_Towns_Per_Mile, probability: 1 },
                { item: AllItems.Coach_Cab_Within_City, probability: 1 }
            ];
        case BusinessType.JEWELERY_SHOP:
            return [
                { item: AllItems.Spyglass, probability: 0.67 },
                { item: AllItems.Jewelers_Tools, probability: 1 },
                { item: new InventoryItem(ItemType.MISC, "Gold Jewelry", 2500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jacinth Necklace", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ornate Silver Bar Paperweight", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Agate Ring", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Silver Jewelry", 2500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Ring", 5000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Black Pearl Necklace", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jeweled Hearing Horn", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jeweled Glass Eye", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Necklace", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Crystal Container", 200000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Bejeweled Ivory Statuette ", 150000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ruby Ring", 5000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jewel-encrusted Dagger", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Onyx Stone Necklace", 15000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Sunburst Pendant", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Sapphire Necklace", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ruby Necklace", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ruby Bracelet", 150000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Tiara", 500000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Broach", 20000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Earings", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Silver Rod", 1000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Gem-encrusted Bowl ", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Pearl Ring", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Platinum Chain", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jade Minature", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Corundum Necklace", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ivory Strip Earings", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Silver and Iron Bracelet", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ornamental Jar", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jade Ring", 1000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Ivory Medallion", 500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Polished Marble", 500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Tiny Silver Spoon", 500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Bracelet", 50000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Decorative Miniature Platinum Sword", 25000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Small Diamond", 2500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jade Bracelet", 2500, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond", 30000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Crystal Ball (non-magical)", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Silver Mirror", 100000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond, Emerald, Ruby, and Sapphire Tiara", 500000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Jade Circlet", 150000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Decorative Silver Cage", 10000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond and Opal Earings", 90000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Diamond Circlet", 2500000, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Pair of Platinum Rings", 10000, Unit.COPPER), probability: 0.67 },
            ];
        case BusinessType.LEATHERWORKING:
            return [
                //Armor
                { item: AllItems.Hide, probability: 0.67 },
                { item: AllItems.Leather, probability: 1.0 },
                { item: AllItems.Padded, probability: 1.0 },
                { item: AllItems.Spiked_Armor, probability: 1.0 },
                { item: AllItems.Splint, probability: 0.33 },
                { item: AllItems.Studded_Leather, probability: 0.67 },
                //Barding
                { item: AllItems.Hide_Barding, probability: 0.33 },
                { item: AllItems.Leather_Barding, probability: 0.67 },
                { item: AllItems.Padded_Barding, probability: 0.67 },
                { item: AllItems.Spiked_Armor_Barding, probability: 0.67 },
                { item: AllItems.Splint_Barding, probability: 0.1 },
                { item: AllItems.Studded_Leather_Barding, probability: 0.33 },
            ];
        case BusinessType.SCRIPTORIUM:
            return [
                { item: AllItems.Calligraphers_Supplies, probability: 1 },
                { item: AllItems.Painters_Supplies, probability: 1 },
                { item: AllItems.Book, probability: 1 },
                { item: AllItems.Chalk1_Piece, probability: 1 },
                { item: AllItems.Ink1_Ounce_Bottle, probability: 1 },
                { item: AllItems.Ink_Pen, probability: 1 },
                { item: AllItems.Kit_Forgery, probability: 0.1 },
                { item: AllItems.PaperOne_Sheet, probability: 0.1 },
                { item: AllItems.ParchmentOne_Sheet, probability: 0.1 },
                { item: AllItems.Sealing_Wax, probability: 0.1 },
                { item: AllItems.Spellbook, probability: 0.1 }
            ];
        case BusinessType.TAILORING:
            return [
                { item: AllItems.ClothesCommon, probability: 1 },
                { item: AllItems.Clothes_Costume, probability: 0.67 },
                { item: AllItems.Clothes_Fine, probability: 0.33 },
                { item: AllItems.Clothes_Travelers, probability: 1 },
                { item: AllItems.Robes, probability: 1 }
            ];
        case BusinessType.TANNERY:
            return [
                { item: AllItems.Skilled_Labor_Per_Day, probability: 1 }
            ];
        case BusinessType.TAVERN:
            return [
                { item: AllItems.Untrained_Labor_Per_Day, probability: 1 },
                { item: AllItems.Skilled_Labor_Per_Day, probability: 1 },
                { item: AllItems.Gallon_Of_Ale, probability: 1 },
                { item: AllItems.Mug_Of_Ale, probability: 1 },
                { item: AllItems.Cheese_Hunk, probability: 1 },
                { item: AllItems.Meals_Per_Day_Squalid, probability: 1 },
                { item: AllItems.Meals_Per_Day_Poor, probability: 1 },
                { item: AllItems.Meals_Per_Day_Modest, probability: 1 },
                { item: AllItems.Meals_Per_Day_Comfortable, probability: 1 },
                { item: AllItems.Meals_Per_Day_Wealthy, probability: 1 },
                { item: AllItems.Meals_Per_Day_Aristocratic, probability: 1 },
                { item: AllItems.Meat_Chunk, probability: 1 },
                { item: AllItems.Pitcher_Of_Common_Wine, probability: 1 },
                { item: AllItems.Fine_Bottle_Of_Wine, probability: 1 },
                { item: AllItems.Messenger_Per_Mile, probability: 1 },
                { item: AllItems.Bread_Loaf, probability: 1 },
                { item: AllItems.Coach_Cab_Beteen_Towns_Per_Mile, probability: 1 },
                { item: AllItems.Coach_Cab_Within_City, probability: 1 }
            ];
        case BusinessType.TEMPLE:
            return [
                { item: AllItems.Holy_WaterFlask, probability: 1 },
                { item: AllItems.Kit_Healers, probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Herbs and Incense", 100, Unit.COPPER), probability: 0.67 },
                { item: new InventoryItem(ItemType.MISC, "Reliquary with Sacred Relic", 100000, Unit.COPPER), probability: 0.33 },
                { item: new InventoryItem(ItemType.MISC, "Rare Oils and Unguents", 100000, Unit.COPPER), probability: 0.1 },
                { item: new InventoryItem(ItemType.MISC, "Holy Symbol", 500, Unit.COPPER), probability: 1 },
                { item: AllItems.Level_1_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_2_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_3_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_4_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_5_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_6_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_7_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_8_Spell_Before_Components, probability: 1 },
                { item: AllItems.Level_9_Spell_Before_Components, probability: 1 }
            ];
        case BusinessType.WEAPON_SHOP:
            return [
                { item: AllItems.Smiths_Tools, probability: 0.33 },
                { item: AllItems.Club, probability: 1 },
                { item: AllItems.Dagger, probability: 1 },
                { item: AllItems.Greatclub, probability: 1 },
                { item: AllItems.Handaxe, probability: 1 },
                { item: AllItems.Javelin, probability: 1 },
                { item: AllItems.Light_Hammer, probability: 1 },
                { item: AllItems.Mace, probability: 1 },
                { item: AllItems.Quarterstaff, probability: 1 },
                { item: AllItems.Sickle, probability: 1 },
                { item: AllItems.Spear, probability: 1 },
                { item: AllItems.Crossbow_Light, probability: 0.67 },
                { item: AllItems.Dart, probability: 1 },
                { item: AllItems.Shortbow, probability: 0.33 },
                { item: AllItems.Sling, probability: 0.1 },
                { item: AllItems.Battleaxe, probability: 1 },
                { item: AllItems.Flail, probability: 1 },
                { item: AllItems.Glaive, probability: 0.8 },
                { item: AllItems.Greataxe, probability: 0.8 },
                { item: AllItems.Greatsword, probability: 0.8 },
                { item: AllItems.Halberd, probability: 0.8 },
                { item: AllItems.Lance, probability: 0.8 },
                { item: AllItems.Longsword, probability: 1 },
                { item: AllItems.Maul, probability: 0.8 },
                { item: AllItems.Morningstar, probability: 1 },
                { item: AllItems.Pike, probability: 0.8 },
                { item: AllItems.Rapier, probability: 1 },
                { item: AllItems.Scimitar, probability: 1 },
                { item: AllItems.Shortsword, probability: 1 },
                { item: AllItems.Trident, probability: 0.8 },
                { item: AllItems.War_Pick, probability: 1 },
                { item: AllItems.Warhammer, probability: 1 },
                { item: AllItems.Whip, probability: 0.67 },
                { item: AllItems.Blowgun, probability: 0.1 },
                { item: AllItems.Crossbow_Hand, probability: 0.67 },
                { item: AllItems.Crossbow_Heavy, probability: 0.33 },
                { item: AllItems.Longbow, probability: 0.33 },
                { item: AllItems.Net, probability: 0.33 },
                { item: AllItems.CaltropsBag_Of_20, probability: 0.67 },
                { item: AllItems.Ram_Portable, probability: 0.67 }
            ];
        case BusinessType.WAINWRIGHT_WORKSHOP:
            return [
                { item: AllItems.Carriage, probability: 0.67 },
                { item: AllItems.Cart, probability: 1 },
                { item: AllItems.Chariot, probability: 0.67 },
                { item: AllItems.Sled, probability: 1 },
                { item: AllItems.Wagon, probability: 1 },
                { item: AllItems.Chest, probability: 1 }
            ];
        case BusinessType.FARM:
            return [
                { item: AllItems.Untrained_Labor_Per_Day, probability: 1 },
                { item: AllItems.Skilled_Labor_Per_Day, probability: 1 },
                { item: AllItems.Cart, probability: 0.1 },
                { item: AllItems.Donkey_Or_Mule, probability: 0.1 },
                { item: AllItems.Horse_Draft_Or_Camel, probability: 0.1 },
                { item: AllItems.Mastiff, probability: 0.1 },
                { item: AllItems.Animal_Feed_Per_Day, probability: 0.67 },
                { item: AllItems.Stabling_Per_Day, probability: 0.67 }
            ];
        case BusinessType.BREWERY:
            return [
                { item: AllItems.Gallon_Of_Ale, probability: 1 },
                { item: AllItems.Mug_Of_Ale, probability: 1 },
                { item: AllItems.Brewers_Supplies, probability: 1 },
                { item: new InventoryItem(ItemType.FOOD, "Barrel of Beer", Math.floor(AllItems.Mug_Of_Ale.Cost * 124 * .67 + AllItems.Barrel.Cost), Unit.COPPER), probability: 1 },
            ];
        default:
            return [];
    }
}