const bcrypt = require('bcrypt')
class Bcrypt{
    async encrypt(data){
        const{ saltRound, pass} = data
        let encryptData = await bcrypt.hash(pass,saltRound)
        return encryptData
    }
    async verify(data){
        const {password,hash}= data
        const match = await bcrypt.compare(password,hash)
        return match
    }
}

module.exports = new Bcrypt;