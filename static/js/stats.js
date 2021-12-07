const MAX_INT32 = Math.pow(2, 32);
class CryptoRandom {
    static random() {
        let array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] / MAX_INT32;
    }
    static randomFromArray(l) {
        let index = CryptoRandom.random() * l.length;
        let safeIndex = Math.floor(index);
        return l[safeIndex];
    }
    static createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = CryptoRandom.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
class BoxMullerRandom {
    constructor(mu = 0, sigma = 1) {
        this.mu = mu;
        this.sigma = sigma;
    }
    nextDouble() {
        let z = this.getZ();
        while (isNaN(z))
            z = this.getZ();
        return z * this.sigma + this.mu;
    }
    getZ() {
        let u1 = CryptoRandom.random();
        let u2 = CryptoRandom.random();
        let z = Math.sqrt(-2.0 * Math.log(u1) * Math.cos(2.0 * Math.PI * u2));
        return z;
    }
    next() {
        let d = this.nextDouble();
        let i = Math.floor(d);
        return i;
    }
}
class Stats {
    static randomSample(collection, count) {
        return collection?.sort(() => 0.5 - Math.random()).slice(0, count);
    }
}
class RollOption {
}
class RollTable {
    constructor() {
        this.options = [];
    }
    roll() {
        let overallMin = Math.min(...this.options.map(o => o.min));
        let overallMax = Math.max(...this.options.map(o => o.max));
        let r = Math.floor(CryptoRandom.random() * (overallMax - overallMin)) + overallMin;
        for (let i in this.options) {
            let option = this.options[i];
            if (r >= option.min && r <= option.max)
                return option.value;
        }
    }
}
