const express = require('express');
const cloudinary = require('../config/cloudinary');
const upload = require('../config/multer');
const Upload = require('../models/cloud');
const router = express.Router();

router.post('/', upload.single("image"), async (req, res) => {
    try {
        const upl = await cloudinary.uploader
            .upload(req.file.path).then((result) => {
                console.log("Upload Response: ", result);
                Upload.create({
                    name: result.secure_url,
                    mid: result.public_id,
                })
                res.status(201).json({ message: "Image uploaded successfully", image: result.secure_url, mid: result.public_id })
            })
    } catch (error) {
        res.status(500).json({ message: 'Error getting data' });
    }
})

router.post("/delete", async (req, res) => {
    try {
        const del = await cloudinary.uploader.destroy(req.body.mid).then(async (result) => {
            const img = await Upload.findOneAndDelete({ mid: req.body.mid });
            // console.log(result)
            console.log(img);

            res.status(200).json({ message: "Image deleted successfully", result, img })
        })
        // const data = await Upload.find()

    } catch (error) {

        res.status(500).json({ message: 'Error getting data', error });
    }
})
router.get("/image", async (req, res) => {
    try {
        const data = await Upload.find()
        res.status(200).json({ message: "Image fetched successfully", data })

    } catch (error) {

        res.status(500).json({ message: 'Error getting data' });
    }
})

module.exports = router;