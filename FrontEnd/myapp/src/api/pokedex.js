export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokedex = await response.json()
    return pokedex
}





export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
            ,body: JSON.stringify({
                "name": pokemon.name,
                "type": pokemon.type,
                "img": pokemon.img,
            })
        }
    )
    const pokedexadd = await response.json()
    return pokedexadd
}