import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const router = Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'willis' && password === 'willis'){
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn:'3h'});
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

export default router;