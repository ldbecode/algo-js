const answer1 = document.querySelector("#answer1");


let list1 = "list of even numbers divided by 2 and odd numbers multiplied by 3 using while :";
let i = 1;
let loopcount1 = 0;
let loopcount2 = 0;


while(i <=100){
    if(i%2 === 0){
        list1 += i/2 +" ";
    }
    else{
        list1 += i*3 +" ";
    }
    i+=1;
    loopcount1 += 1;
}

/* for(let j = 2; j <= 100; j+=2){
    list2 += j +" ";
    loopcount2 += 1;
} */

list1 += "looped " + loopcount1 +" times"
answer1.innerText = list1;
console.log(list1);