import React from 'react';

import styles from "./HeaderLinks.module.css"
import {NavLink} from "react-router-dom";

class HeaderLinks extends React.PureComponent {
    render() {
        return <div>
            {this.props.categories.map((category, id) => {
                return <NavLink key={id} to={category.name} className={({isActive}) => isActive ? styles.active : ''}>
                    <button key={id} className={styles.navLink}
                            onClick={this.props.handleChangeCategory} value={category.name}>{category.name}</button>
                </NavLink>
            })}
        </div>
    }
}

export default HeaderLinks;