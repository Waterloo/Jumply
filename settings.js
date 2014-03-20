var snd=document.getElementById('snd');

function stop_snd()
{
localStorage.Sound_Enabled=snd.checked
}


function init()
{
if(!localStorage.app_back)
{
localStorage.app_back="b2.jpg";
document.body.background=localStorage.app_back;
}


if(!localStorage.app_back)
{
localStorage.app_back="b2.jpg";
}


document.body.background=localStorage.app_back;
document.body.style.backgroundRepeat="no-repeat";



}

function change_back(val)
{
localStorage.app_back=val;
document.body.background=localStorage.app_back;
}

function clear_points()
{
var x=confirm('Are you Sure, All your Points Will be Cleared')
if(x)
{
localStorage.points=0;
}
}


if(localStorage.Sound_Enabled=="false"){
snd.checked=false;
}
else
{
snd.checked=true;
}
