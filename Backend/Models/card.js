import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    
    userID: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    cvc: {
        type: String,
        required: true,
    },
    exp: {
        type: String,
        required: true,
    },
    email: {
        type: Date,
        required: true,
    },
    address: {
        type: Date,
        required: true,
    }
});

export const Bus = mongoose.model('card', Card);