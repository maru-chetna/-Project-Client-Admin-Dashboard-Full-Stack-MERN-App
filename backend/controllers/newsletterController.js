const Newsletter = require("../models/newsLetter");


const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    
    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    res.status(201).json({ message: "Subscribed successfully", subscription });
  } catch (error) {
    res.status(500).json({ message: "Subscription failed", error });
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscribers", error });
  }
};

module.exports = { subscribe, getSubscribers }