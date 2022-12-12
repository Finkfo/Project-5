export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokedex = await response.json()
    return pokedex
}

export const addToPokedex = async (pokemon) => {
    let pok = pokemon;
    delete pok._id;
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        , body: JSON.stringify(pok)
    }
    )
    const pokedexadd = await response.json()
    return pokedexadd
}

export const deleteOne = async (pokedex) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
        method: 'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokedexDel = await response.json()
    return pokedexDel
}