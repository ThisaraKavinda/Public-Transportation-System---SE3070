import express, { Router } from 'express';

import { 
    addJourney, getAllJouneys, getAllJouneysOfAUser, getNumOfJounerysOfAUser, getSelectedJourney, deleteJourney, markDestination 
} from '../controllers/journey.js';

const router = express.Router();

router.post('/add', addJourney);
router.get('/getAllJouneysOfAUser/:id', getAllJouneysOfAUser);
router.get('/getNumOfJounerysOfAUser/:id', getNumOfJounerysOfAUser);
router.get('/getSelectedJourney/:id', getSelectedJourney);
router.get('/getAllJouneys', getAllJouneys);
router.get('/delete/:id', deleteJourney);
router.get('/markDestination/:id', markDestination);

export default router;