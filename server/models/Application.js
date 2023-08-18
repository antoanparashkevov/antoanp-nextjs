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
        minLength: [20, 'The message must be at least 20 characters long!'],
        maxLength: [300, 'You exceeded the maximum length for your message!'],
        required: true
    }
});

const Application= models.Application || model('Application', applicationSchema);

export default Application;