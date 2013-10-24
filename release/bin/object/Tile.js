function Tile(x1, y1, width, height, imageFile, type) {
	this.x1 = x1;
	this.y1 = y1;
	this.width = width;
	this.height = height;
	this.x2 = this.x1 + this.width;
	this.y2 = this.y1 + this.height;
	this.type = type;
	this.image = new Image();
	this.image.src = imageFile;

	this.draw = function(context) {
		context.drawImage(this.image, this.x1,
			this.y1, this.width, this.height);
	};
}