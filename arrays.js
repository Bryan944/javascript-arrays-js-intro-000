var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

          function addElementToBeginningOfArray(){
var arr =[1] ;
arr.unshift('foo');

return arr ;
}
console.log(addElementToBeginningOfArray())




          function destructivelyAddElementToBeginningOfArray(){
const array =  [1];
const newarr= ['foo' ,...array];
  return newarr;
}


function addElementToEndOfArray(){
const array = [1];
array.push('foo');
return array;
}
console.log(addElementToEndOfArray())


function destructivelyAddElementToEndOfArray() {
const array = [1];
//var newarr = [...array,'foo'];

array[1] = 'foo';

return array;
//console.log(array)
}
//destructivelyAddElementToEndOfArray()







          function accessElementInArray (){
  var num = [[1, 2, 3],2];
   var index;
   index = num [0][2];
  return index;
}

          function destructivelyRemoveElementFromBeginningOfArray(){
const arr = [1,2,3];
arr.slice(1);

return arr
}



          function removeElementFromBeginningOfArray(){
const array = [1, 2, 3];
var newarr;
newarr= array.shift()
return array;
}





          function destructivelyRemoveElementFromEndOfArray(){
const array = [1, 2, 3];
return array.pop();
}
console.log(destructivelyRemoveElementFromEndOfArray())


          function removeElementFromEndOfArray(){
const array = [1, 2, 3];
array.pop();
return array;
      }
     console.log(removeElementFromEndOfArray());
