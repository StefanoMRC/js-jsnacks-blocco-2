let numeri=[4, 6, 7, 10, 21,12, 33, 51]
document.getElementById("cont2").innerHTML=`la lista dei numeri è ${numeri}`
somma=0
for(i=0; i < numeri.length; i++){
    if(i % 2==0){
     somma=somma+numeri[i]
     console.log(somma)
    } else{}
}
document.getElementById("cont").innerHTML=`la somma dei numeri in posizione pari è ${somma}`