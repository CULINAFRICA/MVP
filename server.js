import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));


app.get("/", (req, res) => {
    console.log(__dirname + "/index.html");
    res.sendFile(__dirname + "/login.html");
})

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send(`<h1> A game where users associate images of African dishes with their names or definitions, emphasizing African culinary diversity and culture!! </h1>`)
})

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send(`<h1> <a href = https://www.facebook.com/Amawhat > Facebook </a> </h1>`)
})

app.post("/submit", (req, res) => {
    //save data to database
    console.log(req.body);
    res.sendStatus(201);
});

app.put("/user/gerald", (req, res) => {
    //save first score to db
    res.sendStatus(200);
});

app.patch("/user/gerald", (req, res) => {
    //update high scor
    res.sendStatus(200);
})



app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
