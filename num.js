function diffMaxMin(arr) {
    
  var l_count ;
  var l_smallest = Number.MAX_VALUE;
  var l_biggest = Number.MIN_VALUE ;

  for (l_count = 0; l_count < arr.length; l_count ++) {
      if (arr[l_count] < l_smallest) {
          l_smallest = arr[l_count] ;
      }

      if (arr[l_count] > l_biggest) {
          l_biggest = arr[l_count] ;
      }
  }

  return (l_biggest - l_smallest) ;
}

function removeOddsFromArray (arr) {
    return(arr.filter(arr => !(arr % 2))) ;
}

