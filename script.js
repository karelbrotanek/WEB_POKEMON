window.onload = function () {
    let pokemoni = document.getElementById("pokemoni")
    let input = document.getElementById("inp")
    let button = document.getElementById("btn")
    let list = [];
    button.addEventListener("click", function () {
        displayPokemon(list.filter(i => i.name.english.toLowerCase().includes(input.value)).slice(0, 8), pokemoni)
    })
    fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json")
        .then(response => response.json())
        .then(data =>{
            list = data;
            displayPokemon(data.slice(0, 8), pokemoni)
        })
}

function displayPokemon(data, pokemoni) {
    pokemoni.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = `
                <img src="${data[i].thumbnail}" 
                <h2>${data[i].name.english}</h2>
                <p>${data[i].description}</p>
                `
        pokemoni.appendChild(card)
    }
}