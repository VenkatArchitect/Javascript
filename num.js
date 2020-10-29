function findSmallestNum(arr) {

    var l_count ;
    var l_smallest = Number.MAX_VALUE;

    for (l_count = 0; l_count < arr.length; l_count ++) {
        if (arr[l_count] < l_smallest) {
            l_smallest = arr[l_count] ;
        }
    }

    return (l_smallest) ;
}
