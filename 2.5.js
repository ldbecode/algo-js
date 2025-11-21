const answer = document.querySelector("#answer1");

let nbr = Number(prompt("What is favourite number"));

    
while(nbr != 42){
    nbr = Number(prompt("are you sure?"));
}

if (nbr === 42) {
    //answer.innerText = "correct";
    alert('correct');
}
// else {
//     answer.innerText = "you shouldn't see this";
// }