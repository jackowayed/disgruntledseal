var currentPlayer;
var numpicked;
var xpoints;
var opoints;
var multttt=true;
var winnable;
var legalPlay;

var board;
initVars();
function initVars(){
	currentPlayer="X";
	numpicked=0;
	xpoints=0;
	opoints=0;
	winnable = new Array();
	winnable[0] = new Array("","","");
	winnable[1] = new Array("","","");
	winnable[2] = new Array("","","");
	legalPlay=new Array();
	legalPlay[0]=new Array(true, true, true);
	legalPlay[1]=new Array(true, true, true);
	legalPlay[2]=new Array(true, true, true);

	board = new Array(3);
	for (a=0; a<3; a++){
		board[a]=new Array(3);
		for (b=0; b<3; b++){
			board[a][b]=new Array(3);
			for (c=0; c<3; c++){
				board[a][b][c]=new Array(3);
				for (d=0; d<3; d++){
					board[a][b][c]=new Array("","","");
				}
			}
		}
	}
}

function idToInts4(id){
	var arr = new Array(id.charAt(0), id.charAt(1), id.charAt(2), id.charAt(3));
	return arr;
}
function ints4ToId(boardx, boardy, x, y){
	var temp = new Array(boardx, boardy, x, y);
	id=temp.join("");
	return id;
}
function idToInts2(id){
	var arr = new Array(id.charAt(0), id.charAt(1));
	return arr;
}
function ints2ToId(boardx, boardy){
	var temp = new Array(boardx, boardy);
	id=temp.join("");
	return id;
}

function pick(boardx, boardy, x, y){
	if (legalPlay[boardx][boardy]){
		if (board[boardx][boardy][x][y]==""){
			numpicked++;
                        board[boardx][boardy][x][y]=currentPlayer;
			var temp = ints4ToId(boardx, boardy, x, y);
			document.getElementById(temp).innerHTML=currentPlayer;
			resetLegalPlay();
			if ((multttt)?(true):(winnable[boardx][boardy] == ""))
				checkttt(boardx, boardy, x, y);
			if (contains2D(board[x][y], ""))
				legalPlay[x][y]=true;
			else if (contains2D(board[boardx][boardy], ""))
				legalPlay[boardx][boardy]=true;
			else
				for (a=0; a<3; a++)
					for (b=0; b<3; b++)
						legalPlay[a][b]=true;
			color();
			switchPlayer();
                        if(numpicked == 81)
                        {
                                winnerStr = "Congratulations, ";
                                if(xpoints>opoints)
                                         winnerStr += "X, you have won the game!";
                                else if(opoints>xpoints)
                                         winnerStr += "O, you have won the game!";
                                else
                                         winnerStr += "this epic sctruggled has resulted in a tie!";
                                document.getElementById("winner").innerHTML=winnerStr;
                        }
			else
				document.getElementById("winner").innerHTML=currentPlayer + "'s turn";
		}
		else
			alert("Someone has played there already!");
	}
	else
		alert("You may not play in that board");
}
function switchPlayer(){
	if (currentPlayer=="X")
		currentPlayer="O";
	else
		currentPlayer="X";
}
function resetLegalPlay(){
	for (a=0; a<3; a++)
		for (b=0; b<3; b++)
			legalPlay[a][b]=false;
}
function color(){
	for (a=0; a<3; a++)
		for (b=0; b<3; b++)
			if (legalPlay[a][b])
				document.getElementById(ints2ToId(a,b)).style.backgroundColor="#FFFFFF";
			else
				document.getElementById(ints2ToId(a,b)).style.backgroundColor="#808080";
}
function contains2D(arr, element){
	for (a=0; a<arr.length; a++)
		for (b=0; b<arr[0].length; b++)
			if (arr[a][b]==element)
				return true;
	return false;
}
function diagonal(boardx, boardy, x, y)
{
        wins = 0;
	xoffset = 1;
	yoffset = 1;
	if ((x == 1 && y == 0) || (x == 0 && y == 1) || (x == 1 && y == 2) || (x == 2 && y == 1))
		return wins;
	if (x==2)
		xoffset *= -1;
	if (y==2)
		yoffset *= -1;
	if (x==1)
	{
		if (board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y+yoffset] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x-xoffset][y-yoffset])
 			wins++;
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x-xoffset][y+yoffset] 
			&& board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y-yoffset])
			wins++;
	}	
	else 
	{
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y+yoffset] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset+xoffset][y+yoffset+yoffset])
			wins++;
	}
	return wins;
}

function straight(boardx, boardy, x, y)
{
	wins = 0;
	xoffset = 1;
	yoffset = 1;
	if (x==2)
		xoffset *= -1;
	if (y==2)
		yoffset *= -1;
	if (x == 1 && y == 1)
	{	
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x][y-yoffset]) 
			wins++;

		if(board[boardx][boardy][x][y] == board[boardx][boardy][x-xoffset][y] 
			&& board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y])
			wins;
	}
	else if (x == 1)
	{	
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x-xoffset][y]) 
			wins++;

		if(board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset] 
			&& board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset+yoffset])
			wins++;
	}
	else if (y == 1)
	{
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x][y-yoffset]) 
			wins++;

		if(board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y] 
			&& board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset+xoffset][y])
			wins++;
	}
	else
	{
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset] && 
			board[boardx][boardy][x][y] == board[boardx][boardy][x][y+yoffset+yoffset]) 
			wins++;
		if(board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset][y] 
			&& board[boardx][boardy][x][y] == board[boardx][boardy][x+xoffset+xoffset][y])
			wins++;
	}	
	return wins;
}

function checkttt(boardx, boardy, x, y)
{
	var num = diagonal(boardx, boardy, x, y) + straight(boardx, boardy, x, y);
	if(num > 0)
		{
			winnable[boardx][boardy] = currentPlayer;
			if(currentPlayer == "X"){
				xpoints+=(multttt)?num:1;
				document.getElementById("xscore").innerHTML="X:"+xpoints;
			}
			else{
				opoints+=(multttt)?num:1;
				document.getElementById("oscore").innerHTML="O:"+opoints;
			}
		}
}
function reset(){
	board = new Array(3);
	for (a=0; a<3; a++){
		board[a]=new Array(3);
		for (b=0; b<3; b++){
			board[a][b]=new Array(3);
			for (c=0; c<3; c++){
 				board[a][b][c]=new Array(3);
				for (d=0; d<3; d++){
					board[a][b][c]=new Array("","","");
				}
			}
		}
	}
	initVars();
	color();
	multttt=document.getElementById("form").multttt.value;
	for (a=0; a<3; a++)
		for (b=0; b<3; b++)
			for (c=0; c<3; c++)
				for (d=0; d<3; d++)
					document.getElementById(ints4ToId(a,b,c,d)).innerHTML="&nbsp;";
	document.getElementById("winner").innerHTML="X's Turn";
	document.getElementById("xscore").innerHTML="X:0";
	document.getElementById("oscore").innerHTML="O:0";
}