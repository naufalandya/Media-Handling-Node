
const imageKit = require("../libs/imageKit")

const imageKitUpload = async function (req, res , next) {
    try {
        let strFile = req.file.buffer.toString('base64');

        let {url} = await imageKit.upload({
            fileName: Date.now() + ".png",
            file: strFile
        }); 

        res.json({
            status: true,
            message: 'Ok',
            data: url
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { imageKitUpload }