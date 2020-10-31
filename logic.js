// returns the opposite of the supplied boolean value
function reverseBool (variable) {
    if (typeof(variable) !== 'boolean') {
        return ('boolean expected') ;
    }
    else {
        return (!variable) ;
    }
}
