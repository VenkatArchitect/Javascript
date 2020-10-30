// This function removes all the vowels in a string
function js_removeVowels(str) {
  return str.replace(/[aeiou]/g, '')
}

// count the no. of words in sentences
function js_countWords(str) {
    return(str.split(/[^\s]+/).length - 1) ;	
}
