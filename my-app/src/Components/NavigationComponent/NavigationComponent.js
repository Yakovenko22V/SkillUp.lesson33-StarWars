import React from 'react'
import '../NavigationComponent/navigation.scss'
import {Routes, Route, NavLink } from 'react-router-dom';
import FilmComponent from '../FilmComponent/FilmComponent';
import { ItemFilm } from '../FilmComponent/ItemFilm/ItemFilm';
import MainComponent from '../MainComponent/MainComponent';
import ItemCharacter from '../PeopleComponent/ItemCharacter/ItemCharacter';
import ItemPlanet from '../PlanetsComponent/ItemPlanet/ItemPlanet';
import PeopleComponent from "../PeopleComponent/PeopleComponent";
import PlanetsComponent from '../PlanetsComponent/PlanetsComponent'
import StarshipsComponent from "../StarshipsComponent/StarshipsComponent";
import {pathes} from '/SkillUp/SkillUp.lesson33-StarWars/my-app/src/pathes/pathes'
import ItemStarship from '../StarshipsComponent/ItemStarship/ItemStarship';

function NavigationComponent() {

    const Nav = () => (
        <div className='nav-div'>
            <NavLink className='rout-btn-link' to={pathes.main}>Main page</NavLink>
            <NavLink className='rout-btn-link' to={pathes.films}>Saga's films</NavLink>
            <NavLink className='rout-btn-link' to={pathes.characters}>Characters</NavLink>
            <NavLink className='rout-btn-link' to={pathes.planets}>Mentioned planets</NavLink>
            <NavLink className='rout-btn-link' to={pathes.starships}>Starships</NavLink>
        </div>);

    return (
        <div>
             <Nav/>
                <Routes>
                    <Route index path={pathes.main} element={<MainComponent/>} />
                    <Route path={pathes.films} element={<FilmComponent />} >
                        <Route index path=':id' element={<ItemFilm />} />
                    </Route>
                    <Route  path={pathes.characters} element={<PeopleComponent />}>
                        <Route index path=':id' element={<ItemCharacter />} />
                    </Route>
                    <Route  path={pathes.planets} element={<PlanetsComponent />}>
                        <Route index path=':id' element={<ItemPlanet/>} />
                    </Route>
                    <Route path={pathes.starships} element={<StarshipsComponent />}>
                        <Route index path=':id' element={<ItemStarship/>} />
                    </Route>
                </Routes>
        </div>
    )
}

export default NavigationComponent
