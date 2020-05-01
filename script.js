"use strict";
let navButtons = document.querySelectorAll("#nav-bar a");
var setIntervalID=0;
var counter=0;
var skillAnimationDone = false;
var skills = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills');
window.onscroll = checkScroll;
initialiseBars();
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
 
function checkScroll(){
    if(skillContainer.getBoundingClientRect().top < window.innerHeight && skillContainer.getBoundingClientRect().bottom > 0 && !skillAnimationDone){
        skillAnimationDone = true;
        fillBars();
    }
    else if(skillAnimationDone && skillContainer.getBoundingClientRect().bottom < 0){
        skillAnimationDone = false;
        initialiseBars();
        
    }
    else if(skillContainer.getBoundingClientRect().top > window.innerHeight && skillAnimationDone){
        skillAnimationDone = false;
        initialiseBars();  
    }

}  
function initialiseBars(){
    for(let i of skills){
        i.style.width="0%";
    }
}
function fillBars(){
    for(let i of skills){
        let targetWidth=i.getAttribute('skill-value');
        let currentWidth = 0;
        var intervalId = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(intervalId);
                return;
            }
            currentWidth++;
            i.style.width = currentWidth + "%";
        }, 10);
        
    }
}
