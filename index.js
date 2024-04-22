const express = require('express');
const db = require('./config/connect');
const cors = require("cors");
const router = require('./routes/uploadRoute');

const app = express();
app.use(cors({ origin: "*" }));
db();
app.use(express.json());
app.use('/api/v1/', router);
app.listen(5000, () => {
    console.log("app is running");
})