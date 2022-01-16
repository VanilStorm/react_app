import React, {Component} from 'react';
import styles from "./MainLayout.module.css"
import HeaderContainer from "../Header/container/HeaderContainer";

class MainLayout extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <HeaderContainer/>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;