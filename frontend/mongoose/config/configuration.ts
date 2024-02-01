import mongoose from 'mongoose';

const mongoDBClient = async() => {

    try {
        await mongoose.connect(process.env['DB_CONNECTION_URL']!)

        console.log('DB connection is established!')
    } catch( error ) {
        if( error instanceof Error ) {
            console.error(error.message);
            process.exit(1);//terminate the process
        }
        console.error('Something went wrong with DB connection!')
    }
}

export default mongoDBClient;