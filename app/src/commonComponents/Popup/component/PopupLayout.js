import React from 'react';
import styles from './PopupLayout.module.css'
import PopupCart from "../PopupCart/PopupCart";
import {NavLink} from "react-router-dom";

class PopupLayout extends React.PureComponent {
    render() {
        {this.props.isToggle && window.addEventListener('scroll', () => this.props.handleChangeToggle())}
        return (
            <div className={styles.modal} onClick={() => this.props.handleChangeToggle(false)}>
                <div className={styles.content} onClick={e => e.stopPropagation()}>
                    <div style={{margin: "8px 20px 20px 16px"}}>
                        <div className={styles.header}>
                            <strong>My bag,</strong> <span>{this.props.selectedProducts.reduce((acc, item) => {
                                return acc + item.quantity
                        },0)} items</span>
                        </div>
                        <div style={{
                            height: this.props.selectedProducts.length > 1 ? "250px": 'auto',
                            overflow: "scroll"
                        }}>
                            {this.props.selectedProducts.map((product, index) => {
                                return <PopupCart handleIncrement={() => this.props.handleIncrement(product)}
                                                  handleDecrement={()=> this.props.handleDecrement(product)}
                                                  handleRemove={() => this.props.handleRemove(index, product.id)}
                                                  selectedProducts={product}
                                                  currentId={this.props.currentId}
                                                  key={index}
                                />
                            })}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.totalPrice}>
                                <div>Total</div>
                                <div>{this.props.currentSymbol} {this.props.selectedProducts && this.props.selectedProducts.reduce((acc,item) => {
                                    return acc + item.price[this.props.currentId].amount * item.quantity
                                },0).toFixed(2)}</div>
                            </div>

                            <div className={styles.footerBtns}>
                                <NavLink to={'/cart'}>
                                    <button onClick={() => this.props.handleChangeToggle()} className={styles.viewBag}>view bag</button>
                                </NavLink>
                                <div>
                                    <button className={styles.checkOut}>check out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupLayout;