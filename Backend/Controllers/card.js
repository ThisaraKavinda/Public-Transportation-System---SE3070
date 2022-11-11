import {Card} from '../models/card.js';

export const addCard = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    const userId = req.body.userId;
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const cardNumber = req.body.cardNumber;
    const cvc = req.body.cvc;
    const exp = req.body.exp;
    const email = req.body.email;
    const address = req.body.address;

    let newBus = new Card({
        userId, userName, firstName, lastName, cardNumber, cvc, exp, email, address
    })

    await newBus.save().then((res) =>{
        res.json({success: true, item: res});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}

// export const getAllJouneys = async (req, res) => {
//     Journey.find().then((food)=>{
//         res.json({success: true, items: food});
//     }).catch(err => {
//         console.error(err);
//         res.json({success: false, error: err});
//     })
// }

export const getAllCardsOfAUser = async (req, res) => {
    Card.find({userId: req.params.id}).then((food)=>{
        res.json({success: true, items: food});
    }).catch(err => {
        console.error(err);
        res.json({success: false, error: err});
    })
}