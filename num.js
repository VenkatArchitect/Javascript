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

// find missing angle's property of a triangle
function missingAngleProperty (a1, a2) {
    
    var l_ta ;

    if ((a1 < 0) || (a2 < 0)) {
        return ("Invalid angle specification") ;
    }
    else
    {
        l_ta = (180 - (a1 + a2)) ;

        if (l_ta == 90) {
            return ('right') ;
        }
        else if (l_ta < 90) {
            return ('acute') ;
        }
        else {
            return ('obtuse') ;
        }
    }
}
