const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/ussd", (req, res) => {
    let { text } = req.body;
    let response = "";

    if (text === "") {
        response = "CON Welcome to My USSD Bot\n1. Check Balance\n2. Buy Airtime";
    } else if (text === "1") {
        response = "END Your balance is KES 1,000";
    } else if (text === "2") {
        response = "END Airtime purchase successful!";
    } else {
        response = "END Invalid option";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
