import {Bus} from '../models/bus.js';

export const addBus = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const number = req.body.number;
    const revenueNum = req.body.revenueNum;
    const routeId = req.body.routeId;
    const routeNumber = req.body.routeNumber;
    const start = req.body.start;
    const destination = req.body.destination;
    const driver = req.body.driver;
    const addedDate = new Date();

    let newBus = new Bus({
        number, revenueNum, routeId, routeNumber, start, destination, driver, addedDate
    })

    newFood = await newBus.save().then((res) =>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getAllBusses = async (req, res) => {
    Bus.find().then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getNumOfBusses = async (req, res) => {
    Bus.find().then((food)=>{
        let response = {num: food.length}
        res.send(response)
    }).catch((err)=>{
        console.log(err);
    })
}

export const getSelectedBus = async (req, res) => {
    const id = req.params.id;
    Food.findById(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const deleteBus = async (req, res) => {
    const id = req.params.id;
    await Bus.findByIdAndDelete(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })    
}

export const editBus = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const {routeId, routeNumber, start, destination, driver}=req.body;

    const updateItem={
        routeId, routeNumber, start, destination, driver
    }
    const update = await Bus.findByIdAndUpdate(id,updateItem).then ((res)=>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    }) 
    console.log(update);
}