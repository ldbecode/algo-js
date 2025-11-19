const answer = document.querySelector("#answer");

let list = "list of even numbers :";
let i = 0;

while(i <=100){
    if(i%2 === 0){
        console.log(i);
        list += i +" ";
    }
    i+=1;
}
answer.innerText = list;
console.log(list);