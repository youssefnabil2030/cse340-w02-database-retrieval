const projectModel = require("../models/projectModel");

async function showProjects(req, res) {
  try {
    const projects = await projectModel.getAllProjects();
    res.render("pages/projects", { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  showProjects,
};