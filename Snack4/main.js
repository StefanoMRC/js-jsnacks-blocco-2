let array=["1","2","3","4","5","6"]
let array2=["1","2","3"]
numArray=array.length
numArray2=array2.length
document.getElementById("cont").innerHTML=`${array}`

for(i=0; i<(numArray-numArray2); i++){
    array2.push(Math.round(Math.random()*10 + 1))
}
console.log(array2)
document.getElementById("cont2").innerHTML=`${array2}`

