import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const router = Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password, body: req.body });

    // Case-insensitive username check
    if (username?.toLowerCase() === 'willis' && password === 'willis'){
        const token = jwt.sign({ username: username.toLowerCase() }, JWT_SECRET, { expiresIn:'3h'});
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

export default router;