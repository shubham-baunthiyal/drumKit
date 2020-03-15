var keys = document.querySelectorAll(".drum");
var len = keys.length;

for(var i=0;i<len;i++){
  keys[i].addEventListener("click", function (e){
    letsPlay(this.innerHTML);
    /*
    var aud = document.createElement("audio");
    aud.setAttribute("src","sounds/crash.mp3")
    aud.play();
    */
  });
}

document.addEventListener('keydown', function (e) {
  letsPlay(e.key);
}

);

function letsPlay(index){
  var audioFile;
  switch(index){
    case 'w': audioFile = "sounds/tom-1.mp3";
    addAnimation(index);
    break;
    case 'a': audioFile = "sounds/tom-2.mp3";
    addAnimation(index);
    break;
    case 's': audioFile = "sounds/tom-3.mp3";
    addAnimation(index);
    break;
    case 'd': audioFile = "sounds/tom-4.mp3";
    addAnimation(index);
    break;
    case 'j': audioFile = "sounds/snare.mp3";
    addAnimation(index);
    break;
    case 'k': audioFile = "sounds/crash.mp3";
    addAnimation(index);
    break;
    case 'l': audioFile = "sounds/kick-bass.mp3";
    addAnimation(index);
    break;
    default: console.log("Wrong press: "+index);
  }
  var aud = new Audio(audioFile);
  aud.play();
}

function addAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 250);
}
