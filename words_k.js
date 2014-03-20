var word=['dream','frock','socks','elder','CRISIS','pack','sister','candle','yesterday','christmas','stamp','promise','cold','september','clock','noodles','boots','nothing','mirror','shadow','heart','flowers','kangaroo','butterfly','wings','listen','iceberg','razor','onion','particles'];

var hints=['The Drama in your sleep','A Women\'s Garment','Keeps your feet warm','respected older person','Credit is doubled in unstable period','A group of Wolf is Called','sweet','i\'m tall when i am young,i\'m short when i\'m old','you can\'t find me again','A festival','I travel Around the world','you can easily broke this','You can catch me , but can\'t through me','A Month','I got Hands','Its Yummy','puss in ','poor People have it , Rich people need it , if you eat it you die.','it will double everything you bring in front of it','every one has it and no one can lose it','if you break me i will still work, but you can\'t afford that','thousand colored folds stretching towards the sky','What jumps when it walks , and sits when it stands','I am a very pretty thing, fluttering in the pale-blue sky','my first three letters means \"to succed\"','I am Related to Ear and Sound','I\'am lighter than what i\'m made of and more of me is hidden than is seen','i sounds like lift her up','you use knife to slice me and weep besides me','many diffrent type of my last letters can be seen in magazines and newspapers'];


function qry()
{

for(var i=0;i<word.length;i++)
{
var qr="INSERT INTO data Values (null,'"+word[i]+"','"+hints[i]+"')<br>";

qrys.innerHTML=qrys.innerHTML+qr;

}
qrys.innerHTML=qrys.innerHTML+qr;
}


