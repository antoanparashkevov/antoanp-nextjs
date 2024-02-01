import { Schema, model, models } from 'mongoose';

const applicationSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    ticketCode: {
        type: String,
        required: true
    }
})

const ApplicationModel = models?.Application || model("Application", applicationSchema);

export default ApplicationModel;