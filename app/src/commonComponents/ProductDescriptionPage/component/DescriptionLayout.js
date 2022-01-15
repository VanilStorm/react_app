import React, {Component, memo} from 'react';

import styles from "./DescriptionLayout.module.css"

class DescriptionLayout extends Component {
    render() {
        return (
            <div className={styles.product}>
                <div className={styles.imgs}>
                    <div className={styles.smallImg}>
                        {this.props.currentProduct && this.props.currentProduct.gallery.map((item, index) => {
                            return <img onClick={() => this.props.handleTab(index)} src={item} key={index} alt='img'/>
                        })}
                    </div>

                    <div className={styles.bigImg}>
                        {this.props.currentProduct &&
                        <img src={this.props.currentProduct.gallery[this.props.photoIndex]} alt='img'/>}
                    </div>
                </div>

                <div className={styles.productDescriptions}>
                    <div className={styles.brand}>
                        {this.props.currentProduct && this.props.currentProduct.brand}
                    </div>

                    <div className={styles.name}>
                        {this.props.currentProduct && this.props.currentProduct.name}
                    </div>

                    <div ref={this.ref} className={styles.attributes}>
                        <div className={styles.btns}>
                            {this.props.currentProduct && this.props.currentProduct.attributes.map((items, index) => {
                                if (items.name === "Color") {
                                    return <div key={index} className={styles.btnsColors}>
                                        <p>Color:</p>
                                        {items.items.map((item) => {
                                            return <button
                                                className={this.props.productAttributes.color === item.value ? styles.activeColor : null}
                                                onClick={() => this.props.handleChangeProductColor(item.value)}
                                                key={item.id} style={{backgroundColor: item.value}}>{}</button>
                                        })}
                                    </div>
                                } else if (items.name === "Capacity") {
                                    return <div key={index} className={styles.btnsCapacity}>
                                        <p>Capacity:</p>
                                        {items.items.map((item, index) => {
                                            return <button
                                                className={this.props.productAttributes.capacity === item.value ? styles.active : null}
                                                onClick={() => this.props.handleChangeProductCapacity(item.value)}
                                                key={index}>{item.value}</button>
                                        })}
                                    </div>
                                } else if (items.name === "Size") {
                                    return <div key={index} className={styles.btnsSize}>
                                        <p>Size:</p>
                                        {items.items.map((item, index) => {
                                            return <button
                                                className={this.props.productAttributes.size === item.value ? styles.active : null}
                                                onClick={() => this.props.handleChangeProductSize(item.value)}
                                                key={index}>{item.value}</button>
                                        })}
                                    </div>
                                }
                            })
                            }
                        </div>

                        <div className={styles.price}>
                            <p>Price:</p>
                            <h2>
                                {this.props.currentProduct && this.props.currentProduct.prices[this.props.currentId].currency.symbol}
                                {this.props.currentProduct && this.props.currentProduct.prices[this.props.currentId].amount}
                            </h2>
                        </div>
                    </div>

                    <div className={styles.addToCart}>
                        <button
                            style={{opacity: this.props.currentProduct && !this.props.currentProduct.inStock ? '.6' : '1'}}
                            onClick={() => {
                                this.props.currentProduct.inStock &&
                                this.props.addQuantity(this.props.currentProduct.id) &&
                                this.props.addSelectedProduct(this.props.productAttributes)
                                this.props.handleToggle(false)
                            }}>{this.props.currentProduct && this.props.currentProduct.inStock ? "Add to cart" : "Out of stock"}</button>
                    </div>

                    <div className={styles.description}>
                        {this.props.currentProduct &&
                        <div dangerouslySetInnerHTML={{__html: this.props.currentProduct.description}}>{}</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default memo(DescriptionLayout);