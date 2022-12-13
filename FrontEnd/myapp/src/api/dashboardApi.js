export const updateOne = async (oldvalues, newvalues) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/updateOne', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            oldvalues: oldvalues,
            newvalues: newvalues
        })

    }
    )
    const pokedex = await response.json()
    return pokedex
}
