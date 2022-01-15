import React, {Component, memo} from 'react';
import styles from "./WomenPageLayout.module.css"
import LayoutCard from "../../../commonComponents/LayoutCard/LayoutCard";

class WomenPageLayout extends Component {
    render() {
        return (
            <div>
                <p className={styles.category}>Category:
                    <select value={this.props.category} className={styles.dropDown}
                            onChange={this.props.handleChangeCategory}>
                        {this.props.categories.map((category, id) => {
                            return <option key={id} className={styles.category}
                                           value={category.name}>{category.name}</option>
                        })}
                    </select>
                </p>
                <div className={styles.wrapper}>
                    {this.props.currentProducts.map(product => {
                        return <LayoutCard handleOnMouseEnter={() => this.props.handleOnMouseEnter(product.id)}
                                           handleOnMouseLeave={this.props.handleOnMouseLeave}
                                           handleGetProductId={()=>this.props.handleGetProductId(product.id)}
                                           productAttributes={this.props.productAttributes}
                                           addSelectedProduct={this.props.addSelectedProduct}
                                           addQuantity={()=>this.props.addQuantity(product.id)}
                                           productId={this.props.productId}
                                           key={product.id}
                                           id={product.id} img={product.gallery[0]} name={product.name}
                                           inStock={product.inStock}
                                           currency={product.prices[this.props.currentId].currency.symbol}
                                           handleGetCurrentProduct={() => this.props.handleGetCurrentProduct(product.id)}
                                           amount={product.prices[this.props.currentId].amount}/>
                    })}
                </div>
            </div>
        );
    }
}

export default memo(WomenPageLayout);