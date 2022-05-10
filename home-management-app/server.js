// Import express package
const express = require("express");

//Initialize Express
const app = express();

//Serve static build files from the "dist" directory
app.use(express.static("./dist/home-app"));

// Route incoming server request to the correct files
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/home-app" })
});

//Sstart the app on the default Heroku port
app.listen(process.env.PORT || 8080);
