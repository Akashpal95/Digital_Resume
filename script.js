"use strict";
let navButtons = document.querySelectorAll("#nav-bar a");
var setIntervalID=0;
var counter=0;

for(let i=0;i<navButtons.length;i++){
    navButtons[i].addEventListener('click', function(event){
            event.preventDefault();
            // var setIntervalID = setInterval(myScroll, 2);
            var target = navButtons[i].innerText.trim().toLowerCase();
            if(target != 'home'){
                
                var targetElement = document.getElementById(target);
                var targetDistance = targetElement.getBoundingClientRect().top;
                console.log(targetDistance);
                setIntervalID = setInterval(myScroll, 1, targetDistance);
            }
    });
}
function myScroll(targetDistance) {
    counter+=20;
    window.scrollTo(0, counter);
    if(counter>targetDistance ){
        clearInterval(setIntervalID);
        counter=0;
    }
  }
  