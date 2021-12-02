import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import './film.scss';

function FilmComponent() {
    const [films, setFilms] = useState(null)
    let isSubscribed = true;

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    if (isSubscribed) {
                        setFilms(results);
                    }
                })

        return () => {
            // eslint-disable-next-line
            isSubscribed = false;
        }
    }, []);
    
    if (!films) return <div>loading...</div>
    return (
        <div className='wrapper'>
            <div className='film'></div>
            <div className='item-list'>
                Films:
                {
                    films.map((item) => {
                        const idUrl = item.url.split('/')[5]
                        return <NavLink className='rout-btn-link' to={`/starwars-films/${idUrl}`} key={item.title}>{item.title}: Epizode {item.episode_id}</NavLink>
                    }
                    )
                }
            </div>
            <Outlet />
        </div>
    )
}

export default FilmComponent
