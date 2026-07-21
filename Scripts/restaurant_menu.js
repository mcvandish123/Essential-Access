let breakfastMenu = ["Pancake", "Bacon", "Spam"];
let mainCourseMenu = ["Steak", "Pasta", "Salad"];
let dessertMenu = ["Ice Cream", "Cake", "Pie"];

const breakfastMenuHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHTML;

let mainCourseItem = ''; 
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseTotalItems').innerHTML = mainCourseItem;

for (let i = 0; i < dessertMenu.length; i++) {
  document.getElementById('dessertMenuItems').innerHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}