#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	//calculating left, right, top and bottom positions
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
}


static function EnableBorders(object:Transform)
{
	if(object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}
	if(object.position.x > rightmost)
	{
		object.position.x = leftmost;
	}
	if (object.position.y > topmost)
	{
		object.position.y = bottommost;
	}
	
	if(object.position.y < bottommost)
	{
		object.position.y = topmost;
	}

}