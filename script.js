const pokeFormData = document.querySelector('#form-data')
const pokeCard = document.querySelector('.poke-card')

pokeFormData.addEventListener('submit', (event) => {
    // prevent page from refreshing
    event.preventDefault()

    // grab data
    const name = pokeFormData.name.value
    
    // get data from function
    pokemonData(name)
})

async function pokemonData(name) {
    // get pokemon url with name parameter passed into end url to get specific pokemon name
    pokeUrl = `https://pokeapi.co/api/v2/pokemon/${name}`

    // await the fetch of the url
    const pokeResponse = await fetch(pokeUrl)

    // await the repsonse of from the url
    const pokeData = await pokeResponse.json()
    console.log(pokeData)
    const pokeSprite = pokeData.sprites.front_shiny
    const pokeName = pokeData.name
    // captialize pokemon name
    const captializeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
    const pokeAbility = pokeData.abilities[0].ability.name
    // captialize ability name
    const capitalizeAbility = pokeAbility.charAt(0).toUpperCase() + pokeAbility.slice(1)
    const pokeBaseXP = pokeData.base_experience
    const pokeAttackBaseStat = pokeData.stats[1].base_stat
    const pokeHpBaseStat = pokeData.stats[0].base_stat
    const pokeDefenseBaseStat = pokeData.stats[2].base_stat

    pokeCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${pokeSprite}" class="card-img-top" alt="pokemon image">
        <div class="card-body">
            <h5 class="card-title">${captializeName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Ability: ${capitalizeAbility}</li>
            <li class="list-group-item">Base XP: ${pokeBaseXP}</li>
            <li class="list-group-item">Attack Base Stat: ${pokeAttackBaseStat}</li>
            <li class="list-group-item">HP Base Stat: ${pokeHpBaseStat}</li>
            <li class="list-group-item">Defense Base Stat: ${pokeDefenseBaseStat}</li>
        </ul>
    </div>
    `
}