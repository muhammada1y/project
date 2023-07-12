const express = require("express");
const path = require("path");
const app = express();
const EventerEmitter = require("events");
const events = new EventerEmitter();



app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
//express.static is provideing path


app.use(express.static(path.join(__dirname, "front")));

// API endpoint for serving HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "front", "first.html"));
});

app.get("/cv-user", (req, res) => {
  events.on(path.join(__dirname, "front", "form.html"));
});

let d = fetch("http://localhost:3030/form.html")
   d.then(response => response.text())
   d.then(data => {
    return console.log(data);

  })

// Start the server
app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
