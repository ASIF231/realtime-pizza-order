const session = require("express-session");

const cart = () => {
    return {
        index(req, res) {
            res.render('customers/cart');
        },
        update(req, res) {
            // let cart = {
            //     item: {
            //         pizzaID: { item: pizzaObject, qrty:1 },
            //     },
            //     totalQty: 0,
            //     totalPrice: 0,
            // }
            // First time creating cart add basic object structure
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0,
                }
            }
            console.log(req.body);
            let cart = req.session.cart;
            // check if item does exist in cart
            if(cart.items[req.body._id]) {

            }
            return res.json(cart);
        }
    }
}

module.exports = cart;