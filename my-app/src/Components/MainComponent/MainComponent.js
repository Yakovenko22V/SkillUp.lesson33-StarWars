import React from 'react'
import VideoComponent from '../VIdeoComponent/VideoComponent/VideoComponent'
import './main.scss'

function MainComponent() {

    return (
        <div className='main-page'>
            <h1>Basic information on the StarWars universe</h1>
            <VideoComponent/>
        </div>
    )
}

export default MainComponent
