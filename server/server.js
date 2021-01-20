require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.json("Hello World");
});

app.get("/user", function (req, res) {
    res.json("get-user");
});

app.post("/user", function (req, res) {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: "the name is necessary",
        });
    } else {
        res.json({
            person: body,
        });
    }
});

app.put("/user/:id", function (req, res) {
    let id = req.params.id;

    console.log(`Updating id: ${id}`);

    res.json({
        id: id,
    });
});

app.delete("/user", function (req, res) {
    res.json("delete-user");
});

app.listen(port, () => {
    console.log(`listening port ${port}`);
});
