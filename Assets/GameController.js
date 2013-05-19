#pragma strict
var customSkin : GUISkin;
var gameOver:boolean=false;

static var rows:int=2;
static var cols:int=5;

var levelsPlayed:int=0;
levelsPlayed = 1;

var mat1:Material;
var mat2:Material;
var mat3:Material;

function Awake()
{
	if(GameObject.FindGameObjectsWithTag("gamecontroller").Length > 1)
	{
		Destroy(this);
	}
}

function Start () {
	
	DontDestroyOnLoad(this);
}

function Update () {
	var numberOfAliens:int;
	
	//total number of aliens in the scene
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
	
	if (numberOfAliens <=0)
	{
		levelsPlayed++;
		rows++;
		PlayerController.levelScore = 0;
		Application.LoadLevel(2);
		gameOver=false;
	}

	
	if(levelsPlayed==1)
	{
		RenderSettings.skybox=mat1; 
	}
	
	if(levelsPlayed==2)
	{
		RenderSettings.skybox=mat2;
		
	}
	
	if(levelsPlayed==3)
	{
		RenderSettings.skybox=mat3;
	}
	
	if (levelsPlayed == 4)
	{
		gameOver=true;
	
	}
}

function OnGUI()
{
	GUI.skin = customSkin;

	GUI.color = Color.green;
	GUI.Label(Rect(450,0,350,50),"Level: "+levelsPlayed);

	if (gameOver)
	{
		Destroy (this.gameObject);
		Application.LoadLevel(3);
	}
}