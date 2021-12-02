import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import './starships.scss';

function StarshipsComponent() {
    const [starships, setStarships] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    setStarships(results);
                })
    }, []);

    if (!starships) return <div>loading...</div>
    return (
        <div className='wrapper'>
            <div className='starships'></div>
            <div className='item-list'>
                Starships:
                {
                    starships.map((item) =>{
                        const idUrl = item.url.split('/')[5]
                        return <NavLink to={`/starships/${idUrl}`} key={item.name}>{item.name}</NavLink>
                })
                }
            </div>
            <Outlet />
        </div>
    )
}

export default StarshipsComponent
