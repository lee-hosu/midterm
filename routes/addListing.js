const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Define a GET route to render the addListing page
router.get("/", (req, res) => {
  res.render("addListing", { user: req.session.user || null });
});

// Define a POST route to handle the form submission
router.post("/add-listing", async (req, res) => {
  try {
    // Extract data from the form submission
    const {
      title,
      price,
      category,
      "image-url": image_url,
      description,
    } = req.body;

    // Insert the new product listing into the database
    const insertQuery = `
  INSERT INTO products (title, price, category, images, description, status)
  VALUES ($1, $2, $3, $4, $5, 'Active')
`;

    await db.query(insertQuery, [
      title,
      price,
      category,
      image_url,
      description,
    ]);

    // Redirect to the index page after successfully adding the listing
    res.redirect("/");
  } catch (error) {
    console.error("Error adding listing:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
