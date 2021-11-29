import React, { useEffect, useState } from 'react'

function StarshipsComponent() {
    const [starships, setStarships] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
            .then(res => res.json())
            .then(
                ({results}) => {
                    setStarships(results);
                    console.log('starships', results)
                })
    }, []);

    if(!starships) return <div>loading...</div>
    return (
        <div>
            Starships:
            {
                starships.map((item) => 
                <p key={item.name}>{item.name}</p>)
            }
        </div>
    )
}

export default StarshipsComponent
