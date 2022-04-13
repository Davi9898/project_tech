const DataApi = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: Math.floor(Math.random() * 700),
}
const {url, type, id} = DataApi
const UrlApi = `${url}${type}/${id}`

fetch(UrlApi)
    .then( (data) => data.json())
    .then( (pokemon) => DomManipulatie(pokemon) )

const DomManipulatie = (data) => {
    const html = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}>
    `

    if(document.querySelector('.pokemon')){
        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    }
}
