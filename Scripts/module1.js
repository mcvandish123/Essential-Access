// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


function show() {
// Block scope
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";

  //Block Scope
  console.log(blockVar);
  console.log(blockLet);

}

show();

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
