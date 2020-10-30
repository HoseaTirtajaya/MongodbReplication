// mongod --dbpath "C:\Program Files\MongoDB\Server\4.4\data" --logpath 
// "C:\Program Files\MongoDB\Server\4.4\log\mongod.log" --port 27017 --storageEngine=wiredTiger --journal --replSet mainhospital

// mongod --dbpath "C:\backupmain\db" 
// --logpath "C:\backupmain\log\mongod.log" --port 27021 --storageEngine=wiredTiger --journal --replSet mainhospital

const express = require("express");
const app = express();
const PORT = 2000;
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/hospitalform"

//db.connect
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("We connected to mongoose");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//app.use Router
app.use(require("./routers"));

//Listening
server.listen(PORT, () => console.log("Server started on " + PORT));

//set NODE_ENV=development&&
