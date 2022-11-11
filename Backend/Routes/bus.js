import express, { Router } from 'express';

import { addBus, getAllBusses, getNumOfBusses, getSelectedBus, deleteBus, editBus } from '../controllers/bus.js';

const router = express.Router();

router.post('/add', addBus);
router.get('/getSelectedBus/:id', getSelectedBus);
router.get('/getAllBusses', getAllBusses);
router.get('/delete/:id', deleteBus);
router.get('/getNumOfBusses', getNumOfBusses);
router.post('/edit/:id',  editBus);

export default router;