import React, {Component, memo} from 'react';
import styles from "./LayoutCard.module.css"
import CircleIcon from "../CircleIcon/CircleIcon";

class LayoutCard extends Component {
    render() {
        return (
            <>
                <div className={styles.card} onClick={this.props.handleGetCurrentProduct}
                     onMouseEnter={this.props.handleOnMouseEnter} onMouseLeave={this.props.handleOnMouseLeave}>
                    <img className={styles.productImg} style={{
                        opacity: !this.props.inStock ? .3 : 1
                    }} src={this.props.img}/>
                    {!this.props.inStock ? <div className={styles.stock}>OUT OF STOCK</div> : null}
                    <p style={{fontWeight: '300'}}>{this.props.name}</p>
                    <p style={{fontWeight: '500'}}>{this.props.currency}{this.props.amount}</p>
                    {this.props.id === this.props.productId && this.props.inStock ?
                        <div onClick={e => {
                            e.stopPropagation()
                            this.props.incrementQuantity(this.props.productAttributes)
                            this.props.handleGetProductId()
                        }
                        } className={styles.addToBasket}>{
                            <CircleIcon/>}</div> : null}
                </div>
            </>
        );
    }
}

export default memo(LayoutCard);