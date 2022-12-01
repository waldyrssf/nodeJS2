//Requiring module
const express = require("express");

//Creating express object
const app = express();

//Handling GET request
app.get("/", (req, res) => {
  res.send("This simples Node App (API) is running on this server");
  res.end();
});

app.get("/return", (req, res) => {
  res.send(
    "This is a new return on this server using the GET request. " +
      " It can be accessed by /return"
  );
  res.end();
});

//Port Number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
