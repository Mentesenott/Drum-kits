//Detecting Button Press
var clickedObject = document.querySelectorAll(".drum").length;

for (var i=0; i< clickedObject; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  }); 

  //Detecting keyboard press
  addEventListener("keypress", function(Event) {
    makeSound(Event.key);
    buttonAnimation(Event.key);
})

function makeSound(key) {
    switch (key) {
        case "w" :
            var top1 = new Audio("sounds/tom-1.mp3");
            top1.play();
            break;
    
        case "a" :
            var top2 = new Audio("sounds/tom-2.mp3");
            top2.play();
            break;

        case "s" :
            var top3 = new Audio("sounds/tom-3.mp3");
            top3.play();
            break;

        case "d" :
            var top4 = new Audio("sounds/tom-4.mp3");
            top4.play();
            break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

}



