const product = [
  {
    id: 1,
    image: "images/headphones.jpg",
    title: "Headphones",
    price: "₹59900",
  },
  {
    id: 2,
    image: "images/airpods.jpg",
    title: "AirPods",
    price: "₹32999",
  },
  {
    id: 3,
    image: "images/pc.jpg",
    title: "Monitor",
    price: "₹26999",
  },
  {
    id: 4,
    image: "images/shoes.jpg",
    title: "Nike Shoes",
    price: "₹15999",
  },
  {
    id: 5,
    image: "images/smart.jpg",
    title: "Smart Watch",
    price: "₹14950",
  },
  {
    id: 6,
    image: "images/speaker.jpg",
    title: "Speakers",
    price: "₹2999",
  },
  {
    id: 7,
    image: "images/watch.jpg",
    title: "Apple Watch",
    price: "₹35990",
  },
  {
    id: 8,
    image: "images/iphone.jpg",
    title: "iPhone 13",
    price: "₹65990",
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `<div class ="box">
            <div class = "img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to Cart</button>
            </div>
        </div>`;
  })
  .join("");
