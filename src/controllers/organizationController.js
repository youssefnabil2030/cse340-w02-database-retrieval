const organizationModel = require("../models/organizationModel");

async function showOrganizations(req, res) {
  try {
    const organizations = await organizationModel.getAllOrganizations();
    res.render("pages/organizations", { organizations });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  showOrganizations,
};