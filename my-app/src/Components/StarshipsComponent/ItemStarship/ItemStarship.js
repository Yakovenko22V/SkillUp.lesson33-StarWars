import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {getItem} from '../../../functions/getItem/getItem'

function ItemStarship(props) {

    const params = useParams();
    const itemID = params.id;
    const [starshipState, setStarshipState] = useState({});

    useEffect(() => {
      getItem({url: `starships/${itemID}`, func: setStarshipState})  
    }, [itemID])

    return (
        <div className='under-item-list'>
            <p key={starshipState.name}>Starship: {starshipState.name}</p>
            <p>Model: {starshipState.model}</p>
            <p>Manufacturer: {starshipState.manufacturer}</p>
            <p>Length: {starshipState.length}</p>
            <p>Max atmosphering speed: {starshipState.max_atmosphering_speed}</p>
            <p>Cost in credits: {starshipState.cost_in_credits}</p>
            <p>Cargo capacity: {starshipState.cargo_capacity}</p>
        </div>
    )
}

export default ItemStarship;
