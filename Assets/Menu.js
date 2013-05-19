#pragma strict

var customSkin : GUISkin;
var x:int;
var y:int;

function Start () {

}

function Update () {

}

function OnGUI()
{
	//screen's centre
	x = Screen.width / 2;
	y = Screen.height / 2;
	
	//apply GUI Skin
	GUI.skin = customSkin;
	
	//creating a button
	                 //x  y width height
	if(GUI.Button(Rect(x-90,y-40,200,60),"Start Game"))
	{
		Application.LoadLevel(1);
	}
	if(GUI.Button(Rect(x-90,y+40,200,60),"Exit"))
	{
		Application.Quit();
		
	}
   
}