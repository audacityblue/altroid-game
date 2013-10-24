// Set up canvas
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;

// Variables
var background = new MapObject("res/background.png", 640, 480);
var player = new Player();
var tile = new Tile(50, 0, 32, 32, "res/blocks/grass.png", 1);

// Events
document.onkeydown = function(e) {
	if(e.keyCode == 68) {
		player.moveRight(8);
		player.setAction("WALKING_RIGHT");
	} else if(e.keyCode == 65) {
		player.moveLeft(8);
		player.setAction("WALKING_LEFT");
	}
};
document.onkeyup = function(e) {
	if(e.keyCode == 68) {
		player.setAction("IDLE_RIGHT");
	} else if(e.keyCode == 65) {
		player.setAction("IDLE_LEFT");
	}
};

// Required Function
var draw = function() {
	// clear screen & draw bg
	c.fillStyle = "black";
	c.fillRect(0, 0, canvas.width, canvas.height);
	background.draw(c);

	tile.draw(c);
	// draw player
	player.draw(c);
	player.checkCollision(tile, "RIGHT");
};
setInterval(draw, 1000 / 30);