import { Router, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };

  // Simple hard-coded login for the project
  if (username === 'willis' && password === 'willis') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '5d' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid username or password' });
});

export default router;