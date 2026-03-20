require("dotenv").config();

const express = require("express");
const app = express();

// Routes
const organizationRoutes = require("./routes/organizationRoutes");
const projectRoutes = require("./routes/projectRoutes");

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Static files (for images, CSS, etc.)
app.use(express.static("public"));

// Routes usage
app.use("/organizations", organizationRoutes);
app.use("/projects", projectRoutes);

// Home route
app.get("/", (req, res) => {
  res.redirect("/organizations");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});