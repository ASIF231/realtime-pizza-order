const Menu = require('../../models/menu.js')

const home = () => {
    return {
        async index(req, res) {
            const pizzas = await Menu.find();
            return res.render('home', { pizzas: pizzas});
            // Menu.find().then( (pizzas) => {
            //     return res.render('home', { pizzas: pizzas});
            // });
        }
    }
}

module.exports = home;