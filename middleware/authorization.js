const { request } = require("express");

// fungsi authorization
exports.cekUser = (request, response, next) => {
    // funsi ini digunakan untuk mengecek data user yang tesimpan di session
    // jika datanya tesimpan di session maka boleh untuk mengakses fitur yang diinginkan
    // jika datanya tidak tersimpan di sseion maka akan di kembalikan di halaman login

    if (request.session.dataUser === undefined) {
            return response.redirect(`/auth`)
    } else {
        //  lanjut ke fitur yang di inginkan
        next()
    }
}