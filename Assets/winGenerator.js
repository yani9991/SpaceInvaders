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
   
   //put everything on centre of screen
	//value of x and value of y
	x = Screen.width / 2;
	y = Screen.height / 2;
	
	//apply GUI Skin
	GUI.skin = customSkin;
   
   GUI.Label(Rect(x-90,y+40,200,60),"Score : "+ PlayerController.score);
   
}