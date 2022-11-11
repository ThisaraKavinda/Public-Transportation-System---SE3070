import express, { Router } from 'express';

import { 
    addRoute, getAllRoutes, getNumOfRoutes, getSelectedRoute, deleteRoute
} from '../controllers/route.js';

const router = express.Router();

router.post('/add', addRoute);
router.get('/getSelectedRoute/:id', getSelectedRoute);
router.get('/getNumOfRoutes', getNumOfRoutes);
// router.get('/getSelectedJourney/:id', getSelectedJourney);
router.get('/getAllRoutes', getAllRoutes);
router.get('/delete/:id', deleteRoute);

export default router;