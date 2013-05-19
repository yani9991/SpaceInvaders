#pragma strict

var shootingup:boolean;
var s:int; 

function Start () {

}

function Update () {
	if(shootingup)
	{
		//shoot up
		transform.Translate(Vector3.up * 10 * Time.deltaTime);
	}
	else
	{
		//shoot down
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}


}

//when the laser hits an object
function OnTriggerEnter(other:Collider)
{
	//check if it is the player's laser shooting up
	if(shootingup == true)
	{
		if (other.gameObject.tag == "enemy")
		{
			PlayerController.score++;
			PlayerController.levelScore++;
			PlayerController.shotsHit++;
			var PlayerControllerScript:PlayerController;
			
			PlayerControllerScript = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerController);
			
			PlayerControllerScript.PlaySounds();
			
			
		//destroy the alien
			Destroy(other.gameObject);
		//destroy the laser
			Destroy(this.gameObject);
			shootingup = false;
			
		}
	}

}

//when out of screen
function OnBecameInvisible()
{
	PlayerController.shotsMissed = PlayerController.shotsFired - PlayerController.shotsHit ;
	Destroy(this.gameObject);
	
}