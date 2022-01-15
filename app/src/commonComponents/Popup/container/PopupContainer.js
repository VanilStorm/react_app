import React, {Component, memo} from 'react';
import PopupLayout from "../component/PopupLayout";
import {connect} from "react-redux";
import {decrement, increment, removeProduct} from "../../../redux/reducers/popup/popupReducer";

class PopupContainer extends Component {

    handleIncrement = (id) => this.props.increment(id)
    handleDecrement = (id) => this.props.decrement(id)
    handleRemove = (index, id) => this.props.removeProduct(index, id)

    render() {
        return (
            <div>
                <PopupLayout isToggle={this.props.isToggle}
                             handleChangeToggle={this.props.handleChangeToggle}
                             selectedProducts={this.props.selectedProducts}
                             currentId={this.props.currentId}
                             currentSymbol={this.props.currentSymbol}
                             handleIncrement={this.handleIncrement}
                             handleDecrement={this.handleDecrement}
                             handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProducts: state.popup.selectedProducts,
    currentId: state.currency.currentId,
    currentSymbol: state.currency.currentSymbol,

})

export default connect(mapStateToProps,{increment,decrement,removeProduct})(memo(PopupContainer));