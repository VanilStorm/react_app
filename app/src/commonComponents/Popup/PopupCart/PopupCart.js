import React from 'react';
import styles from './PopupCart.module.css'

class PopupCart extends React.PureComponent {
    render() {
        return (
            <div className={styles.popup}>
                <div className={styles.card}>
                    <div className={styles.description}>
                        <div style={{width: "105px"}}>
                        <div className={styles.brand}>{this.props.selectedProducts && this.props.selectedProducts.name}</div>
                        <div className={styles.name}>{this.props.selectedProducts && this.props.selectedProducts.brand}</div>
                        <div className={styles.price}>{this.props.selectedProducts &&
                        this.props.selectedProducts.price[this.props.currentId].currency.symbol}
                            {this.props.selectedProducts &&
                            this.props.selectedProducts.price[this.props.currentId].amount}</div>
                        </div>
                        <div className={styles.attributes}>
                            {this.props.selectedProducts.size && <div style={{fontSize:"10px"}}>{this.props.selectedProducts.size}</div>}
                            {this.props.selectedProducts.capacity && <div style={{fontSize:"6px"}}>{this.props.selectedProducts.capacity}</div>}
                            {this.props.selectedProducts.color && <div style={{backgroundColor: this.props.selectedProducts.color, fontSize:"10px"}}>{}</div>}
                        </div>
                    </div>

                    <div className={styles.quantityChange}>
                        <button onClick={this.props.handleIncrement}>+</button>
                        <div>{this.props.selectedProducts.quantity}</div>
                        <button onClick={() => {
                            this.props.handleDecrement()
                            if(this.props.selectedProducts.quantity <= 1) {
                                this.props.handleRemove()
                            }
                        }}>-</button>
                    </div>

                    <img
                        src={this.props.selectedProducts.gallery[0]}
                        alt="img"/>
                </div>
            </div>
        );
    }
}

export default PopupCart;