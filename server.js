const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Token authorization
app.use((req, res, next) => {
  // console.log(req.headers)
  if(req.headers.authorization){
    const authorization = req.headers.authorization.split(" ")
    const decoded = jwt.verify(authorization[1], "123456")
    console.log(decoded.data);
    req.user = decoded.data
      next()
  }else{
    next()
  }
})


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