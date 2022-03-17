let listaNomi=["pippo", "dario", "dina", "giorgio"]
let listaCognomi=["lampa", "lampa", "de giorgi", "franco"]
let nomeCognome=[]
// for(let i=0; i<listaCognomi.length; i++){
// nomeCognome= `${listaNomi[i]} ${listaCognomi[i]}`;
// console.log(nomeCognome)
// document.getElementById("cont").innerHTML+=`<li>${nomeCognome}</li>`
// }
for(let i=0; i<8; i++){
    let numRandomNomi= Math.floor(Math.random()*(listaNomi.length));
    let numRandomCognomi= Math.floor(Math.random()*(listaCognomi.length));
    nomeCognome= `${listaNomi[numRandomNomi]} ${listaCognomi[numRandomCognomi]}`;
    document.getElementById("cont").innerHTML+=`<li>${nomeCognome}</li>`
}