let wolf = document.querySelector("#wolf");
let pig = document.querySelector("#pig");
let house = document.querySelector("#house");
let openTheDoorSound = document.querySelector("#open-the-door");
let noGoSound = document.querySelector("#no-go");
let okThenSound = document.querySelector("#ok-then");
let puffSound = document.querySelector("#puff");

document.addEventListener("DOMContentLoaded", moveWolfIn);

function moveWolfIn() {
	console.log(wolf);
	wolf.classList.add('enter');
	wolf.addEventListener("animationend", openTheDoor);
}

function openTheDoor() {
	wolf.removeEventListener("animationend", openTheDoor);
	openTheDoorSound.addEventListener("ended", shakePig);
	openTheDoorSound.play();
}

function shakePig() {
	pig.classList.add("shake");
	noGoSound.play();
	noGoSound.addEventListener("ended", okThen);
}

function okThen() {
	pig.classList.remove("shake");
	okThenSound.play();
	okThenSound.addEventListener("ended", puff);
}

function puff() {
	wolf.style.backgroundImage = 'url("media/wolf_puff.gif")';
	house.classList.add("skew");
	pig.classList.add("shake");
	puffSound.play();
	puffSound.addEventListener("ended", afterPuff);
}

function afterPuff() {
	wolf.style.backgroundImage = 'url("media/wolf.gif")';
	pig.style.transition = "2s";
	//pig.style.opacity = 0;
}
