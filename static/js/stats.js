const MAX_INT32 = Math.pow(2, 32);

class CryptoRandom {
    static random() {
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] / MAX_INT32;
    }
}

class BoxMullerRandom {
    sigma;
    mu;

    constructor(mu = 0, sigma = 1) {
        this.mu = mu;
        this.sigma = sigma;
    }

    nextDouble() {
        var z = this.getZ();
        while (isNaN(z))
            z = this.getZ();
        return z * this.sigma + this.mu;
    }

    getZ() {
        var u1 = CryptoRandom.random();
        var u2 = CryptoRandom.random();
        var z = Math.sqrt(-2.0 * Math.log(u1) * Math.cos(2.0 * Math.PI * u2));
        return z;
    }

    next() {
        var d = this.nextDouble();
        var i = Math.floor(d);
        return i;
    }
}

function getRandom(l) {
    return l[Math.floor(CryptoRandom.random() * l.length)];
}

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = CryptoRandom.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}