const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const TOKEN = process.env.TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post("/send", async (req, res) => {
  const msg = req.body.message;

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}`;

  try {
    await fetch(url);
    res.send("done");
  } catch (err) {
    res.send("error");
  }
});

app.get("/", (req, res) => {
  res.send("Bot is working");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
