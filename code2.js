// Alusta muuttujat
var canvas;
var canvasContext;
var blueBlocks = [];
var redBlock = {
	x: 250,
	y: 250,
	width: 25,
	height: 25
};
var redBlockSpeed = 5;

// Kun sivu ladataan, alusta peli
window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	// Luo neljä sinistä palikkaa satunnaisiin sijainteihin
	for (var i = 0; i < 4; i++) {
		blueBlocks.push({
			x: Math.floor(Math.random() * (canvas.width - 25)),
			y: Math.floor(Math.random() * (canvas.height - 25)),
			width: 25,
			height: 25,
			xSpeed: Math.floor(Math.random() * 8) - 4,
			ySpeed: Math.floor(Math.random() * 8) - 4
		});
	}

	// Käynnistä peli
	setInterval(update, 30);
}

// Päivitä pelitilanne
function update() {
	// Tyhjennä canvas
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);

	// Piirrä punainen palikka
	canvasContext.fillStyle = '#FF0000';
	canvasContext.fillRect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);

	// Liikuta punaista palikkaa hiiren sijainnin mukaan
	canvas.addEventListener('mousemove', function(evt) {
		var mousePos = getMousePos(evt);
		redBlock.x = mousePos.x - (redBlock.width / 2);
		redBlock.y = mousePos.y - (redBlock.height / 2);
	});

	// Liikuta sinisiä palikoita
	for (var i = 0; i < blueBlocks.length; i++) {
		var block = blueBlocks[i];

		// Tarkista, onko sininen palikka törmännyt canvasin reunaan
		if (block.x < 0 || block.x + block.width > canvas.width) {
			block.xSpeed = -block.xSpeed;
		}
		if (block.y < 0 || block.y + block.height > canvas.height) {
			block.ySpeed = -block.ySpeed;
		}

		// Liikuta sinistä palikkaa
		block.x += block.xSpeed;
		block.y += block.ySpeed;

		// Piirrä sininen palikka
		canvasContext.fillStyle = '#0000FF';
		canvasContext.fillRect(block.x, block.y, block.width, block.height);
	}
}

// Hae hiiren sijainti
function getMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
