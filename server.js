import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import pg from "pg";
import {UAParser} from "ua-parser-js";
import dotenv from "dotenv";
// import morgan from "morgan";

dotenv.config();

app.use(cors({
    origin: 'https://geedino07.github.io/culinafricaa/', // replace with your actual GitHub Pages URL
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

// app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});



db.connect();

let visits;


var userIsAuthorized = false;

app.use(bodyParser.urlencoded({extended : true}));

function logger (req, res, next) {
    console.log ("Request Method: " + req.method);
    console.log("Request URL: " + req.url);
    if (req.body && Object.keys(req.body).length > 0) {
        console.log("Request email: " + req.body.email);
        console.log("Request password: " + req.body.password);
    } else {
        console.log("No body content");
    }

    next();
}
app.use(logger);
app.use(express.static(__dirname));


app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/login.html");
    res.sendFile(__dirname + "/index.html");
    
})

app.get("/api/logs", async (req, res) => {
   try {
    visits = await db.query("select ip_address, browser, device_type, os from visits");
    res.json(visits.rows);

   } catch (e) {
    console.log(e);
    res.sendFile(__dirname + "/login.html");
   }
   
})

app.post("/api/log-visit", async (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const browser = result.browser.name || "Unknown";
    const deviceType = result.device.type || "desktop"; // could be 'mobile', 'tablet', or undefined
    const os = result.os.name || "Unknown";

    try {
        await db.query(
            "INSERT INTO visits (ip_address, user_agent, browser, device_type, os) VALUES ($1, $2, $3, $4, $5)",
            [ip, userAgent, browser, deviceType, os]
        );
        res.status(200).json({ message: "Visit logged" });
    } catch (err) {
        console.error("Error logging visit", err);
        res.status(500).json({ error: "Database error" });
        console.log ("error");
    }
});

app.get("/api/stats", async (req, res) => {
    try {
        const total = await db.query("SELECT COUNT(*) FROM visits");
        const today = await db.query(`
            SELECT COUNT(*) FROM visits
            WHERE visited_at::date = CURRENT_DATE
        `);
        res.status(200).json({
            totalVisits: total.rows[0].count,
            todayVisits: today.rows[0].count
        });
    } catch (err) {
        console.error("Error fetching stats", err);
        res.status(500).json({ error: "Database error" });
    }
});



app.post("/submit", (req, res) => {
    //save data to database
    // res.sendStatus(201);
    if (req.body["password"]=== "ILoveProgramming"){
        // res.send(`<html><h1>Username: ${req.body['email']}</h1><p>Password: ${req.body["password"]}</p></html>201`);
        res.sendFile(__dirname + "/index.html");

    } else {
        res.redirect("/");
    }
});



app.listen(port, '0.0.0.0', () => {
    console.log(`server running on port ${port}`)
})
