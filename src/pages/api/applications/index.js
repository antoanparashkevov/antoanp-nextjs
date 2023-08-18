import databaseConfiguration from "../../../../server/config/mongodb/database-configuration";

import { create } from '../../../../server/services/applicationService'
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns {Promise<void>}
 * */


export default async function applications(req, res) {

    await databaseConfiguration();

    switch (req.method) {
        case 'POST':
            try {
                //already parsed body
                console.log('req.body >>> ', req.body)

                const { email, budget, message } = req.body;

                const item = await create({
                    email,
                    budget,
                    message
                })

                console.log('item that was created >>> ', item)

                res.json({
                    status: res.statusCode,
                    submittedData: item
                })
            } catch (error) {
                console.log('error >>> ', error)
            }
        break;
        default:
            res.status(403).json({
                status: res.statusCode,
                message: 'You are allowed to send only POST requests to that API Route!'
            })
        break;
    }
}