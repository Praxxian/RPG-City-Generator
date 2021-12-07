class CitySize {
    name: string
    avgSize: number
    maxEmployees: number

    constructor(name: string, avgSize: number, maxEmployees: number) {
        this.name = name;
        this.avgSize = avgSize;
        this.maxEmployees = maxEmployees;
    }

    label(): string {
        return `${this.name} (~${this.avgSize.toLocaleString()} people)`;
    }

    toString(): string {
        return this.name;
    }
}

class Race {
    name: string
    firstNameMaleList: string[]
    firstNameFemaleList: string[]
    lastNameList: string[]
    nicknamePrefix: string[]
    nicknameSuffix: string[]

    constructor(name: string, firstNameMaleList: string[], firstNameFemaleList: string[], lastNameList: string[], nicknamePrefix: string[] = null, nicknameSuffix: string[] = null) {
        this.name = name;
        this.firstNameMaleList = firstNameMaleList;
        this.firstNameFemaleList = firstNameFemaleList;
        this.lastNameList = lastNameList;
        this.nicknamePrefix = nicknamePrefix;
        this.nicknameSuffix = nicknameSuffix;
    }

    toString(): string {
        return this.name;
    }
}

class Caste {
    name: string
    ageRandom: BoxMullerRandom
    infantMortality: number

    constructor(name: string, ageRandom: BoxMullerRandom, infantMortality: number) {
        this.name = name;
        this.ageRandom = ageRandom;
        this.infantMortality = infantMortality;
    }

    toString() {
        return this.name;
    }

    static PEASANT = new Caste(
        'Peasant',
        new BoxMullerRandom(0.0, 20.0),
        0.2,
    );
    static TRADESMEN = new Caste(
        'Tradesmen',
        new BoxMullerRandom(0.0, 25.0),
        0.15
    );
    static MERCANTILE = new Caste(
        'Mercantile',
        new BoxMullerRandom(0.0, 30.0),
        0.05
    );
    static NOBLE = new Caste(
        'Noble',
        new BoxMullerRandom(0.0, 35.0),
        0.02
    );
}

interface IRaceFrequency {
    [key: string]: RaceFrequency
}

interface IRaceFrequencyGroup {
    [key: string]: Race[]
}

class Prosperity {
    Label: string
    noblePercent: number
    mercantilePercent: number
    tradePercent: number
    peasantPercent: number

    toString(): string {
        return this.Label;
    }
}

class MagicLevel {
    Label: string
    Description: string

    constructor(label: string, description: string) {
        this.Label = label;
        this.Description = description;
    }

    toString(): string {
        return this.Label;
    }
}

class CitySettings {
    CitySize: CitySize
    Races: IRaceFrequency
    NaturalFeatures: NaturalFeatures[]
    Prosperity: Prosperity
    MagicLevl: MagicLevel
    Genders: Gender[]
}

class BusinessType {
    name: string
    ownerCastes: Caste[]
    employeeCastes: Caste[]
    nouns: string[]
    adjectives: string[] = []
    altNames: string[]
    notes: () => string
    frequency: (settings: CitySettings) => number
    minEmployees: (settings: CitySettings) => number
    maxEmployees: (settings: CitySettings) => number

    toString(): string {
        return this.name;
    }
}

class Person {
    Id: number
    FirstName: string
    LastName: string
    Caste: Caste
    RaceFrequency: RaceFrequency
    Race: Race
    Age: number
    Gender: Gender
    Family: Family
    Spouse: string
    Appearance: string
    Strength: string
    Weakness: string
    Talent: string
    Mannerism: string
    Interaction: string
    GoodOrEvilIdeal: string
    LawfulOrChaoticIdeal: string
    NeutralOrOtherIdeal: string
    Bond: string
    FlawOrSecret: string
    RaceAge: number
    ownedBusiness: number
    worksAt: number

    toString(): string {
        return this.fullName();
    }

    getBusiness(businesses: Business[]): Business {
        return Business.getById(businesses, this.ownedBusiness);
    }

    setBusiness(business: Business) {
        this.ownedBusiness = business.Id;
        if (business.Owners.indexOf(this) < 0)
            business.Owners.push(this);
    }

    getEmployer(businesses: Business[]): Business {
        return Business.getById(businesses, this.worksAt);
    }

    setEmployer(business: Business) {
        this.worksAt = business.Id;
        if (business.Employees.indexOf(this) < 0)
            business.Employees.push(this);
    }

    fullName(): string {
        return `${this.FirstName} ${this.LastName}`.trim();
    }
}

class City {
    Settings: CitySettings
    People: Person[] = []
    Families: Family[] = []
    Businesses: Business[] = []
    Complete: boolean = false
    notableTrait: string
    knownFor: string
    calamity: string
}

class Family {
    LastName: string
    Caste: Caste
    Id: number

    toString(): string {
        return this.displayValue();
    }

    add(person: Person) {
        if (!person)
            return;
        person.LastName = this.LastName;
        person.Caste = this.Caste;
        person.Family = this;
    }

    displayValue(): string {
        return `${this.LastName} [${this.Id}]`;
    }
}

class Business {
    Id: number
    BusinessType: BusinessType
    Owners: Person[] = []
    Employees: Person[] = []
    Name: string
    Description: string
    Inventory: InventoryItem[] = []

    toString(): string {
        return this.Name;
    }

    generateName() {
        let businessType = this.BusinessType;
        let owner = this.Owners[0];

        if (businessType == BusinessTypes.ESTATE) {
            this.Name = `${owner.LastName} Manor`;
            return;
        }
        if (businessType == BusinessTypes.MINE || businessType == BusinessTypes.LUMBER_CAMP) {
            this.Name = `${owner.LastName} ${businessType.name}`;
            return;
        }

        let r = CryptoRandom.random();
        let nouns = businessType.nouns;
        let altNames = businessType.altNames;
        altNames.push(businessType.name);

        if (businessType == BusinessTypes.TEMPLE) {
            let noun = CryptoRandom.randomFromArray(nouns);
            let adj = CryptoRandom.randomFromArray(BusinessTypes.TEMPLE.adjectives);
            let name = CryptoRandom.randomFromArray(altNames);
            if (r <= 0.1) {
                let ownerRace = owner.Race;
                let nameGen = new NameGenerator({ Race: ownerRace, Gender: r < 0.5 ? Gender.MALE : Gender.FEMALE });
                let saintName = nameGen.getFirst();
                saintName += saintName.slice(-1).toUpperCase() == "S" ? "'" : "'s";
                this.Name = `Saint ${saintName} ${name}`;
                return;
            }
            if (r > 0.5) {
                this.Name = `${name} of the ${adj} ${noun}`;
                return
            }

            this.Name = `The ${adj} ${noun} ${name}`;
            return;
        }

        if (r < 0.33 && nouns.length > 1 && businessType != BusinessTypes.FARM && businessType != BusinessTypes.BREWERY && businessType != BusinessTypes.SHIPPING && businessType != BusinessTypes.FISHING) {
            let firstNoun = CryptoRandom.randomFromArray(nouns);
            nouns.splice(nouns.indexOf(firstNoun), 1);
            this.Name = `${firstNoun} & ${CryptoRandom.randomFromArray(nouns)}`;
            return;
        }

        if (r < 0.80 && nouns.length > 0 && businessType != BusinessTypes.FARM) {
            let adjectives = GeneralAdjectives;
            this.Name = (businessType == BusinessTypes.BREWERY ? "" : "The ") + `${CryptoRandom.randomFromArray(adjectives)} ${CryptoRandom.randomFromArray(nouns)}` + (businessType == BusinessTypes.BREWERY ? " " + CryptoRandom.randomFromArray(altNames) : "");
            return;
        }

        this.Name = businessType == BusinessTypes.BREWERY || businessType == BusinessTypes.SHIPPING ? `${owner.LastName} ${CryptoRandom.randomFromArray(altNames)}` : `${owner.FirstName}'s ${CryptoRandom.randomFromArray(altNames)}`;
    }

    static getById(businesses: Business[], id: number): Business {
        if (!id || !businesses)
            return null;
        for (let i = 0; i < businesses.length; i++) {
            if (businesses[i].Id == id)
                return businesses[i];
        }
        return null;
    }
}

class MagicItemRarity {
    MinRoll: number
    MaxRoll: number
    Multiplier: number

    static COMMON = <MagicItemRarity>({ MinRoll: 2, MaxRoll: 7, Multiplier: 10 });
    static UNCOMMON = <MagicItemRarity>({ MinRoll: 1, MaxRoll: 6, Multiplier: 100 });
    static RARE = <MagicItemRarity>({ MinRoll: 2, MaxRoll: 20, Multiplier: 1000 });
    static VERYRARE = <MagicItemRarity>({ MinRoll: 2, MaxRoll: 5, Multiplier: 10000 });
}

class InventoryItem {
    Name: string
    ItemType: ItemType
    Cost: number
    Unit: Unit
    DefaultCost: number
    MagicRarity: MagicItemRarity
    MagicTier: MagicItemTier

    favors = ['Simple', 'Major', 'Heroic'];

    constructor(itemType: ItemType = null,
        name: string = null,
        cost: number = null,
        unit: Unit = null,
        rarity: MagicItemRarity = null,
        magicTier: MagicItemTier = null) {
        this.ItemType = itemType;
        this.Name = name;
        this.Cost = cost;
        this.Unit = unit;
        this.MagicRarity = rarity;
        this.MagicTier = magicTier;

        if (this.MagicRarity)
            this.setMagicCost();
    }

    setMagicCost() {
        let roll1 = CryptoRandom.random() * (this.MagicRarity.MaxRoll - this.MagicRarity.MinRoll) + this.MagicRarity.MinRoll;
        let roll2 = CryptoRandom.random() * (this.MagicRarity.MaxRoll - this.MagicRarity.MinRoll) + this.MagicRarity.MinRoll;
        let roll = roll1;
        if (this.MagicTier == MagicItemTier.MINOR)
            roll = Math.min(roll1, roll2);
        else
            roll = Math.max(roll1, roll2);
        this.Cost = roll * this.MagicRarity.Multiplier * 100;
        if (this.ItemType == ItemType.POTION || this.ItemType == ItemType.SCROLL)
            this.Cost *= 1 / 2;
    }

    toString(): string {
        return `${this.Name} [${this.displayCost()}]`;
    }

    clone() {
        let inv = new InventoryItem();
        inv = Object.assign(inv, this);
        return inv;
    }

    displayCost(): string {
        switch (this.Unit) {
            case Unit.COPPER:
                return this.goldCost(this.Cost);
            case Unit.FAVOR:
                let favorStr = `${this.favors[this.Cost - 1]} favor`;
                if (this.DefaultCost > 0)
                    favorStr += ` (normally ${this.goldCost(this.DefaultCost)})`;
                return favorStr;
        }
    }

    goldCost(amount: number): string {
        let gp;
        let sp;

        let remainder = amount;
        let costStr = '';

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

interface IInventoryItemProbability {
    item: InventoryItem
    probability: number
}

class BusinessTypeUtil {
    static getInventory(businessType: BusinessType): IInventoryItemProbability[] {
        switch (businessType) {
            case BusinessTypes.ALCHEMIST_SHOP:
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
                    { item: new InventoryItem(ItemType.MISC, "Vial of Mercury", 5000, Unit.COPPER), probability: 0.67 },
                    { item: new InventoryItem(ItemType.MISC, "Phosphorus", 5000, Unit.COPPER), probability: 0.67 },

                ];
            case BusinessTypes.ARMOR_SHOP:
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
                    { item: new InventoryItem(ItemType.MISC, "Small Mithral Orb", 50000, Unit.COPPER), probability: 0.1 },
                    { item: new InventoryItem(ItemType.MISC, "Small Piece of Adamantine", 50000, Unit.COPPER), probability: 0.05 },
                ];
            case BusinessTypes.BAKERY:
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
            case BusinessTypes.SMITHY:
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
            case BusinessTypes.BOW_SHOP:
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
            case BusinessTypes.BUTCHER_SHOP:
                return [
                    { item: AllItems.Pot_Roast, probability: 1 },
                    { item: AllItems.Chops, probability: 1 },
                    { item: AllItems.Steak, probability: 1 },
                    { item: AllItems.Loin, probability: 1 },
                    { item: AllItems.Ribs, probability: 1 },
                    { item: AllItems.Sausages, probability: 1 },
                    { item: AllItems.Bacon, probability: 1 }
                ];
            case BusinessTypes.GENERAL_STORE:
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
            case BusinessTypes.GROCERY:
                return [
                    { item: AllItems.Animal_Feed_Per_Day, probability: 1 },
                    { item: AllItems.Cheese_Hunk, probability: 1 },
                    { item: AllItems.Meals_Per_Day_Squalid, probability: 1 },
                    { item: AllItems.Meals_Per_Day_Poor, probability: 1 },
                    { item: AllItems.Meals_Per_Day_Modest, probability: 1 },
                    { item: AllItems.Meat_Chunk, probability: 1 },
                    { item: AllItems.Bread_Loaf, probability: 1 }
                ];
            case BusinessTypes.HERBS:
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
            case BusinessTypes.HORSE_RANCH:
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
            case BusinessTypes.HUNTING_CABIN:
                return [
                    { item: AllItems.Skilled_Labor_Per_Day, probability: 1 }
                ];
            case BusinessTypes.INN:
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
            case BusinessTypes.JEWELERY_SHOP:
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
            case BusinessTypes.LEATHERWORKING:
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
            case BusinessTypes.SCRIPTORIUM:
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
            case BusinessTypes.TAILORING:
                return [
                    { item: AllItems.ClothesCommon, probability: 1 },
                    { item: AllItems.Clothes_Costume, probability: 0.67 },
                    { item: AllItems.Clothes_Fine, probability: 0.33 },
                    { item: AllItems.Clothes_Travelers, probability: 1 },
                    { item: AllItems.Robes, probability: 1 }
                ];
            case BusinessTypes.TANNERY:
                return [
                    { item: AllItems.Skilled_Labor_Per_Day, probability: 1 }
                ];
            case BusinessTypes.TAVERN:
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
            case BusinessTypes.TEMPLE:
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
            case BusinessTypes.WEAPON_SHOP:
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
            case BusinessTypes.WAINWRIGHT_WORKSHOP:
                return [
                    { item: AllItems.Carriage, probability: 0.67 },
                    { item: AllItems.Cart, probability: 1 },
                    { item: AllItems.Chariot, probability: 0.67 },
                    { item: AllItems.Sled, probability: 1 },
                    { item: AllItems.Wagon, probability: 1 },
                    { item: AllItems.Chest, probability: 1 }
                ];
            case BusinessTypes.FARM:
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
            case BusinessTypes.BREWERY:
                return [
                    { item: AllItems.Gallon_Of_Ale, probability: 1 },
                    { item: AllItems.Mug_Of_Ale, probability: 1 },
                    { item: AllItems.Brewers_Supplies, probability: 1 },
                    { item: new InventoryItem(ItemType.FOOD, "Barrel of Beer", Math.round(AllItems.Mug_Of_Ale.Cost * 124 * .67 + AllItems.Barrel.Cost), Unit.COPPER), probability: 1 },
                ];
            default:
                return [];
        }
    }
}