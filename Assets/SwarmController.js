#pragma strict
//left margin in world coordinates
var leftborder:float=-12.0;

var rightborder:float=6;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

//alien's instance
var alien:Rigidbody;





function createAliens(rows:int,cols:int)
{
	//for all the rows of aliens
	for(var row=0;row<rows;row++)
	{
		//creates the aliens as required
		for(var counter=0;counter<cols;counter++)
		{
			var tempAlien:Rigidbody;
			//create instances of the alien in these positions
			tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);
			//the parent of the alien is the swarm
			tempAlien.transform.parent = this.transform;
		}
	}
	
}



function Start () {
	//create one row with five aliens
	createAliens(GameController.rows,GameController.cols);
	
	for(var counter=0;counter<3;counter++)
	{
		//wait 5 seconds
		yield WaitForSeconds(5);
		//move the aliens down
		moveDown();
	}
}

function Update () 
{
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		//move to the right
		touchedleftwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
	
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}	
}

function moveDown()
{
	//move down by one step
	transform.position.y--;
}