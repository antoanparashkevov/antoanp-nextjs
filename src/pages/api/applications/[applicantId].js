import { getById } from '../../../../server/services/applicationService'
import parseError from "../../../../server/util/parseError";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns {Promise<void>}
 */

export default async function getApplicant(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const applicantId = req.query['applicantId'];
                let applicant = await getById(applicantId);

                res.json({
                    status: res.statusCode,
                    applicantData: applicant
                })
            } catch (error) {
                const message = parseError(error);
                res.status(400).json({ message })
            }
        break;
        default:
            res.status(403).json({
                status: res.statusCode,
                message: 'You are allowed to send only GET requests to that API Route!'
            })
        break;
    }
}