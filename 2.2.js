const answer = document.querySelector("#answer1");

let min = +prompt("Enter Min");
let max = +prompt("Enter Max");
let current = +prompt("Enter Current");

if ((min < current) && (current < max)) {
    answer.innerText = "Correct, current is between min and max";
}
else if (min > max) {
    window.location.href = "loser.html";
}
else{
    answer.innerText = "wrong, current must be between min and max";
}
