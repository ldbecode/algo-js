let length = prompt("what is your length ?");

while(isNaN(length)){
    length = prompt("please enter a valid length ");
}

let width = prompt("what is your width ?");

while(isNaN(width)){
    width = prompt("please enter a valid width ");
}

// multiplies both sides together to get the surface oof the rectangle
function calcsurface(l,w){
    return l * w ;
}



alert("Your surface is : " + calcsurface(length,width));