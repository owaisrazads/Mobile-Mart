const data = localStorage.getItem('cartArr');
const items = JSON.parse(data);
console.log(items);

function backToHome() {
    window.location = 'index.html'
    localStorage.setItem('cartArr' , JSON.stringify(items))
}

const div = document.querySelector('#itemsDiv')
const totalAmounts = document.querySelector('.pera')


function render() {
    let totalAmount = 0;
    totalAmounts.innerHTML = "";
    if(items.length > 0){
        for (let i = 0; i < items.length; i++) {
            totalAmount += items[i].price * items[i].quantity
            div.innerHTML += `<div class="maindiv"><img class = "main-img" src="./assets/${items[i].image}" alt="">
            <h1>${items[i].brand} ${items[i].model}</br>
            Quantity:<button class = "operator add-btn" onclick = "sumValue(${i})">-</button>${items[i].quantity}<button class = "operator add-btn" onclick="addValue(${i})">+</button></br>
            <span class="price">Price: ${items[i].price}/= pkr</span></br>
            </h1>
            </div>`;
            totalAmounts.innerHTML = `Total Amount = ${totalAmount}/=`
        }
    } else{
        div.innerHTML = `No Item Found ...`
    }
    
}

render()




function addValue(index) {
    div.innerHTML = "";
    items[index].quantity += 1;
    
    render()
}

function sumValue(index) {
    div.innerHTML = "";
    items[index].quantity -= 1;
    
    render()
    if (items[index].quantity === 0){
        div.innerHTML = "";
        items.splice(index , 1)
        render();
    }
    
    
}

// function totalprice() {
//     para.innerHTML = ""
//     let totalprice = 0
//     for(i = 0; i < items.length; i++){
//         // const itemtotal = items[i].totalprice
//         totalprice += items[i].totalprice
        
//     }
//     para.innerHTML= `<p>total price: ${totalprice}</p>`

// }

window.onbeforeunload = function() {
    localStorage.setItem('cartArr' , JSON.stringify(items));
};