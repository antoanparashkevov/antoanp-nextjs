import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: true
    }
});

userSchema.index(
	{ email: 1 } /*asc order*/,
	{
		collation: {
			locale: "en", //english letters only
			strength: 2 //case insensitive
		}
	}
);

const userModel = models?.User || model('User', userSchema);

export default userModel;