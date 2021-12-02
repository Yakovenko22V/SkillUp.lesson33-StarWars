import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getItem } from '../../../functions/getItem/getItem';

function ItemPlanet(props) {

    const params = useParams();
    const itemID = params.id;
    const[planetsState, setPlanetsState] = useState({})

    useEffect(() => {
        getItem({url: `planets/${itemID}`, func:setPlanetsState})
    }, [itemID])

    return (
        <div className='under-item-list'>
            <p key={planetsState.name}>Planet: {planetsState.name}</p>
            <p>Population: {planetsState.population}</p>
            <p>Diameter: {planetsState.diameter}</p>
            <p>Сlimate: {planetsState.climate}</p>
            <p>Terrain: {planetsState.terrain}</p>
            <p>Surface water: {planetsState.surface_water}</p>
            <p>Rotation period: {planetsState.rotation_period}</p> 
        </div>
    )
}

export default ItemPlanet;