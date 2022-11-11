import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    
    number: {
        type: String,
        required: true,
    },
    routeId: {
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
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
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

export const Shedule = mongoose.model('shedule', ScheduleSchema);