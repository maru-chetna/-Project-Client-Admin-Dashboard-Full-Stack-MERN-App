const Contact = require("../models/contact");

const submitContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully", contact: newContact });
  } catch (error) {
    res.status(500).json({ message: "Error submitting contact form", error });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact form data", error });
  }
};

module.exports = { submitContact, getAllContacts }