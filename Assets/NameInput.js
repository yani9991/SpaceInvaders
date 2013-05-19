#pragma strict

var customSkin : GUISkin;
var x:int;
var y:int;
static var usersName:String="";

function Start () {

}

function Update () {

}


function OnGUI()
{
	x = Screen.width / 2;
	y = Screen.height / 2;
	
	//apply GUI Skin
	GUI.skin = customSkin;
	
   //x  y width height
	
	//accepting user's name
	usersName = GUI.TextField(Rect(x-250, 400, 500, 50),usersName);	// Here if i pass some string in textFieldString which is my variable to be displayed in the textfield 
	
	PlayerPrefs.SetString("Player Name",usersName); //built-in method of saving small amounts of data to the local machine using the PlayerPrefs class
	
	//creating a button
	                 //x  y width height
	if(GUI.Button(Rect(x-90,480,200,60),"Play"))
	{
		Application.LoadLevel(2);
	}
   
}
