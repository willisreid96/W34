import express = require('express');
import cors = require('cors');
import mongoose = require('mongoose');

import { PORT, MONGODB_URI } from './config';
import authRoutes from './routes/auth.routes';
import chartRoutes from './routes/chart.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get ('/api/health', (_req, res) => {
    res.json ({ status: 'OK' });
});

app.use('/api/auth', authRoutes);
app.use('/api/charts', chartRoutes);


mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error: unknown) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });