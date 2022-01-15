import React, {Component} from 'react';
import CurrencyLayout from "../component/CurrencyLayout";
import {queries} from "../../../queries/queries";
import {connect} from "react-redux";
import {getCurrencies, getCurrentId, getCurrentSymbol} from "../../../redux/reducers/currencies/currenciesReducer";

class CurrencyContainer extends Component {
    componentDidMount() {
        queries.getAllCurrencies().then(({currencies}) => this.props.getCurrencies(currencies))
    }

    handleChangeCurrency = (event) => {
        this.props.getCurrentSymbol(event.target.value)
        this.props.getCurrentId(event.target.options.selectedIndex)
    }

    render() {
        return (
            <div>
                <CurrencyLayout currensies={this.props.currencies}
                                currentSymbol={this.props.currentSymbol}
                                handleChangeCurrency={this.handleChangeCurrency}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currency.currencies,
    currentSymbol: state.currency.currentSymbol,
})

export default connect(mapStateToProps, {getCurrencies, getCurrentSymbol, getCurrentId})(CurrencyContainer);