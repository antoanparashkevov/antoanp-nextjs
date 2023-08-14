export default function handler(req, res) {

    // console.log('req >>> ', req)
    // console.log('res >>> ', res)

    if( req.method === 'POST' ) {

        //already parsed body
        console.log('req.body >>> ', req.body)

        const email = req.body.enteredEmail;
        const budget = req.body.enteredBudget;
        const message = req.body.enteredMessage;

        res.status(200).json({
                message: 'Success!',
                submittedData: {
                    email,
                    budget,
                    message
                }
        })
    } else {
        res.status(200).json({ message: 'API route works!'})
    }

}