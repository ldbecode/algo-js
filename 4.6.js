
let input = prompt("entrez un chiffre");

while(isNaN(input) || input > 9){
     input = prompt("entrez un chiffre");
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
alert("your result is : " + factorial(input));