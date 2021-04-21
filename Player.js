class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";

	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}
	moveleft()
 {
	 this.spt.x=this.spt.x-5
 }
    moveright()
	{
	   this.spt.x=this.spt.x+5
	}

    movejump()
{
	this.spt.velocityY=-20
}


}
























