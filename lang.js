// This function removes all the vowels in a string
function js_removeVowels(str) {
  return str.replace(/[aeiou]/g, '')
}

// count the no. of words in sentences
function js_countWords(str) {
    return(str.split(/[^\s]+/).length - 1) ;	
}

// shuffles first and last names
function nameShuffle (str) {
    a = str.split (" ") ;
    return (a[1].concat(" ").concat(a[0])) ;
}

// generates that many dashes as the passed number
function numberToDashes(num) {
	  var l_c ;
    var str = '';

    for (l_c = 0; l_c < num; l_c ++) {
        str = str.concat("-") ;
    }

    return(str) ;
}

// reverses a string
function reverseString (str) {

    var l_c ;
    var l_sl = str.length ;
    var l_rs = '' ;

    if (l_sl === 0) {
        return ('') ;
    }
    else {
        for (l_c = (l_sl - 1); l_c >= 0; l_c --) {
            l_rs = l_rs.concat(str[l_c]) ;
        }
    }

    return (l_rs) ;
}

