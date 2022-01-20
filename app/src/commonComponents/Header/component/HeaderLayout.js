import React, {Component} from 'react';

import styles from "./HeaderLayout.module.css"
import basket from "../../../Icons/Basket.svg"
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import Logo from "../../Logo/Logo";
import CurrencyContainer from "../../Currency/container/CurrencyContainer";
import PopupContainer from "../../Popup/container/PopupContainer";

class HeaderLayout extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div className={styles.wrapper}>
                    <HeaderLinks/>
                    <Logo/>
                    <div style={{display: "flex"}}>
                        <CurrencyContainer/>
                        <img style={{cursor: 'pointer'}} onClick={() => this.props.handleChangeToggle(!this.props.isToggle)} src={basket}/>
                    </div>
                </div>
                {this.props.isToggle && <PopupContainer isToggle={this.props.isToggle} handleChangeToggle={this.props.handleChangeToggle}/>}
                <div className={this.props.selectedProducts.length > 0 ? styles.quantity:''}>{this.props.selectedProducts.length > 0 &&
                this.props.selectedProducts.reduce((acc, item) => acc + item.quantity,0)}</div>
            </div>
        );
    }
}

export default HeaderLayout;