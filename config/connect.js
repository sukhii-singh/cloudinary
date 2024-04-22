const mongoose = require("mongoose");

const db = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://sukhi:sukhvinder@cluster0.ruugl0h.mongodb.net/cloudinary?retryWrites=true&w=majority&appName=Cluster0"
        )
        if (connect) console.log("mongo db connected")
    } catch (error) {
        console.log("server error")
    }
}

module.exports = db;