const answer = document.querySelector("#answer1");
let nbr = Number(prompt("What is favourite number"));

    
while(nbr != 42){
    nbr = prompt("are you sure?");
    nbr = Number(nbr);
}

if (nbr === 42) {
    answer.innerText = "correct";
}
else {
    answer.innerText = "you shouldn't see this";
}