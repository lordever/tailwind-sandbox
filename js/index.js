const PRODUCTS_LIST =
    [
        {product_1: {name: 'Waffle with Berries', price: '6.50'}},
        {product_2: {name: 'Vanilla Bean Crème Brûlée', price: '7.00'}},
        {product_3: {name: 'Macaron Mix of Five', price: '8.00'}},
        {product_4: {name: 'Classic Tiramisu', price: '5.50'}},
        {product_5: {name: 'Pistachio Baklava', price: '4.00'}},
        {product_6: {name: 'Lemon Meringue Pie', price: '5.00'}},
        {product_7: {name: 'Red Velvet Cake', price: '4.50'}},
        {product_8: {name: 'Salted Caramel Brownie', price: '4.50'}},
        {product_9: {name: 'Vanilla Panna Cotta', price: '6.50'}}
    ];

class Order {
    products = {}

    getProductsCount() {
        return Object.entries(this.products).length
    }

    addProduct(productId) {
        if (!this.products[productId]) {
            this.products[productId] = 1;
        } else {
            const currentCount = this.products[productId]
            this.products[productId] = currentCount + 1
        }
    }

    removeProduct(productId) {
        if (this.products[productId]) {
            const currentCount = this.products[productId]
            if (currentCount === 1) {
                delete this.products[productId]
            }
            this.products[productId] = currentCount - 1
        }
    }


}

const cart = document.getElementById('cart');
const emptyCart = document.getElementById('emptyCart');
const cartCount = document.getElementById('cartCount')
const order = new Order();

showCart()

function showCart() {
    const count = order.getProductsCount()

    if (count > 0) {
        cart.classList.remove("hidden")
        cart.classList.add("flex")
        emptyCart.classList.add("hidden")
        emptyCart.classList.remove("flex")
    } else {
        cart.classList.add("hidden")
        cart.classList.remove("flex")
        emptyCart.classList.remove("hidden")
        emptyCart.classList.add("flex")
    }

    cartCount.innerHTML = count;
}

const btns = document.querySelectorAll(".addBtn")

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        const clickedButton = e.currentTarget
        clickedButton.classList.add('active')

        order.addProduct(clickedButton.id)

        showCart()
    })
})