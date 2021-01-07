class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=450;
		this.Height=600;
		this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.Height/2,this.Width, this.Height)
			pop()
			
	}

}