// Lesson 38-39 OnClick Event

window.onload = function(){


    var content = document.getElementById('content');
    var button = document.getElementById('show-more');


button.onclick = function(){
    if(content.className== 'open'){
        //shrink
        content.className = "";
        button.innerHTML = 'Show more';
    } else {  
        content.className = "open";
        button.innerHTML = 'Show less'
        //expand the box 
    }


};


};

var content = document.getElementById('content');
var content = document.getElementById('content');



//Lesson 41

var hiddenMessage = document.
getElementById('message');

function showMessage(){
  hiddenMessage.className = 'show'
}

setTimeout(showMessage, 2000)

var changeColor = document.getElementById('colorChanger');
var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'violet', 'pink']

var counter = 0;

function rainbowChange(){

    if(counter >= colors.length){
        counter = 0;
    }
    changeColor.style.background = colors[counter]; counter++;

};

var timer = setInterval(rainbowChange, 3000)

changeColor.onclick = function(){
    clearInterval(timer);
    changeColor.innerHTML = "timer stopped";
}