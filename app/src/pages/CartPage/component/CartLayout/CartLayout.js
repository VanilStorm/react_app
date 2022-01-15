import React, {Component} from 'react';
import styles from "./CartLayout.module.css"
import CartCard from "../CartCard/CartCard";

class CartLayout extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Cart</h1>
                {this.props.selectedProducts.map((product, index) => {
                    return <CartCard key={index} selectedProducts={product}
                                     handleIncrement={() => this.props.handleIncrement(product.id)}
                                     handleDecrement={()=> this.props.handleDecrement(product.id)}
                                     handleRemove={() => this.props.handleRemove(index, product.id)}
                                     currentId={this.props.currentId}
                    />
                })}
            </div>
        );
    }
}

export default CartLayout;