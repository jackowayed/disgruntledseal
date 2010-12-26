var guessCount; var temp4; var str; var misses=0;
var words = new Array();
var word; 
words[0]="pyx";
words[1]="nymph";
words[2]="dime";
words[3]="six";
words[4]="queue";
words[5]="knife";
words[6]="disc";
words[7]="turkey";
words[8]="crypt";
words[9]="geese";
words[10]="sacred";
words[11]="photography";
words[12]="combs";
words[13]="coverage";
words[14]="kazoo";
words[15]="camels";
words[16]="celery";
words[17]="drafts";
words[18]="harpoon";
words[19]="lummox";
words[20]="tattoo";
words[21]="abruptly";
words[22]="buckles";
words[23]="carjack";
words[24]="jacuzzi";
words[25]="payslip";
words[26]="aardvark";
words[27]="bluebird";
words[28]="cementary";
words[29]="thrirty";
words[30]="diabetic";
words[31]="grandeur";
words[32]="passions";
words[33]="skeleton";
words[34]="trillion";
words[35]="acrobatic";
words[36]="alabaster";
words[37]="etiquette";
words[38]="hairbrush";
words[39]="jellybean";
words[40]="motorcycle";
words[41]="snowball";
words[42]="babysitter";
words[43]="chickenpox";
words[44]="zebras";
words[45]="aerodynamic";
words[46]="broadcaster";
words[47]="cranberries";
words[48]="bookkeeper";
words[49]="lumberjack";
var pics = new Array();
for (a=0; a<=8; a++){
	pics[a]=new Image(640, 512);
	pics[a].src="miss"+a+".jpg";
}
pics[9]=new Image(640, 512);
pics[9].src="win.jpg";
var spot;
var guesses = new Array(26);
var win = false; 
var blanks = 0;
//newWord();
function contains(arr, item){
for (temp in arr){ 
	if (arr[temp]==item)
		return true;}
	return false;
}
function changePic(){
	if (win)
		document.getElementById('man').src=pics[9].src;
	else
		document.getElementById('man').src=pics[misses].src;
}
function newWord(){
  if (words.length>0){
  win=false;
  temp4= "";misses=0; guessCount = 0;
  changePic();
  spot = Math.floor(Math.random()*words.length);
  word = words[spot];
  words.splice(spot,1);
  guesses = new Array();
  writeWord();
  setGuesses();
  }//display = new Array(word.length);
}
function guess(letter){
	guesses[guessCount] = letter; 
	guessCount++;
	if (word.indexOf(letter)==-1){
		misses++;
		changePic();
		if (misses==8){
			document.getElementById('word').innerHTML=word;
			document.getElementById('guess').innerHTML="&nbsp;";
		}
	}
	else {
		writeWord();
	}
	setGuesses();
}
function writeWord(){
	var temp6= 0; str = "";
	blanks = 0;
	for(i = 0; i < word.length; i++){
		if (contains(guesses, "" + word.charAt(i)))
			{str+=word.charAt(i)+" "; temp6++;}
		else{
			str+="_ ";
			blanks++;
		}
	}
	if (blanks==0){
		win=true;
		changePic();
	}
	document.getElementById('word').innerHTML=str;
 if(temp6 == word.length) document.getElementById('man').src="win.jpg";}
function setGuesses(){
str="";
if (!win&&misses!=8){
//document.getElementById('letsguessed').innerHTML=temp4;
str="Guess: "
if (!contains(guesses, "a"))
        str+="<a href='javascript:guess(\"a\");'>a</a>  "
if (!(contains(guesses, 'b')))
        str+="<a href='javascript:guess(\"b\");'>b</a>  "
if (!(contains(guesses, "c")))
        str+="<a href='javascript:guess(\"c\");'>c</a>  "
if (!(contains(guesses, "d")))
        str+="<a href='javascript:guess(\"d\");'>d</a>  "
if (!(contains(guesses, "e")))
        str+="<a href='javascript:guess(\"e\");'>e</a>  "
if (!(contains(guesses, "f")))
        str+="<a href='javascript:guess(\"f\");'>f</a>  "
if (!(contains(guesses, "g")))
        str+="<a href='javascript:guess(\"g\");'>g</a>  "
if (!(contains(guesses, "h")))
        str+="<a href='javascript:guess(\"h\");'>h</a>  "
if (!(contains(guesses, "i")))
        str+="<a href='javascript:guess(\"i\");'>i</a>  "
if (!(contains(guesses, "j")))
        str+="<a href='javascript:guess(\"j\");'>j</a>  "
if (!(contains(guesses, "k")))
        str+="<a href='javascript:guess(\"k\");'>k</a>  "
if (!(contains(guesses, "l")))
        str+="<a href='javascript:guess(\"l\");'>l</a>  "
if (!(contains(guesses, "m")))
        str+="<a href='javascript:guess(\"m\");'>m</a>  "
if (!(contains(guesses, "n")))
        str+="<a href='javascript:guess(\"n\");'>n</a>  "
if (!(contains(guesses, "o")))
        str+="<a href='javascript:guess(\"o\");'>o</a>  "
if (!(contains(guesses, "p")))
        str+="<a href='javascript:guess(\"p\");'>p</a>  "
if (!(contains(guesses, "q")))
        str+="<a href='javascript:guess(\"q\");'>q</a>  "
if (!(contains(guesses, "r")))
        str+="<a href='javascript:guess(\"r\");'>r</a>  "
if (!(contains(guesses, "s")))
        str+="<a href='javascript:guess(\"s\");'>s</a>  "
if (!(contains(guesses, "t")))
        str+="<a href='javascript:guess(\"t\");'>t</a>  "
if (!(contains(guesses, "u")))
        str+="<a href='javascript:guess(\"u\");'>u</a>  "
if (!(contains(guesses, "v")))
        str+="<a href='javascript:guess(\"v\");'>v</a>  "
if (!(contains(guesses, "w")))
        str+="<a href='javascript:guess(\"w\");'>w</a>  "
if (!(contains(guesses, "x")))
        str+="<a href='javascript:guess(\"x\");'>x</a>  "
if (!(contains(guesses, "y")))
        str+="<a href='javascript:guess(\"y\");'>y</a>  "
if (!(contains(guesses, "z")))
        str+="<a href='javascript:guess(\"z\");'>z</a>  "
}
document.getElementById("guess").innerHTML=str;
}