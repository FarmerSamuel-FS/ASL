const { Planet } = require("../models/index.js");
// Show all resources
const index = async (req, res) => {
  const planets = await Planet.findAll();
  // Respond with an array and 2xx status code
  res.status(200).json(planets);
};

// Show resource
// Show a single resource
const show = async (req, res) => {
  try {
    const planet = await Planet.findByPk(req.params.id);
    if (planet) {
      res.status(200).json(planet);
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; // Create a new resource

const create = async (req, res) => {
  try {
    const planet = await Planet.create(req.body);
    res.status(201).json(planet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const [updated] = await Planet.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedPlanet = await Planet.findByPk(req.params.id);
      res.status(200).json(updatedPlanet);
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ error: error.message });
  }
}; // Remove a single resource
// Remove an existing resource
const remove = async (req, res) => {
  try {
    const deleted = await Planet.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(400).json({ error: error.message });
  }
};

// Export all controller actions
module.exports = { index, show, create, update, remove };
