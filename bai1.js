function allLongestStrings(inputArray) {
    var max = 0;
    var newArr = [];
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i].length>max) {
            max = inputArray[i].length;
        }
    }
    for (i=0; i<inputArray.length; i++) {
        if (inputArray[i].length==max) {
            newArr.push(inputArray[i]);
        }
    }
    return newArr;
}

console.log(allLongestStrings(["binh","phuoc","cao","khanh","nga"])); 
