let wolf = document.querySelector("#wolf");
let pig = document.querySelector("#pig");
let house = document.querySelector("#house");
let openTheDoorSound = document.querySelector("#open-the-door");
let noGoSound = document.querySelector("#no-go");
let okThenSound = document.querySelector("#ok-then");
let puffSound = document.querySelector("#puff");

document.addEventListener("DOMContentLoaded", moveWolfIn);

function moveWolfIn(){
	console.log("moveWolfIn");
	console.log("move wolf");
	wolf.classList.add("enter");
	wolf.addEventListener("animationend", wolfSpeak);
}

function wolfSpeak(){
	console.log("wolfSpeak");
	console.log("pig wriggles");
	openTheDoorSound.play();
	pig.classList.add("shake");
	openTheDoorSound.addEventListener("ended", pigAnswers);
}

function pigAnswers(){
	noGoSound.play();
}
