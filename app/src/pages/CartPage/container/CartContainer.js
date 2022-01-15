import React, {Component} from 'react';
import CartLayout from "../component/CartLayout/CartLayout";
import {connect} from "react-redux";
import {decrement, increment, removeProduct} from "../../../redux/reducers/popup/popupReducer";
import styles from "../component/CartLayout/CartLayout.module.css";

class CartContainer extends Component {
    state = {

    }

    handleIncrement = (id) => this.props.increment(id)
    handleDecrement = (id) => this.props.decrement(id)
    handleRemove = (index, id) => this.props.removeProduct(index, id)

    render() {
        return (
            <div>
                {this.props.selectedProducts.length > 0 ?
                <CartLayout selectedProducts={this.props.selectedProducts}
                            handleIncrement={this.handleIncrement}
                            handleDecrement={this.handleDecrement}
                            handleRemove={this.handleRemove}
                            currentId={this.props.currentId}
                />
                    :
                    <div className={styles.emptyCart}>Cart is empty!</div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProducts: state.popup.selectedProducts,
    currentId: state.currency.currentId,
})

export default connect(mapStateToProps,{increment, decrement, removeProduct})(CartContainer);