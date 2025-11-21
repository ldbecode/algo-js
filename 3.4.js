let numToAdd1 = [5,2,3,4,1,38];


numToAdd1.sort((a, b) => a - b);


//sort the array and resturn the first element of the sorted array and the last (smallest and largest numbers)
console.log(numToAdd1[0],numToAdd1[numToAdd1.length-1]);