// checks whether your and opponent's rooks can capture each other in chess game
function canCapture([yourRook, opponentsRook]) {
	  pos1s = yourRook.split('') ;
    pos2s = opponentsRook.split('') ;

    if ((pos1s[0] == pos2s[0]) || (pos1s[1] == pos2s[1])) {
        return true ;
    }
    else {
        return false ;
    }
}
