const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Define a GET route to render the messages page
router.get("/", async (req, res) => {
  try {
    // Check if the user is logged in
    if (!req.session.user) {
      return res.redirect("/login"); // Redirect to the login page if not logged in
    }

    const loggedInUserId = req.session.user.id; // Get the ID of the logged-in user

    // Query the database to fetch messages received by the logged-in user
    const query = `
      SELECT messages.*, users.email AS sender_email, users.username AS sender_username
      FROM messages
      JOIN users ON messages.sender_id = users.id
      WHERE receiver_id = $1
      ORDER BY send_date DESC;
    `;

    const result = await db.query(query, [loggedInUserId]);

    const messages = result.rows;

    // Pass the user variable to the template
    res.render("messages", { messages, user: req.session.user });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
