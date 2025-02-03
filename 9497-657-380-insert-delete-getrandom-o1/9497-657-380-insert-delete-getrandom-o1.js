var RandomizedSet = function () {
    this.data = [];
    this.indexMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.indexMap.has(val)) {
        return false;
    }
    this.indexMap.set(val, this.data.length);
    this.data.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.indexMap.has(val)) {
        return false;
    }

    let idxToRemove = this.indexMap.get(val);
    let lastElement = this.data[this.data.length - 1];

    if (idxToRemove !== this.data.length - 1) {
        this.data[idxToRemove] = lastElement;
        this.indexMap.set(lastElement, idxToRemove);
    }

    this.data.pop();
    this.indexMap.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.data[Math.floor(Math.random() * this.data.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */