export const getOne = async (showname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/search?name='+showname, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const types = await response.json()
    return types
}

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
    const pokemon = await response.json()
    return pokemon
}

export const deleteOne = async (delname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/deleteOne', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: delname
        })

    }
    )
    const pokemon = await response.json()
    return pokemon
}
