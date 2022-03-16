let array=["1","2","3","4","5","6"]
let array2=["1","2","3"]
numArray=array.length
numArray2=array2.length


for(i=0; i<(numArray-numArray2); i++){
    array2.push(Math.round(Math.random()*10 + 1))
}
console.log(array2)