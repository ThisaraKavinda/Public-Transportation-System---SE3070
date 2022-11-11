import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const routeSchema = new Schema({
    
    number: {
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

export const Route = mongoose.model('route', routeSchema);