
export default function handler(req, res) {
    const senderId = req.query['senderId'];

    console.log('senderId >>> ', senderId)

    res.status(200).json({message: senderId})
}