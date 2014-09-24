// The forEach function passes each element of the array into a callback function
function forEach(array,callBack){
    for(var i = 0; i < array.length;i++){
        callBack(array[i]);   
    }
}

// Using forEach to add an array of numbers
var numbers = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
forEach(numbers, function(number){
    sum += number
});
console.log(sum);

// The filter function builds up a new array with only the elements that pass the test but does not modify the array it is given.
 function filter(array,test){
     var filtered = [];
     for (var i = 0; i < array.length ;i++){
         if (test(array[i])){
            filtered.push(array[i]);
         }
     }
     return filtered;
 }
 
 // The map function transforms an array by appying a function to each element of the array and returning a transformed array
 function map(array,transform){
    var mapped = [];
    for (var i = 0; i < array.length; i++){
        mapped.push(transform(array[i]));
    }
    return mapped;
}

// The reduce function computes a single value from an array of values
  function reduce(array,combine,start){
      var current = start;
      for (var i = 0; i < array.length; i++){
          current = combine(current,array[i]);
      }
      return current;
  }

// The average function finds the average of an array of numbers
  function average(array){
    function plus(a,b) {return a + b; }
    return array.reduce(plus) / array.length;
  }
 
