let numToAdd1 = [1,2,3,4,5];
let numToAdd2 = [100,101,102];
let sum1 = 0;
let sum2 = 0;


for(let elem of numToAdd1){
    sum1 += elem;
}
for(let elem of numToAdd2){
    sum2 += elem;
}

console.log(sum1/numToAdd1.length);
console.log(sum2/numToAdd2.length);