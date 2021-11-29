import React, { useEffect, useState } from 'react'

function PeopleComponent() {
    const [people, setPeople] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    setPeople(results);
                    console.log('people', results)
                })
    }, []);

    if (!people) return <div>loading...</div>
    return (
        <div>
            Characters:
            {
                people.map((item) =>
                    <p key={item.name}>{item.name}</p>)
            }
        </div>
    )
}

export default PeopleComponent