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

