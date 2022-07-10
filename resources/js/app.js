import axios from 'axios'

let addToCart = document.querySelectorAll('.add-to-cart');

const updateCart = (pizza) => {
    axios.post('/update-cart', pizza).then(res => {
        console.log(res);
    });
};


addToCart.forEach( (btn) => {
    btn.addEventListener('click', (ev) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        updateCart(pizza)
    });
});