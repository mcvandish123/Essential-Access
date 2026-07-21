/*let breakfastMenu = ["Pancake", "Bacon", "Spam"];
let mainCourseMenu = ["Steak", "Pasta", "Salad"];
let dessertMenu = ["Ice Cream", "Cake", "Pie"];

const breakfastMenuHTML = breakfastMenu.map((item, index) => {`<p>Item ${index + 1}: ${item}</p>`}).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHTML;

let mainCourseItem = ''; 
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseTotalItems').innerHTML = mainCourseItem;

for (let i = 0; i < dessertMenu.length; i++) {
  document.getElementById('dessertMenuItems').innerHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

function sendEmail(email) {
  console.log(`Welcome email sent to ${email}`)
};

const users = [
  {name: "Alice", email: "alice@gmail.com"},
  {name: "Bob", email:'bob@gmail.com'},
  {name: "Benjamin", email: 'benjamin@gmail.com'}
];

users.forEach((user) => {sendEmail(user.email)});

const people = [
  {person: "john", hobby: "skiing"},
  {person: "mark", hobby: "skating"},
  {person: "liz", hobby: "dancing"},
]

people.map((trait) => {
  console.log(`the person named ${trait.person} likes ${trait.hobby}`)
});
*/
const items = [
  {products: "bag", price: 50},
  {products: "watch", price: 100},
  {products: "shoes", price: 300},
  {products: "socks", price: 240}, 
  {products: "shirt", price: 120}
];

function checkPricing(items, minPrice, maxPrice) {
  return items.filter((item) => item.price >= minPrice &&
    item.price <= maxPrice
  );
}

const minPrice = 100;
const maxPrice = 200;

const measure = checkPricing(items, minPrice, maxPrice); 

measure.forEach((item) => {console.log(`This item, ${item.products}, is worth ${item.price}`)});

const orderValues = [40, 50, 100, 20, 30, 90];

const allPrice = orderValues.reduce((price, total) =>  price + total, 0);
console.log(`the total price is ${allPrice}`);

const information = [
  {id: 1, name: "benjamin", age: 18, yoe: 5},
  {id: 2, name: "Alice", age: 20, yoe: 1},
  {id: 3, name: "Joe", age: 20, yoe: 1},
];

const identify = information.find((e) => e.id === 1);

console.log(`details of the employee: ${identify.id} \n
  ${identify.name}\n ${identify.age}\n ${identify.yoe}`);