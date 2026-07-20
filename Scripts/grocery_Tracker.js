let first;
let second;
let third;

function calculateAll() {
  first = parseFloat(document.getElementById("Grocery1").value);
  second = parseFloat(document.getElementById("Grocery2").value);
  third = parseFloat(document.getElementById("Grocery3").value);
  
  let grocery_total = first + second + third;

  document.getElementById("results").innerText = `The total amount is $ ${grocery_total}`;
}