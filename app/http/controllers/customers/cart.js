const cart = () => {
    return {
        index(req, res) {
            res.render('customers/cart')
        }
    }
}

module.exports = cart;