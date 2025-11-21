let numToAdd1 = [1,2,3,4,5];
let newArr = [];


for (let index = 0; index < numToAdd1.length; index++) {
    newArr.push(numToAdd1[index]);  
}

// other way using for ... or loop
// for(let elem of numToAdd1){
//     newArr.push(elem);
// }


// or we can just copy it like this 
// newArr = numToAdd1;

// or like this
//newArr = numToAdd1.slice()

console.log(newArr);