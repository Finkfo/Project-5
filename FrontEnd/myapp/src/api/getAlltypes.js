export const getAlltypes = async () => {
    const response = await fetch(
        'http://localhost:4444/types/list', {
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