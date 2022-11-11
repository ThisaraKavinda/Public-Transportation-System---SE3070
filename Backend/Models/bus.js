import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusSchema = new Schema({
    
    number: {
        type: String,
        required: true,
    },
    revenueNum: {
        type: String,
        required: true,
    },
    routeId: {
        type: String,
        required: true,
    },
    routeNumber: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true,
    }
});

export const Bus = mongoose.model('bus', BusSchema);