import databaseConfiguration from "../../../../server/config/mongodb/database-configuration";

import { create, getAll } from '../../../../server/services/applicationService'
import parseError from "../../../../server/util/parseError";
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
                const message = parseError(error);
                res.status(400).json({ message })
            }
        break;
        case 'GET':
            try {
                let applicants = await getAll();

                res.json({
                    status: res.statusCode,
                    applicantsData: applicants
                })
            } catch (error) {
                const message = parseError(error);
                res.status(400).json({ message })
            }
        break;
        default:
            res.status(403).json({
                status: res.statusCode,
                message: 'You are allowed to send only GET or POST requests to that API Route!'
            })
        break;
    }
}