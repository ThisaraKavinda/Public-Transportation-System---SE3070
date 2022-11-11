import {SheduleStops} from '../models/sheduleStops.js';

export const addSheduleStops = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const routeId = req.body.routeId;
    const name = req.body.name;
    const number = req.body.number;
    const fare = req.body.fare;
    const start = req.body.start;
    const destination = req.body.destination;
    const totalFare = req.body.totalFare;
    const nuOfStops = req.body.nuOfStops;

    let newBus = new SheduleStops({
        routeId, name, number, fare, start, destination, totalFare, nuOfStops
    })

    await newBus.save().then((res) =>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getAllStopsOfARoute = async (req, res) => {
    SheduleStops.find({routeId: req.params.id}).then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const calculateFare = async (req, res) => {
    const start = req.params.start;
    const destination = req.params.destination;
    const id = req.params.id;
    let startFare, endFare;
    await SheduleStops.find({routeId: req.params.id, name: start}).then((food)=>{
        startFare = food.fare
    }).catch(err => {
        console.error(err);
    })
    await SheduleStops.find({routeId: req.params.id, name: destination}).then((food)=>{
        endFare = food.fare
    }).catch(err => {
        console.error(err);
    })
    let fare = Number(endFare) - Number(startFare);
    res.json({success: true, fare: fare})
}
