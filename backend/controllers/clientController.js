const Client = require("../models/client");

const addClient = async (req, res) => {
  try {
    const { name, description, designation, imageUrl } = req.body;

    const newClient = new Client({ name, description, designation, imageUrl });
    await newClient.save();

    res.status(201).json({ message: "Client added successfully", client: newClient });
  } catch (error) {
    res.status(500).json({ message: "Error adding client", error });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients", error });
  }
};

module.exports = { addClient, getClients }
