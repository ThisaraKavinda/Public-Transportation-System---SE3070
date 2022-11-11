import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const journeySchema = new Schema({
    
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
    },
    busNum: {
        type: String,
        required: true,
    },
    busId: {
        type: String,
        required: true,
    },
    sheduleId: {
        type: String,
        required: true,
    },
    routeId: {
        type: String,
        required: true,
    },
    fare: {
        type: String,
        required: true,
    }
});

export const Journey = mongoose.model('journey', journeySchema);