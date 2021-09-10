function alternatingSums(a) {
    var oddArr = [];
    var evenArr = [];
    for (i=0; i<a.length; i++) {
        if (i%2==0) {
            evenArr.push(a[i]);
        }
        else oddArr.push(a[i]);
    }
    var oddSum = oddArr.reduce((a,b) => a+b, 0);
    var evenSum = evenArr.reduce((a,b) => a+b, 0);
    return newArr = [oddSum, evenSum];
}

console.log(alternatingSums([11,15,16,48,35])); 