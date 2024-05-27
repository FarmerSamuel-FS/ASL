const { Star } = require("../models/index.js");

// Show all resources
const index = async (req, res) => {
  try {
    const stars = await Star.findAll();
    res.status(200).json(stars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show a single resource
const show = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const star = await Star.create(req.body);
    res.status(201).json(star);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const [updated] = await Star.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedGalaxy = await Star.findByPk(req.params.id);
      res.status(200).json(updatedStar);
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ error: error.message });
  }
};

// Remove an existing resource
const remove = async (req, res) => {
  try {
    const deleted = await Star.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Star not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(400).json({ error: error.message });
  }
};

// Export all controller actions
module.exports = { index, show, create, update, remove };
