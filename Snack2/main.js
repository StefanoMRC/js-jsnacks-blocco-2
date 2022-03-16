let listaNomi=["pippo", "dario", "dina", "giorgio"]
let listaCognomi=["lampa", "lampa", "de giorgi", "franco"]
let nomeCognome=""
for(let i=0; i<listaCognomi.length; i++){
nomeCognome= `${listaNomi[i]} ${listaCognomi[i]}`;
console.log(nomeCognome)
document.getElementById("cont").innerHTML+=`<li>${nomeCognome}</li>`
}
