import React from "react";
import {Link, NavLink} from 'react-router-dom';

const GalleryNavigation = props => {
    const {galleries} = props
    return (
        <NavLink to='/'><h1>Galleries</h1></NavLink>
        )
}

export default GalleryNavigation