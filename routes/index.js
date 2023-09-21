const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  // Check if a user is authenticated
  if (req.session.user) {
    // User is authenticated, customize the header
    const userEmail = req.session.user.email;
    res.render("index", { userEmail, userAuthenticated: true });
  } else {
    // User is not authenticated, render the default header
    res.render("index", { userAuthenticated: false });
  }
});
