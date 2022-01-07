
function buttonPressed(caseLetter){
  var buttonActive = document.querySelector("." + caseLetter);
  console.log(buttonActive);
  buttonActive.classList.add("pressed");
  setTimeout(function (){
    
    buttonActive.classList.remove("pressed")},150)
}

function playAudio(eventKey){
   switch (eventKey){     
       //eventKey will correspond to e.key, which the addEventListener function relates e to the event (KeyboardEvent with several properties, of which .key will show the letter of the key pressed.)
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        buttonPressed(eventKey);
        crash.play();
        
      break;
        
      case "a":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        buttonPressed(eventKey);
        kickbass.play();
      break;
        
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        buttonPressed(eventKey);
        snare.play();
      break;
          
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        buttonPressed(eventKey);
        tom1.play();
      break;
          
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        buttonPressed(eventKey);
        tom2.play();
      break;
          
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        buttonPressed(eventKey);
        tom3.play();
      break;
          
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        buttonPressed(eventKey);
        tom4.play();
      break;
        
      default: console.log(eventKey + " does not have a binded audio file. Press W, A, S, D, J, K, L or click the buttons.");
   }
}



document.addEventListener("keydown",function (e){
  playAudio(e.key);
  })

for (var n = 0; n < document.querySelectorAll(".drum").length; n++) {
  
  document.querySelectorAll("button")[n].addEventListener("click", function () {
  
  playAudio(this.textContent);
    
 
  }
  )
  document.querySelectorAll("button")[n].addEventListener("mouseover",function (){
    this.style.cursor="pointer";
    
  })
  
}
