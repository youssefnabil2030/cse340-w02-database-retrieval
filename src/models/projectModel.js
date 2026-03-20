const db = require("./db");

async function getAllProjects() {
  const result = await db.query(`
    SELECT 
      p.project_id,
      p.name,
      p.description,
      o.name AS organization_name,
      c.name AS category_name
    FROM project p
    JOIN organization o ON p.organization_id = o.organization_id
    JOIN category c ON p.category_id = c.category_id
  `);

  return result.rows;
}

module.exports = {
  getAllProjects,
};