const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/routes');

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/project')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', projectRoutes )

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log('server alive at port:- ',PORT)
})