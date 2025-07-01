const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: false 
  },
});

module.exports = new mongoose.model('Project', projectSchema);