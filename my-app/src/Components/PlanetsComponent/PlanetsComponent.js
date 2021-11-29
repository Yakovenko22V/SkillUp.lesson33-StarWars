import React, { useEffect, useState } from 'react'

function PlanetsComponent() {
    const [planets, setPlanets] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    setPlanets(results);
                    console.log('planets', results)
                })
    }, []);

    if (!planets) return <div>loading...</div>
    return (
        <div>
            Planets:
            {
                planets.map((item) =>
                    <p key={item.name}>{item.name}</p>)
            }
        </div>
    )
}

export default PlanetsComponent