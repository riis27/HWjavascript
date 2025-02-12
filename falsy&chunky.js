function bouncer(arr) {

    var holderArray=[];
    holderArray = arr.filter(removeFalseVar);
    
    return holderArray;
    }
    
    function removeFalseVar(value){
      return Boolean(value);
    }
    bouncer([7, 'ate', '', false, 9]);



    function chunkArrayInGroups(arr, size) {
        var holderArray = [];
        var count = 0;
      
        while(count<arr.length){
          holderArray.push(arr.slice(count, count+size));
        }
        return holderArray;
      }
      
      chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);