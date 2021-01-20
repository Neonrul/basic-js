const chainMaker = {
    chainArray: [],

    getLength() {
        return this.chainArray.length
    },

    addLink(value = '') {
        this.chainArray.push(value)
        return this
    },

    removeLink(position) {
        if (typeof position === 'number' && position > 0 && position < this.chainArray.length) {
            this.chainArray.splice(position - 1, 1)
        } else {
            this.chainArray.length = 0
            throw new Error()
        }
        return this
    },

    reverseChain() {
        this.chainArray.reverse()
        return this
    },

    finishChain() {
        const chain = this.chainArray.reduce((str,item, index) => !index ? str += `( ${item} )` : str += `~~( ${item} )`,'')
        this.chainArray.length = 0
        return chain
    }
}

module.exports = chainMaker
