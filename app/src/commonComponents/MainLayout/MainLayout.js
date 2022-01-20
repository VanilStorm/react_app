import React from 'react';
import styles from "./MainLayout.module.css"
import HeaderContainer from "../Header/container/HeaderContainer";

class MainLayout extends React.PureComponent {
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