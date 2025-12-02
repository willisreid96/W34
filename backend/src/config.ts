import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SchneiderElectric';