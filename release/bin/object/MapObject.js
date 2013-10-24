function MapObject(img, width, height) {
	this.imageElement = new Image();
	this.imageSource = img;
	this.imageElement.src = this.imageSource;
	this.x = 0;
	this.y = 0;
	this.width = width;
	this.height = height;
	this.setSource = function(img) {
		this.imageSource = img;
		this.imageElement.src = this.imageSource;
	};
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	};
	this.setVector = function(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	this.draw = function(context) {
		context.drawImage(this.imageElement, this.x, this.y,
			this.width, this.height);
	};
}