//jshint esversion:6

const drumButtons = $('.drum');
const numberOfDrumButtons = drumButtons.length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  drumButtons.eq(i).on("click", (event) => {
    let buttonInnerHTML = this.event.target.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

$(document).keydown((event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case key = 'w':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case key = 'a':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case key = 's':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case key = 'd':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case key = 'j':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case key = 'k':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case key = 'l':
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {
  let activeButton = $(`.${currentKey}`);

  activeButton.addClass('pressed');
  activeButton.css("color", "#fff");

  setTimeout(function() {
    activeButton.removeClass("pressed");
    activeButton.css("color", "#DA0463");
  }, 150);
}
