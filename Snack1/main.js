let numero= parseInt(prompt("inserisci numero"))

if(numero % 2==0){
    document.getElementById("cont").innerHTML=`${numero}`
}else{
    numero+=1
    document.getElementById("cont").innerHTML=`${numero}`
}