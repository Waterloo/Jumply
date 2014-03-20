var word=JSON.parse(localStorage.words);

var hints=JSON.parse(localStorage.hint);

var count=0;

var timed;





var reg=new Array();

var intex=0;










if(!localStorage.points){localStorage.points=0;}






//function to shuffle word
function shuffle_word(string)
{

var parts=string.split('');

for(var i=parts.length;i>0;)
{

var random=parseInt(Math.random()*i);

var temp=parts[--i];

parts[i]=parts[random];

parts[random]=temp;

}

if(string==parts.join(''))
{

shuffle_word(string);

}

else
{

return parts.join('');

}

}


//length of word

var arr_c=word.length-1;

//random number

var rand=get_rnd_no();

function no_up()
{
if(rand>arr_c)
{
rand=get_rnd_no();
no_up();
}
}


sh.innerHTML='Jumpled Word:<font color="Orange" id="jum">'+shuffle_word(word[rand])+"</font>";

hint.innerHTML='Hint:'+hints[rand];

points.innerHTML='Points:'+localStorage.points;

reg[intex]=rand;
intex++;


//timer starts
timers();

//function to check if the entered word is correct


function check(d=1)
{
clearInterval(timed);


//converting the entered value to uppercase

var low_word=ck.value.toUpperCase();

low_word=low_word.trim();


//converting the current word to uppercase

var cur_word=word[rand];

cur_word=cur_word.toUpperCase();

if(d==1)
{
if(low_word==cur_word)
{

noti.innerHTML='<font color="Green" style="text-shadow: 2px 0 0 #9076ED, -2px 0 0 #9076ED, 0 2px 0 #9076ED, 0 -2px 0 #9076ED, 1px 1px #9076ED, -1px -1px 0 #9076ED, 1px -1px 0 #9076ED, -1px 1px 0 #9076ED;">Correct</font>';

rand=get_rnd_no();

no_up();

sh.innerHTML='Jumpled Word:<font color="Orange" id="jum">'+shuffle_word(word[rand])+"</font>";

hint.innerHTML='Hint:'+hints[rand];

var pointh=parseInt(localStorage.points);

pointh=pointh+1;

localStorage.points=pointh;

}

else
{

noti.innerHTML='<font color="Red">Wrong !! Correct Word is '+word[rand]+'</font>';

rand=get_rnd_no();


no_up();

sh.innerHTML='Jumpled Word:<font color="Orange" id="jum">'+shuffle_word(word[rand])+"</font>";

sh.style.animation='rotate 5s';

hint.innerHTML='Hint:'+hints[rand];

var pointh=parseInt(localStorage.points);

pointh=pointh-1;

if (pointh<0)
{
pointh=0;
}

}

}
else
{
noti.innerHTML='<font color="blue">Timed out !! Correct Word is '+word[rand]+'</font>';

rand=get_rnd_no();

no_up();

sh.innerHTML='Jumpled Word:<font color="Orange" id="jum">'+shuffle_word(word[rand])+"</font>";

sh.style.animation='rotate 5s';

hint.innerHTML='Hint:'+hints[rand];

var pointh=parseInt(localStorage.points);

pointh=pointh-1;

if (pointh<0)
{
pointh=0;
}



}

if(d==0)
{
timers();
}
else
{

timers();
}
localStorage.points=pointh;





setTimeout(function (){noti.innerHTML='';},2000);

points.innerHTML='Points:'+localStorage.points;

ck.value="";



reg[intex]=rand;
intex++;


}







function timers()
{

var count=30;
timed=setInterval(tim,1000);


function tim()
{
c_disp.innerHTML=(count-1) +' Seconds Left';
count-=1;

if(count<=0)
{
check(0);
clearInterval(timed);
timers();
}

}
return 'called';
}



function get_rnd_no()
{

if(reg.length==(word.length-1))
{
var x=confirm('Words are over , shall we start from the begginig ?');
if(x)
{
window.location.reload();
}
}

var rands= Math.floor((Math.random()*arr_c)+1);

if(reg.indexOf(rands)==-1)
{
return rands;
}
else
{
return get_rnd_no();
}


}



