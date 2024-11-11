var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i <numberofdrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  console.log(this);
  var buttoninnerhtml =this.innerHTML;
  this.style.color="white";
  switch (buttoninnerhtml) {
    case "w":
      const audioW = new Audio('sounds/tom-1.mp3');
      audioW.play();
      break;
    case "a":
      const audioA = new Audio('sounds/tom-2.mp3');
      audioA.play();
      break;
    case "s":
      const audioS = new Audio('sounds/tom-3.mp3');
      audioS.play();
      break;
    case "d":
      const audioD = new Audio('sounds/tom-4.mp3');
      audioD.play();
      break;
    case "j":
      const audioJ = new Audio('sounds/snare.mp3');
      audioJ.play();
      break;
    case "k":
      const audioK = new Audio('sounds/crash.mp3');
      audioK.play();
      break;
    case "l":
      const audioL = new Audio('sounds/kick-bass.mp3');
      audioL.play();
      break;
    default:
      console.log(buttoninnerhtml);
  }
})
}

