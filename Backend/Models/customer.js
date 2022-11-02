import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    homeCountry: {
        type: String,
    },
    nic: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
    },
    durationStart: {
        type: String,
    },
    durationEnd: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: String,
        required: true,
    },
    joinedDate: {
        type: String,
        required: true,
    }
});

export const Customer = mongoose.model('customers', CustomerSchema);