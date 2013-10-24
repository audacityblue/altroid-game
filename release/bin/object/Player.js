function Player() {
	this.srcDir = "res/player/";
	this.numFrames = 3;
	this.frames = [];
	this.images = [];
	this.currentFrame = 0;
	this.currentAction = "IDLE_RIGHT";
	this.x = 0;
	this.y = 0;

	for(var i = 0; i < this.numFrames; i++) {
		this.images.push(new Image());
	}

	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	};
	this.setVector = function(x, y) {
		this.x += x;
		this.y += y;
	};
	this.setAction = function(action) { this.currentAction = action; };
	this.setRight = function(bool) { this.right = bool; };
	this.moveRight = function(speed) { this.x += speed; };
	this.moveLeft = function(speed) { this.x -= speed; };
	this.draw = function(context) {
		if(this.currentAction == "WALKING_RIGHT") {
			this.frames = [
				this.srcDir + "playerRight0.png",
				this.srcDir + "playerRight1.png",
				this.srcDir + "res/playerRight2.png"
			];
			this.numFrames = 3;
		} else if(this.currentAction == "WALKING_LEFT") {
			this.frames = [
				this.srcDir + "playerLeft0.png",
				this.srcDir + "playerLeft1.png",
				this.srcDir + "playerLeft2.png"
			];
			this.numFrames = 3;
		} else if(this.currentAction == "IDLE_RIGHT") {
			this.frames = [ this.srcDir + "playerRight0.png" ];
			this.numFrames = 1;
		} else if(this.currentAction == "IDLE_LEFT") {
			this.frames = [ this.srcDir + "playerLeft0.png" ];
			this.numFrames = 1;
		}
		for(var i = 0; i < this.numFrames; i++) {
			this.images[i].src = this.frames[i];
		}
		this.currentFrame += 1;
		if(this.currentFrame >= this.numFrames) {
			this.currentFrame = 0;
		}
		context.drawImage(this.images[this.currentFrame], this.x,
			this.y, 32, 32);
	};
	this.checkCollision = function(TileObject, side) {
		if(TileObject.type == 1) {
			if(side == "TOP") {
				if(this.y <= TileObject.y2) {
					this.y += 1;
				}
			} else if(side == "RIGHT") {
				if((this.x + 32) >= TileObject.x1) {
					this.x = TileObject.x1 - 32;
				}
			}
		}
	}
}