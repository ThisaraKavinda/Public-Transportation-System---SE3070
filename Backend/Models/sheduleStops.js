import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stopsSchema = new Schema({
    
    routeId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    fare: {
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
    totalFare: {
        type: String,
        required: true,
    },
    nuOfStops: {
        type: String,
        required: true,
    },
});

export const SheduleStops = mongoose.model('sheduleStops', stopsSchema);