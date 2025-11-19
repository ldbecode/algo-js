const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");

let list1 = "list 1 of even numbers using while :";
let list2 = "list 2 of even numbers using for :";
let i = 1;
let loopcount1 = 0;
let loopcount2 = 0;


while(i <=100){
    if(i%2 === 0){
        list1 += i +" ";
    }
    i+=1;
    loopcount1 += 1;
}

for(let j = 2; j <= 100; j+=2){
    list2 += j +" ";
    loopcount2 += 1;
}

list1 += "looped " + loopcount1 +" times"
list2 += "looped " + loopcount2 +" times"
answer1.innerText = list1;
answer2.innerText = list2;
console.log(list1);
console.log(list2);