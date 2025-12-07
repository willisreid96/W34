import mongoose from "mongoose";
import { MONGODB_URI } from "../config";
import { ChartModel } from "../models/chart.model";
import { error } from "console";


async function run() {
    await mongoose.connect(MONGODB_URI);

    // Check if data already exists before seeding
    const count = await ChartModel.countDocuments();
    if (count > 0) {
        console.log('Charts already exist. Skipping seed.');
        await mongoose.disconnect();
        return;
    }

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
    console.log('Charts seeded successfully');
    await mongoose.disconnect();
}

run().catch(error => {
    console.error('Error seeding charts:', error);
    process.exit(1);
});