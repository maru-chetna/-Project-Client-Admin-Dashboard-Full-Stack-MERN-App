const Project = require("../models/project.js");

// Add a new project
exports.addProject = async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;

    const newProject = new Project({ name, description, imageUrl });
    await newProject.save();

    res.status(201).json({ message: "Project added successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Error adding project", error });
  }
};

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};
