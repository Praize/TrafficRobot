
/*var color = new Array(#fff000,#ff0000,#fffff);
var SIZE = 3;

for (var i; SIZE.length; i++ ) {
	

    if (document.getElementById('GreenBot')) {

    //color[2];
    window.alert("RED");

    }else if(document.getElementById('YellowBot')) {

    //color[1];
    window.alert("YELLOW");

    }
    else if(document.getElementById('RedBot')){

    //color[0];
     window.alert("GREEN");

    }
}*/
function GreenBot()
{
   document.getElementById("GreenBot").style.backgroundColor = "green"; 
   document.getElementById("YellowBot").style.backgroundColor = "white";  
   document.getElementById("RedBot").style.backgroundColor = "white";  

}
function YellowBot()
{
   document.getElementById("YellowBot").style.backgroundColor = "yellow";  
   document.getElementById("RedBot").style.backgroundColor = "white";  
   document.getElementById("GreenBot").style.backgroundColor = "white"; 
}
function RedBot()
{
  
   document.getElementById("RedBot").style.backgroundColor = "red"; 
   document.getElementById("YellowBot").style.backgroundColor = "white";  
   document.getElementById("GreenBot").style.backgroundColor = "white"; 

}


