import React, {Component} from 'react';
import styles from "../../Header/component/HeaderLayout.module.css";

class CurrencyLayout extends Component {
    render() {
        return (
            <select style={{cursor: 'pointer'}} value={this.props.currentSymbol} onChange={this.props.handleChangeCurrency} className={styles.dropDown}>
                {this.props.currensies.map((currency, id) => {
                    return <option key={id} value={currency.symbol}>{currency.symbol} {currency.label}</option>
                })}
            </select>
        );
    }
}

export default CurrencyLayout;