import mongoose from "mongoose";

const mongoDBClient = async () => {
    try {
        await mongoose.connect(process.env['DATABASE_CONNECTION'], {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database connected successfully!')
    } catch (error) {
        console.log('There is an error from MongoDB client!')
        console.error(error)
        process.exit(1)
    }
}
export default mongoDBClient;