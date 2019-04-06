module.exports = {
    getAll: ( req, res ) => {
        const db = req.app.get('db')
        // res.send('Whaaat uppp')
        db.get_all_houses().then(resp => {
            console.log(resp)
            res.status(200).send(resp);
        })
    }
}