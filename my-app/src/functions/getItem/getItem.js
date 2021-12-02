
export function getItem({url, func}) {
    fetch(`https://swapi.dev/api/${url}/`)
        .then(res => res.json())
        .then(
            data => {
                func(data)
            })
}