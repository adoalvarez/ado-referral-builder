const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const refs = require("./referrals.json");

const PORT = process.env.PORT || 3001;

const app = express();

/**
 * This is just a simple rest api for dummy backend
 * 
 */

const filePath = __dirname + '/referrals.json'

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/api/referrals", (req, res) => { 
    const body = req.body;
    const savedData = {
        givenName: body.givenName,
        surName: body.surName,
        email: body.email,
        phone: body.phone,
        homeOR: body.homeOR,
        street: body.street,
        suburb: body.suburb,
        state: body.state,
        postCode: body.postCode,
        country: body.country,
    }

    fs.readFile(filePath, "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            obj.push(savedData);
            let json = JSON.stringify(obj, null, 2);
            fs.writeFile(filePath, json, "utf8", (err) => {
                if (err) { throw err }
                res.status(200).json({
                    message: "File successfully written"
                })
            });
        }
    })
}); 

app.get("/api/referrals", (req, res) => {
    fs.readFile(filePath, "utf8", function readFileCallback(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
