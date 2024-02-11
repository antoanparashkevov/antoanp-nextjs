import UserModel from "../models/User";
import bcrypt from 'bcrypt';

export type userItem = {
	email: string;
	password: string;
};

export async function register(
	email: userItem["email"],
	password: userItem["password"]
) {
	const isExisting = await UserModel.findOne({ email }).collation({
		locale: "en",
		strength: 2
	});

	if (isExisting) {
		throw new Error("Email is taken");
	}
	const hashedPassword = await bcrypt.hash(password, 10); //we save only the hashed password to the Database

	await UserModel.create({
		email,
		hashedPassword,
	});

	return {
		message: "Passed"
	}
}

export async function login(
	email: userItem["email"],
	password: userItem["password"]
) {
	const user = await UserModel.findOne({ email }).collation({
		locale: "en",
		strength: 2
	});

	if (!user) {
		throw new Error("Incorrect email or password");
	}

	//it will return true of false
	const matchPassword = await bcrypt.compare(password, user["hashedPassword"]);

	if (!matchPassword) {
		throw new Error("Incorrect email or password");
	}

    return {
        message: "Passed"
    }
}

