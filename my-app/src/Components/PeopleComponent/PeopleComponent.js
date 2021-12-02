import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import './people.scss'

function PeopleComponent() {
    const [people, setPeople] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(
                ({ results }) => {
                    setPeople(results);
                })
    }, []);

    if (!people) return <div>loading...</div>
    return (
        <div className='wrapper'>
            <div className='people'></div>
            <div className='item-list'>
                Characters:
                {
                    people.map((item) => {
                        const idUrl = item.url.split('/')[5]
                        return <NavLink className='rout-btn-link' to={`/characters/${idUrl}`} key={item.name}>{item.name}</NavLink>
                })
                }
            </div>

            <Outlet />
        </div>
    )
}

export default PeopleComponent