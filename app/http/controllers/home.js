const home = () => {
    return {
        index(req, res) {
            res.render('home')
        }
    }
}

module.exports = home;