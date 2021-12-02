import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getItem } from '../../../functions/getItem/getItem'

function ItemCharacter(props) {

    const params = useParams()
    const itemID = params.id
    const [characterState, setCharacterState] = useState({})

    useEffect(() => {
        getItem({ url: `people/${itemID}`, func: setCharacterState })
    }, [itemID])

    return (
        <div className='under-item-list'>
            <p key={characterState.name}>Name: {characterState.name}</p>
            <p>Gender: {characterState.gender}</p>
            <p>Height: {characterState.height}</p>
            <p>Mass: {characterState.mass}</p>
            <p>Hair color: {characterState.hair_color}</p>
            <p>Birth year: {characterState.birth_year}</p>
        </div>
    )
}

export default ItemCharacter;
