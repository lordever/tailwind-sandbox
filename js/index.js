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
            } else {
                this.products[productId] = currentCount - 1
            }
        }
    }

    renderProductTemplates() {
        let html = '';

        Object.entries(this.products).forEach(([productId, count]) => {
            const productData = PRODUCTS_LIST.find(p => p[productId]);
            if (!productData) return;

            const {name, price} = productData[productId];
            const priceNum = parseFloat(price);
            const totalPrice = (priceNum * count).toFixed(2);

            html += `
                <div class="flex flex-row justify-between gap-3 pb-4 border-b border-b-gray-200 items-center">
                    <div class="flex flex-col gap-2">
                        <h6 class="text-xs font-semibold">${name}</h6>
                        <p class="text-xs">
                            <strong class="text-orange mr-4">x${count}</strong>
                            <strong class="text-roseBeige mr-4 opacity-60">@ $${price}</strong>
                            <strong class="text-roseBeige mr-4">$${totalPrice}</strong>
                        </p>
                    </div>
                    <img  data-id="${productId}" src="./images/icon-remove-item.svg" alt="remove"
                         class="removeOrderItem cursor-pointer rounded-full p-0.5 border border-roseBeige
                         hover:invert hover:bg-black"/>
                </div>
            `;
        });

        return html;
    }

    getOrderTotalPrice() {
        let totalPrice = 0
        Object.entries(this.products).forEach(([productId, productCount]) => {
            const productData = PRODUCTS_LIST.find(p => p[productId]);
            if (productData) {
                const {price} = productData[productId];
                const productPrice = parseFloat(price)
                totalPrice += productPrice * productCount
            }
        })

        return totalPrice.toFixed(2);
    }
}

const order = new Order();

const cart = document.getElementById('cart');
const emptyCart = document.getElementById('emptyCart');
const cartCount = document.getElementById('cartCount');
const orderItemsContainer = document.getElementById('orderItemsContainer');
const orderTotalPrice = document.getElementById('orderTotalPrice');
const btns = document.querySelectorAll('.addBtn');

function showCart() {
    const count = order.getProductsCount();

    if (count > 0) {
        cart.classList.remove('hidden');
        cart.classList.add('flex');
        emptyCart.classList.add('hidden');
        emptyCart.classList.remove('flex');
    } else {
        cart.classList.add('hidden');
        cart.classList.remove('flex');
        emptyCart.classList.remove('hidden');
        emptyCart.classList.add('flex');
    }

    cartCount.innerHTML = count;
}

function addRemoveBtnHandlers() {
    orderItemsContainer.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.removeOrderItem');

        if (!clickedButton) return;

        const productItem = clickedButton.closest('.flex.flex-row');
        productItem?.remove();

        const productId = clickedButton.dataset.id;
        if (productId) {
            order.removeProduct(productId);
            orderItemsContainer.innerHTML = order.renderProductTemplates();
            orderTotalPrice.innerHTML = order.getOrderTotalPrice();
            showCart();
        }
    });
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const clickedButton = e.currentTarget;
        clickedButton.classList.add('active');

        order.addProduct(clickedButton.id);

        showCart();
        orderItemsContainer.innerHTML = order.renderProductTemplates();
        orderTotalPrice.innerHTML = order.getOrderTotalPrice();
    });
});

addRemoveBtnHandlers();
showCart();
