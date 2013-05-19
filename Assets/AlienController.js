#pragma strict
var alienlaser:Rigidbody;


function Start () {
	var shootdelay:float=0;
	
	shootdelay = Random.Range(1.0,6.0);
	
	//      calling shootlaser function, shootdelay seconds, shoot delay between 1 and 3
	InvokeRepeating("shootlaser",shootdelay,shootdelay);

}


//function for the alien to shoot the laser.  
function shootlaser()
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}


function Update () {

}