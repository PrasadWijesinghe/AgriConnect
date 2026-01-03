import express from "express";
import { registerUser, loginUser } from '../controllers/authControllers.js';
import { verifyToken } from '../middleware/auth.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, (req, res) => {
  // Only accessible with valid token
  res.json({ user: req.user });
});

export default router;