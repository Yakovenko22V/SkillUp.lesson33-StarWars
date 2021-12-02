import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { getItem } from '../../../functions/getItem/getItem'

function ItemFilm(props) {

    const params = useParams()
    const itemID = params.id
    const [filmsState, setFilmsState] = useState({})
    
    useEffect(() => {
        getItem({url: `films/${itemID}`, func: setFilmsState})
    }, [itemID])
    
    return (
        <div className='under-item-list'>
            <p key={filmsState.title}>Title: {filmsState.title} - Epizode {filmsState.episode_id}</p>
            <p key={filmsState.director}>Director: {filmsState.director}</p>
            <p key={filmsState.producer}>Producer: {filmsState.producer}</p>
            <p key={filmsState.release_date}>Release date: {filmsState.release_date}</p>
            <p key={filmsState.episode_id}>Description: {filmsState.opening_crawl}</p>
        </div>
    )
}

export { ItemFilm }