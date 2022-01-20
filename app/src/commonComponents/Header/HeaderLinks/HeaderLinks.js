import React, {Component} from 'react';

import HEADER_ROUTES from "../../../routes/RouteNames";
import styles from "./HeaderLinks.module.css"
import {NavLink} from "react-router-dom";

class HeaderLinks extends Component {
    render() {
        return <div>
            {Object.entries(HEADER_ROUTES).map(([routeName, path]) => (
                <NavLink className={({isActive}) => isActive ? styles.active : styles.navLink} to={path}
                         key={routeName}>{routeName}</NavLink>
            ))}
        </div>
    }
}

export default HeaderLinks;