let piggy1 = document.querySelector("#pig1");
let piggy2 = document.querySelector("#pig2");
let piggy3 = document.querySelector("#pig3");
let wolf = document.querySelector("#wolf");
let scary = document.querySelector("audio#scary");

function ready(){
    console.log("Event: ready");
    console.log("Step: start sound once....");
	onceSoundDone()
}

function onceSoundDone(){
    console.log("Event: onceSoundDone");
    console.log("Step: stop wiggle");
	wolfHasEntered()
}

function wolfHasEntered(){
    console.log("Event: wolfHasEntered");
    console.log("Step: pigs run");
}

ready();
