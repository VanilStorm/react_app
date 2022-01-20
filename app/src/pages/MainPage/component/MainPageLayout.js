import React, {Component, memo} from 'react';
import styles from "./MainPageLayout.module.css"
import LayoutCard from "../../../commonComponents/LayoutCard/LayoutCard";

class MainPageLayout extends Component {
    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    {this.props.currentProducts.map(product => {
                        return <LayoutCard handleOnMouseEnter={() => this.props.handleOnMouseEnter(product.id)}
                                           handleOnMouseLeave={this.props.handleOnMouseLeave}
                                           handleGetProductId={()=>this.props.handleGetProductId(product.id)}
                                           productAttributes={this.props.productAttributes}
                                           addSelectedProduct={this.props.addSelectedProduct}
                                           incrementQuantity={()=>this.props.incrementQuantity(product.id)}
                                           handleGetCurrentProduct={() => this.props.handleGetCurrentProduct(product.id)}
                                           productId={this.props.productId}
                                           key={product.id}
                                           id={product.id} img={product.gallery[0]} name={product.name}
                                           inStock={product.inStock}
                                           currency={product.prices[this.props.currentId].currency.symbol}
                                           amount={product.prices[this.props.currentId].amount}/>
                    })}
                </div>
            </div>
        );
    }
}

export default memo(MainPageLayout);