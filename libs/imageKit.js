const imageKit = require("imagekit")

const {
    IMAGE_KIT_PUBLIC_KEY,
    IMAGE_KIT_PRIVATE_KEY,
    IMAGE_URL_ENDPOINT
} = process.env

module.exports = new imageKit({
    publicKey : IMAGE_KIT_PUBLIC_KEY,
    privateKey : IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : IMAGE_URL_ENDPOINT
})