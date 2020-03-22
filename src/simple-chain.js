const chainMaker = {
    valueArray: [],

    getLength() {
        return this.valueArray.length;
    },

    addLink(value = ' ') {
        this.valueArray.push(value);
        return this;
    },

    removeLink(position) {
        if (!Number.isInteger(position) ||  (position < 1) || (position >= this.getLength())) {
            this.valueArray = [];
            throw new Error();
        }
        this.valueArray.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.valueArray.reverse();
        return this;
    },

    finishChain() {
        var result = this.valueArray.slice();
        this.valueArray = [];
        return result.map(function(item, index){return `${index ? '~~' : ''}( ${item} )`;}).join('');
    }
};

module.exports = chainMaker;
