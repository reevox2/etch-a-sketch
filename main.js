let xDivs = 1;
let yDivs = 1;
let howManyDivs = xDivs * yDivs
let newDiv = document.createElement('div');
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${xDivs}, 1fr)`;
container.style.gridTemplateRows = `repeat(${yDivs}, 1fr)`;

custom = document.querySelector('.custom');
function getGridSize(){
	xDivs = prompt('How many divs on the x axis?');
	yDivs = prompt('How many divs on the y axis?');
}
function calculateDivs(xdivs, ydivs){
	return result = xdivs * ydivs 
}
function customizeGrid(){
	getGridSize();
	howManyDivs = calculateDivs(xDivs, yDivs);
	container.style.gridTemplateColumns = `repeat(${xDivs}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${yDivs}, 1fr)`;
	resetGrid();
	addDivs();
}
function getGrids(){
	totalDivs = Array.from(document.querySelectorAll('.container div'));
}

function getDivColors() {
	let allDivs = document.querySelectorAll('.container div');
	allDivs.forEach((div) => {
		console.log(!(div.style.backgroundColor));
		if(div.style.backgroundColor){
			console.log(div.style.backgroundColor);
		}
	});
}
function resetGrid(){
	getGrids();
	for(let i = 0, length1 = totalDivs.length; i < length1; i++){
		container.removeChild(totalDivs[i]);
	}
}

custom.addEventListener('click', customizeGrid);

function changeBackgroundColor(e) {
	let divsColor = e.target.style.backgroundColor
	//if the div doesnt have a color yet, set it
	if(!(divsColor)){
		e.target.style.backgroundColor = e.target.dataset.randomColor;
	} else {
		e.target.style.backgroundColor = getDarkerColor(divsColor, e.target.dataset.decreaseValues);
	}
}

function addDivs() {
	for(let i = howManyDivs; i > 0; i--){
	newDiv = document.createElement('div');
	container.appendChild(newDiv);
	newDiv.dataset.randomColor = getRandomColor();
	newDiv.dataset.decreaseValues = getColorDecreaseValues(newDiv.dataset.randomColor);
	newDiv.addEventListener('mouseover', changeBackgroundColor)
	}
}
function getColorDecreaseValues(divsColor) {
	let string = divsColor;
	let R, G, B
	string = string.replace('rgb(', '');
	string = string.replace(')', '');
	string = string.replace(' ', '');
	stringValues = string.split(',');
	R = stringValues[0];
	decreaseR = R / 10;
	G = stringValues[1];
	decreaseG = G / 10;
	B = stringValues[2];
	decreaseB = B / 10;
	return `${decreaseR},${decreaseG},${decreaseB}`
}
function getDarkerColor(divsColor, decreaseValues) {
	let string = divsColor;
	let R, G, B;
	let decreaseValuesArray;
	string = string.replace('rgb(', '');
	string = string.replace(')', '');
	string = string.replace(' ', '');
	stringValues = string.split(',');
	R = stringValues[0];
	G = stringValues[1];
	B = stringValues[2];
	decreaseValuesArray = decreaseValues.split(',')
	R = R - decreaseValuesArray[0]
	G = G - decreaseValuesArray[1]
	B = B - decreaseValuesArray[2]
	return `rgb(${R}, ${G}, ${B})`;

}
function getRandomColor() {
	let R = getRandomInt(255);
	let G = getRandomInt(255);
	let B = getRandomInt(255);
	let RGB = `rgb(${R}, ${G}, ${B})`;
	return RGB;
}

//random number function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

