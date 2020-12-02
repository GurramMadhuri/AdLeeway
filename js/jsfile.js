function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function registerbtn()
{
	var y=document.getElementById("snackbar");
	y.className="show";
	setTimeout(function(){
		y.className=y.className.replace("show","");
	},2000);

}
function loginbtn()
{
	var y=document.getElementById("snackbar");
	y.className="show";
	setTimeout(function(){
		y.className=y.className.replace("show","");
	},2000);

}

function sendmailbtn()
{
	var y=document.getElementById("snackbar");
	y.className="show";
	setTimeout(function(){
		y.className=y.className.replace("show","");
	},2000);

}