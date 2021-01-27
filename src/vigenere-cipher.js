const VigenereCipheringMachine = (() => {
    const _privateProps = new WeakMap(),
        _privateMethods = {
            equalKeyToString: (str, key, thisClass) => {
                let count = 0,
                    newKey = [...str.toUpperCase()].map(item => {
                        if (/[A-Z]/.test(item)) {
                            item = key[((count >= key.length) ? count % key.length : count)]
                            count++
                            return item
                        } else return item
                    }).join('').toUpperCase()
                return _privateProps.set(thisClass, {keyToString: newKey})
            }
        }

    class VigenereCipheringMachine {
        constructor(reverse = true) {
            this.reverseMachine = reverse
        }

        encrypt(str, key) {
            _privateMethods.equalKeyToString(str, key, this)
            const keyToString = _privateProps.get(this).keyToString,
                encryptString = [...str.toUpperCase()].map((item, i) => /[A-Z]/.test(item) ?
                    String.fromCharCode((item.charCodeAt(0) + keyToString.charCodeAt(i)) % 26 + 65) :
                    item)
            return this.reverseMachine ? encryptString.join('') : encryptString.reverse().join('')
        }

        decrypt(str, key) {
            _privateMethods.equalKeyToString(str, key, this)
            const keyToString = _privateProps.get(this).keyToString,
                decryptString = [...str.toUpperCase()].map((item, i) => /[A-Z]/.test(item) ?
                    String.fromCharCode((item.charCodeAt(0) - keyToString.charCodeAt(i) + 26) % 26 + 65) :
                    item)
            return this.reverseMachine ? decryptString.join('') : decryptString.reverse().join('')
        }
    }

    return VigenereCipheringMachine
})()

module.exports = VigenereCipheringMachine