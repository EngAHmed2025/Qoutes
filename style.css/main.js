var arrayOfQuote = [
{ 
'actor' : 'OscarWilde' ,
"qouts": "Be yourself everyone else is already taken"
},
{ 
"actor" : "O Marilyn Monroe" ,
"qouts": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” "
},
{ 
"actor" : " Albert Einstein " ,
"qouts": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "
},
{ 
"actor" : "Frank Zappa " ,
"qouts": "So many books, so little time."
},
{ 
"actor" : "Marcus Tullius Cicero " ,
"qouts": "A room without books is like a body without a soul.”"
},
{ 
"actor" : "Mae West " ,
"qouts": "“You only live once, but if you do it right, once is enough.” "
},
];
var random1;
function genrateQouts(){
var random  = Number.parseInt(Math.random()*arrayOfQuote.length);
if (random != random1){ 
document.getElementById('firstQouts').innerHTML = arrayOfQuote[random].qouts;
document.getElementById('SecoendQouts').innerHTML = arrayOfQuote[random].actor;
}
else{
    do {random = Number.parseInt(Math.random()*arrayOfQuote.length);
    } while (random == random1);
document.getElementById('firstQouts').innerHTML = arrayOfQuote[random].qouts;
document.getElementById('SecoendQouts').innerHTML = arrayOfQuote[random].actor;
}
random1  = random ;
}