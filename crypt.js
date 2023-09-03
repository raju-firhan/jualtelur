// memanggil library crypto-js
const crypto = require(`crypto-js`)

// membuat function utk enkripsi
exports.enkripsi = (plainText) => {
    // bikin secret key
    let secretkey = `YTTA`

    // proses enkripsi
    // AES = Advanced Encryption Standart
    let result = crypto.AES.encrypt(plainText, secretkey).toString()
    return result
}



// membuat fungsi deskripsi
exports.deskripsi = (chiperText) => {
    // define secretkey
    let secretkey = `YTTA`

    // proses deskripsi 
    let byte = crypto.AES.decrypt(chiperText,secretkey)

    let result = byte.toString(crypto.enc.Utf8)

    return result
}