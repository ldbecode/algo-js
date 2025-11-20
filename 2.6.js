const answer = document.querySelector("#answer1");
let nbr = Number(prompt("Give me a number between 1 and 7"));

    
while((1 > nbr) || (nbr > 7)){
    nbr = prompt("Between 1 and 7 please !");
    nbr = Number(nbr);
}

switch(nbr){
    case 1: answer.innerText = "monday";
    alert("monday");
    break;
    case 2: answer.innerText = "tuesday";
    alert("tuesday");
    break;
    case 3: answer.innerText = "wednesday";
    alert("wednesday");
    break;
    case 4: answer.innerText = "thursday";
    alert("thursday");
    break;
    case 5: answer.innerText = "friday";
    alert("friday");
    break;
    case 6: answer.innerText = "saturday";
    alert("saturday");
    break;
    case 7: answer.innerText = "sunday";
    alert("sunday");
    break;
}