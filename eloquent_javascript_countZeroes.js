//Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it. Use reduce.

function reduce(array,combine,start){
    var current = start;
    for (var i = 0; i < array.length ;i++){
        current = combine(current,array[i]);
    }
    return current;
}

function countZeroes(array) {
    function counter(total,element){
        if (element === 0){
            return total = total + 1;
        } else {
            return total = total + 0;
        }
    }
    return reduce(array, counter,0);
}

//Then, write the higher-order function count, which takes an array and a test function as arguments, and returns the amount of elements in the array for which the test function returned true. Re-implement countZeroes using this function.

function countZeroes2(array){
    
    function isZero(element){ return element === 0 ? true:false;}
    
    function count(array,test){
        var total = 0;
        for (var i = 0; i < array.length; i++){
            if(test(array[i])){
                total = total + 1;
            } else {
                total = total + 0;
            }
        }
        return total;
    }
    return count(array,isZero);
}
