//2.12.25

//3.
const myArray = [["Star", 11],["Moon", 12]["Sun", 13]];

//4.
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


  //5.
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  //6.
  function twoArgs(val1, val2){
    if(val1 === val2){
        return 'equal';
    }
    if(val1 !== val2){
        return 'different';
    }
  }
  console.log(twoArgs)
  twoArgs(2,6)
  
  
  function twoArgs(val1, val2){
    if(val1 === val2){
        return 'equal';
    }
    if(val1 !== val2){
        return 'different';
    }
  }
  console.log(twoArgs)
  twoArgs(6,6)