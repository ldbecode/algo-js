

// gives a random integer between specified values, the max value is exclusive so we need to add 1 to enable 10 as a possible result
//we need to floor our value, this ensures we get an int
// math.random gives us a random number between 0 and 1, if we multiply this value by our max and substract our min, we get a value between those 2 numbers
//ex : number between 2 and 6 : random =0 * (6 - 2 +1) +2 = 2, our min is 2 so it's correct. since we can never get 1 from the random 
// (since it is exclusive) the max we can get from the answer is approx 6.999 wich gets floored to 6
function rand10(){
   
  return Math.floor(Math.random() * (10 - 0  + 1) + 0); // The maximum is inclusive and the minimum is inclusive

}



alert("Your number is : " + rand10());