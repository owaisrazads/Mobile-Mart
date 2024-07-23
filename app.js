const div = document.querySelector(".htmldiv");
let img = document.createElement("img");
const checkBoxDiv = document.querySelector("#checkBox");

const phones = [
  {
    brand: "Samsung",
    model: "S20",
    image: "galaxy s20.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "75000",
  },
  {
    brand: "Xiomi",
    model: "note10",
    image: "xiaomi10.jpg",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: "35000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "infinix10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15999",
  },
  {
    brand: "Tecno",
    model: "spark10",
    image: "tecno spark 10.jpg",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: "32000",
  },
  {
    brand: "Iphone",
    model: "14",
    image: "iphone 14.webp",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: "380000",
  },
  {
    brand: "Oppo",
    model: "F11",
    image: "oppo f11.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "56000",
  },
  {
    brand: "Vivo",
    model: "y20",
    image: "vivo y20.png",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: "29000",
  },
  {
    brand: "Samsung",
    model: "S20",
    image: "galaxy s20.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "75000",
  },
  {
    brand: "Xiomi",
    model: "note10",
    image: "xiaomi10.jpg",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: "35000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "infinix10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15999",
  },
  {
    brand: "Tecno",
    model: "spark10",
    image: "tecno spark 10.jpg",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: "32000",
  },
  {
    brand: "Iphone",
    model: "14",
    image: "iphone 14.webp",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: "380000",
  },
  
  {
    brand: "Samsung",
    model: "S20",
    image: "galaxy s20.jpg",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: "75000",
  },
  {
    brand: "Xiomi",
    model: "note10",
    image: "xiaomi10.jpg",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: "35000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "infinix10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15999",
  },
  {
    brand: "Tecno",
    model: "spark10",
    image: "tecno spark 10.jpg",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: "32000",
  },
  {
    brand: "Iphone",
    model: "14",
    image: "iphone 14.webp",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: "380000",
  },
  {
    brand: "Infinix",
    model: "z10",
    image: "infinix10.jpg",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: "15999",
  },
];

for (let i = 0; i < phones.length; i++) {
  div.innerHTML += `<div class="maindiv"><img class = "main-img" src="./assets/${phones[i].image}" alt="">
  <h1>${phones[i].brand} ${phones[i].model}</br>
  Ram:${phones[i].ram} GB </br>
  Rom:${phones[i].rom} </br>
  Camera:${phones[i].camera} </br>
  <span class="price">Price: ${phones[i].price}/= pkr</span></h1>
  <button class = "add-btn" onclick="checkBox(${i})">Add To Cart</button></div>`;
}

const cartData = localStorage.getItem('cartArr')
const jsonData = JSON.parse(cartData)
let newArr;
if (Array.isArray(jsonData)) {
  newArr = [...jsonData];

}else{
  newArr = []
}

function checkBox(index) {
  if (newArr.includes(phones[index]) === true) {
    for (let i = 0; i < newArr.length; i++) {
      Swal.fire({
        title: "Do you want to add to cart?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add",
        denyButtonText: `Don't Add`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Added!", "", "success");
          if (newArr[i] === phones[index]) {
            newArr[i].quantity += 1;
            const items = JSON.stringify(newArr);
            localStorage.setItem('cartArr' , items);
            // console.log(newArr);
          }
        } else if (result.isDenied) {
          Swal.fire("Order are not Added", "", "info");
        }
      });
      
    }
  } else {
    Swal.fire({
      title: "Do you want to add to cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Add",
      denyButtonText: `Don't Add`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Added!", "", "success");
        phones[index].quantity = 1;
        newArr.push(phones[index]);
        console.log(newArr);
        const items = JSON.stringify(newArr);
        localStorage.setItem('cartArr' , items);
      } else if (result.isDenied) {
        Swal.fire("Order are not Added", "", "info");
      }
    });
  }
  

}

function goToCart() {
  window.location = 'cart.html'
}

