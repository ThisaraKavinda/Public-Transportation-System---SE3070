import {Route} from '../models/route.js';

export const addRoute = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const number = req.body.number;
    const start = req.body.start;
    const destination = req.body.destination;
    const totalFare = req.body.totalFare;
    const nuOfStops = req.body.nuOfStops;

    let newBus = new Route({
        number, totalFare, nuOfStops, start, destination,
    })

    await newBus.save().then((res) =>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getAllRoutes = async (req, res) => {
    Route.find().then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const getNumOfRoutes = async (req, res) => {
    Route.find().then((food)=>{
        let response = {num: food.length}
        res.send(response)
    }).catch((err)=>{
        console.log(err);
    })
}

export const getSelectedRoute = async (req, res) => {
    const id = req.params.id;
    Route.findById(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

export const deleteRoute = async (req, res) => {
    const id = req.params.id;
    await Route.findByIdAndDelete(id).then((food)=>{
        res.json({success: true, item: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })    
}

// export const editRoute = async (req, res) => {
//     const id = req.params.id;
//     console.log(req.body);
//     const {routeId, routeNumber, start, destination, driver}=req.body;

//     const updateItem={
//         routeId, routeNumber, start, destination, driver
//     }
//     const update = await Bus.findByIdAndUpdate(id,updateItem).then ((res)=>{
//         res.json({success: true, item: res});
//     }).catch(err => {
//         console.error(err);
//         res.json({success: false, error: err});
//     }) 
//     console.log(update);
// }