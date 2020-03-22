class VigenereCipheringMachine {
    constructor(isDirect) {
        this.isReverse = (isDirect === false);
        this.code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    checkParams(paramA, paramB) {
        if (typeof paramA === 'undefined' || typeof paramB === 'undefined')
            throw new Error();
    }

    getResultString(array) {
        if (this.isReverse)
            return array.reverse().join('');
        return array.join('');
    }

    encrypt(message, key) {
        this.checkParams(message, key);

        var inputMessage = message.toUpperCase(),
            length = message.length,
            keyRepeatTimes = Math.ceil(length / key.length),
            keySentence = key.toUpperCase().repeat(keyRepeatTimes).split(''),
            encryptedMessage = [],
            startIndex = null;

        for (let i = 0; i < length; i++) {
            startIndex = this.code.indexOf(inputMessage[i]);
            if (startIndex !== -1) {
                encryptedMessage.push(this.code[this.code.indexOf(keySentence.shift()) + startIndex]);
            } else {
                encryptedMessage.push(inputMessage[i]);
            }
        }

        return this.getResultString(encryptedMessage);
    }

    decrypt(encryptedMessage, key) {
        this.checkParams(encryptedMessage, key);

        var inputMessage = encryptedMessage.toUpperCase(),
            length = encryptedMessage.length,
            keyRepeatTimes = Math.ceil(length / key.length),
            keySentence = key.toUpperCase().repeat(keyRepeatTimes).split(''),
            decryptedMessage = [],
            startIndex = null,
            baseIndex = null;

        for (let i = 0; i < length; i++) {
            startIndex = this.code.indexOf(keySentence[0]);
            baseIndex = this.code.indexOf(inputMessage[i]);

            if (baseIndex !== -1) {
                keySentence.shift();
                if (baseIndex >= startIndex) {
                    decryptedMessage.push(this.code[baseIndex - startIndex]);
                } else {
                    decryptedMessage.push(this.code[baseIndex - startIndex + 26]);
                }
            } else {
                decryptedMessage.push(inputMessage[i]);
            }
        }

        return this.getResultString(decryptedMessage);
    }
}

module.exports = VigenereCipheringMachine;
