const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Creating a way (for now) to authenticate a user: DELETE THIS WHEN YOU SET UP JASON WEB TOKENS
app.use((req, res, next)=>{
	req.user = {id: '602e91146f880678205413b8'}; 
    next()
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/subscription-manager",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const subscriptionsController = require("./controllers/subscriptionsController");
const usersController = require("./controllers/usersController");

app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/api/subscriptions", subscriptionsController);
app.use("/api/users", usersController);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});