const answer = document.querySelector("#answer1");
let nbr = Number(prompt("Give me a number (not too big))"));
let nbrToAdd = 0
let sum = 0;
let sumtext = "";

while (isNaN(nbr)) {
    nbr = prompt("please enter a valid number");
    nbr = Number(nbr);
}

for (let index = 0; index < nbr; index++) {

    nbrToAdd = prompt("give me another (" + (nbr - index) + " more)");
    nbrToAdd = Number(nbrToAdd);
    while (isNaN(nbrToAdd)) {
        nbrToAdd = prompt("please enter a valid number");
        nbrToAdd = Number(nbrToAdd);
    }

    sum += nbrToAdd;
    if (index < nbr - 1) {
        sumtext += nbrToAdd + " + ";
    }
    else {
        sumtext += nbrToAdd;
    }


}
alert("your sum is " + sumtext + " = " + sum);

answer.innerText = "your sum is " + sumtext + " = " + sum;
