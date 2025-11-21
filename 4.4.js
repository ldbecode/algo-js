const answer1 = document.querySelector("#answer1");

let names = [
  "thelichkinge",
  "ethan",
  "Hetaska",
  "Enrique2802",
  "Trollman341",
  "Kisame25021990",
  "Léandre Mpore-Ghozzo",
  "Abdoul",
  "Aucouturier Jason",
  "xam1712",
  "Dodo-31",
  "MattWare",
  "Thomas",
  "lalbecade",
  "Gaetan",
  "Dimitri Gillain",
  "TyberCusa",
  "Johan"
];

let nb = prompt("pick a number between 1 and " + (names.length-1))
let result = [];

while(isNaN(nb) || (nb > (names.length-1))){
    nb = prompt("please pick a number between 1 and " + (names.length-1))
}


function pickLearners(inputArray,n){
for (let index = 0; index < n; index++) {
    let x = rand(inputArray.length);
    result.push(inputArray[x]);
    inputArray.splice(x,1);
}
}



// formula simplified because min is always 0
function rand(max){
   
  return Math.floor(Math.random() * max); 

}

pickLearners(names,nb);


answer1.innerText = result;

alert(result);