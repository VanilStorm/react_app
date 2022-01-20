import React, {Component} from 'react';

import styles from './CartTemplate.module.css'

class CartTemplate extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.productAttributes}>
                    <div className={styles.brand}>{this.props.selectedProducts.brand}</div>
                    <div className={styles.name}>{this.props.selectedProducts.name}</div>

                    <div
                        className={styles.price}>
                        {this.props.selectedProducts.price[this.props.currentId].currency.symbol}
                        {this.props.selectedProducts.price[this.props.currentId].amount}
                    </div>

                    <div className={styles.attributes}>
                        {this.props.selectedProducts.size && <div className={styles.size}>{this.props.selectedProducts.size}</div>}
                        {this.props.selectedProducts.capacity && <div>{this.props.selectedProducts.capacity}</div>}
                        {this.props.selectedProducts.color && <div style={{backgroundColor: this.props.selectedProducts.color}} className={styles.color}>{}</div>}
                    </div>
                </div>

                <div className={styles.productAssets}>
                    <div className={styles.changeQuantity}>
                        <button onClick={this.props.handleIncrement}>+</button>
                        <div>{this.props.selectedProducts.quantity}</div>
                        <button onClick={() => {
                            this.props.handleDecrement()
                            if(this.props.selectedProducts.quantity === 1) {
                                this.props.handleRemove()
                            }
                        }}>-</button>
                    </div>
                    <div className={styles.imgs}>
                        <img src={this.props.selectedProducts.gallery[0]} alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartTemplate;