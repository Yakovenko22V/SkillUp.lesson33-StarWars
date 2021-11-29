import React, { useEffect, useState } from 'react'

function FilmComponent() {
    const [films, setFilms] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())
            .then(
                ({results}) => {
                    setFilms(results);
                    console.log('films', results)
                })
    }, []);

    if(!films) return <div>loading...</div>
    return (
        <div>
            Films:
            {
                films.map((item) => 
                <p key={item.title}>{item.title}: Epizode: {item.episode_id}</p>)
            }
        </div>
    )
}

export default FilmComponent
