const aesEcb = require("aes-ecb");
const KEY = "GVNMCDRusvPrRRWw08QBxw==";
function encrypt(request) {
    if (request == null) {
        return "Please provide required data";
    }
    return aesEcb.encrypt(KEY, request);
}

function decrypt(request) {
    if (request == null) {
        return "Please provide required data";
    }
    return aesEcb.decrypt(KEY, request).toString("utf8");
}


//wallet txn
const bodydata = {
    "requestID": "001",
    "requestTime": "20201110161622",
    "merchantID": "partner1",
    "requestSource": "TOLLPARTNER1",
    "partnerRefID": "NJBD4588096L456111"
}


const resEnc = "";

const encstr = encrypt(JSON.stringify(bodydata));
console.log("Encrypted String ::" + encstr);
const decstr = decrypt(resEnc);
console.log("Decrypted String ::", decstr); 