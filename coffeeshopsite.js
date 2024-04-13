const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const tagLinks = document.querySelectorAll('.tag');
const franchiseLink = document.querySelector('.franchise');
const cartIcon = document.querySelector('.fa-cart-shopping');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const coffeeBtn = document.getElementById('coffee-btn');
const login = document.getElementById('login');
const menuItems = [
    {item: "Coffee", price:"$2.50"},
    {item: "Muffin", price: "$3.50"},
    {item: "Breakfast sandwich", price:"$7.85"},
    {item: "Smoothie", price:"$5.75"},
]
const shoppingCart = [];

/*coffeeBtn.addEventListener("click", () => {
shoppingCart.push(menuItems[0])
console.log(shoppingCart);
});*/


login.addEventListener("click", () => {
    prompt("Please Enter Your Name using this format. First name last name separated by a space")
    console.log("alert test")
});

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
console.log("test")
    })
});