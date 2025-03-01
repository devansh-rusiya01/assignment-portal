const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
