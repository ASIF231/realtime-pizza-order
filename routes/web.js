const home = require('../app/http/controllers/home.js')
const auth = require('../app/http/controllers/auth.js')
const cart = require('../app/http/controllers/customers/cart.js')


initRoutes = (app) => {
    
    app.get('/', home().index);
    
    app.get('/cart', cart().index);
    
    app.get('/login', auth().login);
    app.get('/register', auth().register);
}

module.exports = initRoutes;