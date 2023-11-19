import { Schema, model, models } from 'mongoose';

const applicationSchema = new Schema({
    email: {
       type: String,
       required: true,
    },
    budget: {
        type: Number,
        min: [0, 'Your budget must be non-negative number!'],
        required: true
    },
    message: {
        type: String,
    },
    e: {
        type: Boolean,
        required: true
    }
});

const Application= models.Application || model('Application', applicationSchema);

export default Application;