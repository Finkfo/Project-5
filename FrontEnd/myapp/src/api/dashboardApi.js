export const updateOne = async (oldvalues, newvalues) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/updateOne', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            oldvalues: oldvalues,
            newvalues: newvalues
        })

    }
    )
    const pokedex = await response.json()
    return pokedex
}

export const deleteOne = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/deleteOne', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })

    }
    )
    const pokedex = await response.json()
    return pokedex
}