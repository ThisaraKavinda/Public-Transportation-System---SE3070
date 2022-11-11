import express, { Router } from 'express';

import { addSheduleStops, getAllStopsOfARoute, calculateFare } from '../controllers/sheduleStops.js';

const router = express.Router();

router.post('/add', addSheduleStops);
router.get('/getAllStopsOfARoute/:id', getAllStopsOfARoute);
router.get('/calculateFare/:id/:start/"destination', calculateFare);

export default router;