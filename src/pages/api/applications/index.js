import databaseConfiguration from "../../../../config/mongodb/database-configuration";

import Application from "../../../../models/Application";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * */


export default async function applications(req, res) {

    await databaseConfiguration();

    if( req.method === 'POST' ) {
        //already parsed body
        console.log('req.body >>> ', req.body)

        const { email, budget, message } = req.body;

        try {
            const item = await Application.create({
                email,
                budget,
                message
            })
            console.log('item that was created >>> ', item);
            res.status(200).json({
                message: 'Success!',
                submittedData: item
            })
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        //403 - forbidden
        res.status(403).json({ message: 'This API Route accepts only POST requests!'})
    }
}