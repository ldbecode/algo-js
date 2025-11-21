let results = [];
let nb = prompt("how many numbers do you want ?");

while(isNaN(nb)){
    nb = prompt("please enter a valid number");
}

// runs the rand10 function n times and adds results to an array
function multiRand10(n){
for (let index = 0; index < n; index++) {
    results.push(rand10());
}
}

// we can also do it recursively like this (there probably is a better way to do it but this works)
// function multiRand10(n){
// if (0 < n) {
//     results.push(rand10());
//     multiRand10(n-1)
// }
// }


function rand10(){
   
  return Math.floor(Math.random() * (10 - 0  + 1) + 0); // The maximum is inclusive and the minimum is inclusive

}

multiRand10(nb);

alert("here is your list : " + results);