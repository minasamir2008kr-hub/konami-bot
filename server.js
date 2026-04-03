const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const TOKEN = "8604685128:AAHiGb3azXTyRtFE_Y2UTIKY7G2tUbAePLw";
const CHAT_ID = "5260829558";

app.post("/send", async (req, res) => {
    const { message } = req.body;

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "error" });
    }
});

app.listen(3000, () => console.log("Server running"));
