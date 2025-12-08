import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { ChartModel } from "../models/chart.model";

const router = Router();

// Get all charts (protected route)

router.get('/summary', authMiddleware, async (req, res) => {
    const chart = await ChartModel.findOne({ key: 'summary' }).lean();
    if (!chart)
        return res.status(404).json({ message: 'Summary chart not found' });
    res.json(chart);
    
});

router.get('/reports', authMiddleware, async (req, res) => {
    const chart = await ChartModel.findOne({ key: 'reports' }).lean();
    if (!chart)
        return res.status(404).json({ message: 'Reports chart not found' });
    res.json(chart);
});

export default router;