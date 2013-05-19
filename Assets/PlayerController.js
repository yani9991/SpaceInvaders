#pragma strict
var customSkin : GUISkin;

var laser:Rigidbody;
static var health:int=100;
static var score:int=0;
static var levelScore:int=0;
static var shotsFired:int=0;
static var shotsHit:int=0;
static var shotsMissed:int=0;

var laserSound:AudioClip;


var alienExplosion:AudioClip;


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		//the aliens hit the player
		health -= 1;
		if(health <= 0)
		{
			Destroy (this.gameObject);
			Application.LoadLevel(3);
			
		}
	}

}

function PlaySounds()
{
	//set the source sound of the default audio source
		this.GetComponent(AudioSource).clip = alienExplosion;
		//when I press the space bar play the sound
		this.GetComponent(AudioSource).Play();
}

function OnGUI()
{

	GUI.skin = customSkin;

	GUI.color = Color.green;
		                 //x  y width height
	
	//display user's name
	GUI.Label(Rect(10,0,500,50),"Player's Name: "+PlayerPrefs.GetString("Player Name")); //built-in method of saving small amounts of data to the local machine using the PlayerPrefs class, which saves you from having to deal with explicitly reading and writing files
	
	//display level score
	GUI.Label(Rect(10,60,200,50),"Level Score: "+levelScore);
	
	//display score
	GUI.Label(Rect(10,20,100,50),"Score: "+score);
	
	//display health
	GUI.Label(Rect(360,20,100,50),"Health: "+health);
	
	//display shots fired
	GUI.Label(Rect(500,20,100,50),"Shots Fired: "+shotsFired);
	
	//display shots hit
	GUI.Label(Rect(700,20,100,50),"Shots Hit: "+shotsHit);
	
	//display shots missed
	GUI.Label(Rect(900,20,100,50),"Shots Missed: "+shotsMissed);
}



function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.Space))
	{
	
		//set the source sound of the default audio source
		this.GetComponent(AudioSource).clip = laserSound;
		//when I press the space bar, play the sound
		this.GetComponent(AudioSource).Play();
		
		Instantiate(laser,transform.position,transform.rotation);
	}
	
	//borders
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	//horizontal movement 
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
}