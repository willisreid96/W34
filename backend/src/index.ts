import express = require('express');
import cors = require('cors');
import mongoose = require('mongoose');

import { PORT, MONGODB_URI } from './config';
import authRoutes from './routes/auth.routes';
import chartRoutes from './routes/chart.routes';
import { ChartModel } from './models/chart.model';

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


async function seedIfEmpty() {
    const count = await ChartModel.countDocuments();
    if (count === 0) {
        console.log('Database is empty. Seeding initial data...');
        await ChartModel.create([
            {
                key: 'summary',
                title: 'Operational improvements with One Digital Grid Platform',
                labels: ['Outage penalties', 'Operator time', 'Crew resolution time'],
                data: [ 20, 65, 35],
                description: 'Estimated percentage improvements reported by Schneider Electric and a Forrester study: up to 20% fewer outage penalties, 65% time savings in the control room, and 35% faster field crew issue resolution.'
            },
            {   
                key: 'reports',
                title: 'Business impact from One Digital Grid deployment',
                labels: ['ROI (%)', 'Business benefits (M$)', 'Net gain (M$)', 'Payback (months)'],
                data: [184, 62, 40, 16],
                description: 'Modeled financial results from a Forrester Total Economic Impact study: 184% ROI, $62M in business benefits, $40M net gain, and a 16-month payback period for utilities adopting the platform.' 
            }
        ]);
        console.log('Initial data seeded successfully');
    }
}

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        await seedIfEmpty();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error: unknown) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });