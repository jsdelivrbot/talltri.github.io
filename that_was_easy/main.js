function sayThatWasEasy(){
var thatWasEasy = new Audio("that_was_easy.mp3");
thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);
function delegateKeypress(event){
    if(event.charCode == 32){
        $("easy").trigger("click");
    }
}
function sayKidsCheering(){
var KidsCheering = new Audio("Kids_Cheering_Sound_Effect.mp3");
KidsCheering.play();
}
$("#kc").on("click", sayKidsCheering);
$(document).keypress(key);
function key(event){ 
    if(event.charCode == 33){
        $("kc").trigger("click");
    }
}