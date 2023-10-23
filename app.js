const express = require("express");
const app = express();
const port = 4000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));

// Sample recipes data (you can replace this with your own JSON data)
const recipes = require("./recipes.js");

app.get("/recipes", (req, res) => {
    res.render("recipes", { recipes });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});