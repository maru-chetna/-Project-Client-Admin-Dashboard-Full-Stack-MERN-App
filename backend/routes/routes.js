const express = require("express");
const router = express.Router();


const { addProject, getProjects } = require("../controllers/projectController");
const { addClient, getClients } = require("../controllers/clientController");
const { submitContact, getAllContacts } = require("../controllers/contactController");
const { subscribe, getSubscribers } = require("../controllers/newsletterController.js")


router.post("/project", addProject);
router.get("/project", getProjects);


router.post("/client", addClient);
router.get("/client", getClients);


router.post("/contact", submitContact);
router.get("/contact", getAllContacts);


router.post("/newsletter", subscribe)
router.get("/newsletter", getSubscribers)

module.exports = router;
