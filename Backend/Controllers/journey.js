import {Journey} from '../models/journey.js';

export const addJourney = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const userId = req.body.userId;
    const userName = req.body.userName;
    const start = req.body.start;
    const destination = req.body.destination;
    const date = new Date();
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const busNum = req.body.busNum;
    const busId = req.body.busId;
    const sheduleId = req.body.sheduleId;
    const routeId = req.body.routeId;
    const fare = req.body.fare;

    let newBus = new Journey({
        userId, userName, start, destination, date, startTime, endTime, busNum, busId, sheduleId, routeId, fare
    })

    await newBus.save().then((res) =>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getAllJouneys = async (req, res) => {
    Journey.find().then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getAllJouneysOfAUser = async (req, res) => {
    Journey.find({userId: req.params.id}).then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getNumOfJounerysOfAUser = async (req, res) => {
    Journey.find({userId: req.params.id}).then((food)=>{
        let response = {num: food.length}
        res.send(response)
    }).catch((err)=>{
        console.log(err);
    })
}

export const getSelectedJourney = async (req, res) => {
    const id = req.params.id;
    Journey.findById(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const deleteJourney = async (req, res) => {
    const id = req.params.id;
    await Journey.findByIdAndDelete(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })    
}

export const markDestination = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const {destination, endTime, fare}=req.body;

    const updateItem={
        destination, endTime, fare
    }
    await Journey.findByIdAndUpdate(id,updateItem).then ((res)=>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    }) 
}