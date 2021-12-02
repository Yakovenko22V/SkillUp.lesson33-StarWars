import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import './planets.scss';

function PlanetsComponent() {
    const [planets, setPlanets] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    setPlanets(results);
                })
    }, []);

    if (!planets) return <div>loading...</div>
    return (
        <div className='wrapper'>
            <div className='planets'></div>
            <div className='item-list'>
                Planets:
                {
                    planets.map((item) =>{
                        const idUrl = item.url.split('/')[5]
                        return <NavLink to={`/planets/${idUrl}`} key={item.name}>{item.name}</NavLink>
                    })
                }
            </div>
            <Outlet />
        </div>
    )
}

export default PlanetsComponent