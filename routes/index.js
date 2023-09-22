const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Your existing route for rendering the index page
router.get("/", async (req, res) => {
  try {
    // Query the database to fetch the list of products
    const query = `
      SELECT * FROM products
      WHERE status = 'Active'
    `;

    const result = await db.query(query);
    const products = result.rows;

    // Initialize the user object
    const user = req.session.user || null;

    res.render("index", {
      products,
      user, // Pass the user object
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
