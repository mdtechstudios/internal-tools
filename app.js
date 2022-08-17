const express = require('express');
var cors = require('cors')
const aesEcb = require("aes-ecb");
const app = express();

const port = 3000;
const KEY = "GVNMCDRusvPrRRWw08QBxw==";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const encrypt = (request) => {
    if (request == null) {
        return "Please provide required data";
    }
    return aesEcb.encrypt(KEY, request);
}

const decrypt = (request) => {
    if (request == null) {
        return "Please provide required data";
    }
    return aesEcb.decrypt(KEY, request).toString("utf8");
}


app.post('/encrypt', (req, res) => {
    var { encData } = req.body;
    console.log(encData);
    const result = encrypt(encData);
    console.log(result);
    return res.send(result);
});


app.post('/decrypt', (req, res) => {
    var { decData } = req.body;
    console.log(decData);
    var result = decrypt(decData);
    return res.send(result);
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})