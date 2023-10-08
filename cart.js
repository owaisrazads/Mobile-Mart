

// cart.js
const data = localStorage.getItem('cartArr');
const items = JSON.parse(data) || [];

function render() {
    let totalAmount = 0;
    const div = document.getElementById('itemsDiv');
    const totalAmounts = document.querySelector('.pera');
    
    div.innerHTML = ''; // Clear the previous content
    
    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            totalAmount += items[i].price * items[i].quantity;
            div.innerHTML += `
                <div class="maindiv">
                    <img src="./assets/${items[i].image}" alt="">
                    <h1>${items[i].brand} ${items[i].model}</h1>
                    <p>Quantity: ${items[i].quantity}</p>
                    <p>Price: ${items[i].price}/= pkr</p>
                </div>
            `;
        }
        totalAmounts.innerHTML = `Total Amount = ${totalAmount}/= pkr`;
    } else {
        div.innerHTML = 'No items in the cart.';
        totalAmounts.innerHTML = '';
    }
}

render();

function backToHome() {
    window.location = 'index.html';
}

function increaseQuantity(index) {
    items[index].quantity += 1;
    render();
}

function decreaseQuantity(index) {
    if (items[index].quantity > 1) {
        items[index].quantity -= 1;
    } else {
        items.splice(index, 1);
    }
    render();
}

// Save cart data to local storage when the page is unloaded
window.onbeforeunload = function() {
    localStorage.setItem('cartArr', JSON.stringify(items));
};
