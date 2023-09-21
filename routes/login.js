const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Define a GET route to render the login page
router.get("/", (req, res) => {
  res.render("login", { user: req.session.user || null });
});

// Define a POST route to handle user login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Query the database to find the user by email
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email]);

    if (result.rows.length === 0) {
      // User not found
      return res.send({ error: "User not found" });
    }

    const user = result.rows[0];

    // Compare the provided password with the password in the database
    if (password !== user.password) {
      // Incorrect password
      return res.send({ error: "Incorrect password" });
    }

    // User authentication successful
    // Set user information in the session
    req.session.user = user; // You can store user data in the session

    // Redirect to the index page
    res.redirect("/");
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

router.get("/logout", (req, res) => {
  req.session = null;
  return res.redirect("/");
});

module.exports = router;
