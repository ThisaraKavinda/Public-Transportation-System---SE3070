import express, { Router } from 'express';

import { addCard, getAllCardsOfAUser } from '../controllers/card.js';

const router = express.Router();

router.post('/add', addCard);
router.get('/getAllCardsOfAUser/:id', getAllCardsOfAUser);

export default router;