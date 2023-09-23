const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Your existing route for rendering the index page
router.get("/", async (req, res) => {
  try {
    // Query the database to fetch all product listings
    const query = `
      SELECT * FROM products
      WHERE status = 'Active'
    `;

    const result = await db.query(query);
    const products = result.rows;

    // Render the index page with the product listings
    res.render("index", { products, user: req.session.user || null });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
