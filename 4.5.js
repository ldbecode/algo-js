//number acquisition could be cleaner using spliting and trimming of inputs, but i believe this is easier and works decently well

let a = prompt("X coordinate of A");

while(isNaN(a)){
    a = prompt("X coordinate of A");
}

let b = prompt("Y coordinate of A");

while(isNaN(b)){
    b = prompt("Y coordinate of ");
}

let c = prompt("X coordinate of B");

while(isNaN(c)){
    c = prompt("X coordinate of B");
}

let d = prompt("Y coordinate of B");

while(isNaN(d)){
    d = prompt("Y coordinate of B");
}


let arrayA = [a,b];
let arrayB = [c,d];

function calcDist(a,b){
    let pointA = Math.abs(a[0] - b[0]);
    let pointB = Math.abs(a[1] - b[1]);
    
    return Math.sqrt(Math.pow(pointA,2) + Math.pow(pointB,2));

}


let result = calcDist(arrayA,arrayB);


alert (result);