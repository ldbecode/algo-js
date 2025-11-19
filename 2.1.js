const answer = document.querySelector("#answer");

let age = +prompt("What is your age");

if (age < 18) {
    answer.innerText = "you are too young";
}
else {
    answer.innerText = "ok, you pass";
}
