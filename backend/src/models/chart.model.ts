import mongoose, { Document, Schema } from 'mongoose';

export interface IChart extends Document {
    key: 'summary' |'reports';
    title: string;
    labels: string[];
    data: number[];
    description: string;
}

const ChartSchema: Schema = new Schema<IChart>({
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    labels: { type: [String], required: true },
    data: { type: [Number], required: true },
    description: { type: String, required: true }
});

export const ChartModel = mongoose.model<IChart>('Chart', ChartSchema);