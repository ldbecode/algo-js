const answer = document.querySelector("#answer1");
let age;
do{
    age = prompt("What is your age");
    age = Number(age);
}while(isNaN(age) || age == "");

if (age < 18) {
    answer.innerText = "you are too young";
}
else {
    answer.innerText = "ok, you pass";
}
