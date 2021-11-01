for (var i=0 ;i<=6 ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var innertext = this.innerHTML;
        console.log(innertext);

        drumSounds(innertext);
        keyanimation(innertext)
    });
}   
addEventListener("keypress", function(event){
   let innertext = event.key
   drumSounds(innertext)
   keyanimation(innertext)
})

function drumSounds(innertext) {
 if(innertext == "w"){
    var tom1 = new Audio('sounds/tom-1.mp3')
    tom1.play()
}
 else if(innertext == "a"){
    var tom2 = new Audio('sounds/tom-2.mp3')
    tom2.play()
}
else if(innertext == "s"){
    var tom3 = new Audio('sounds/tom-2.mp3')
    tom3.play()
}
else if(innertext == "d"){
    var tom4 = new Audio('sounds/tom-2.mp3')
    tom4.play()
}
else if(innertext == "j"){
    var snare = new Audio('sounds/snare.mp3')
    snare.play()
}
else if(innertext == "k"){
    var crash = new Audio('sounds/crash.mp3')
    crash.play()
}
else if(innertext == "l"){
    var kick = new Audio('sounds/kick-bass.mp3')
    kick.play()
}
}

function keyanimation(currentkey){
var activeButton =document.querySelector('.'+ currentkey) ;
activeButton.classList.add('pressed');

setTimeout(function() {
    activeButton.classList.remove('pressed'); 
}, 100);
}
