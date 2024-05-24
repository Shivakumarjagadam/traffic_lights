function f1(value){
    if(value==="stop"){
        document.getElementById("red").style.backgroundColor="red";
        document.getElementById("yellow").style.backgroundColor="black";
        document.getElementById("green").style.backgroundColor="black";
    } 
    else if(value==="start"){
        document.getElementById("green").style.backgroundColor="green";
        document.getElementById("red").style.backgroundColor="black";
        document.getElementById("yellow").style.backgroundColor="black";
    }
    else if(value==="slow"){
        document.getElementById("green").style.backgroundColor="black";
        document.getElementById("red").style.backgroundColor="black";
        document.getElementById("yellow").style.backgroundColor="yellow";
    }
    else if(value==="reset"){
        document.getElementById("green").style.backgroundColor="black";
        document.getElementById("red").style.backgroundColor="black";
        document.getElementById("yellow").style.backgroundColor="black";
    }

}
