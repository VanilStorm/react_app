import React, {Component, memo} from 'react';

import DescriptionLayout from "../component/DescriptionLayout";
import {queries} from "../../../server/queries";

class DescriptionContainer extends Component {
    state = {
        currentProduct: null,
        photoIndex: 0,
        productAttributes: {
            id: null,
            name: '',
            brand: '',
            color: '',
            capacity: '',
            size: '',
            gallery: [],
            price: [],
            quantity: 1
        }
    }

    componentDidMount() {
        queries.getCurrentProduct(this.props.selectedProductId).then(data => this.setState(
            {
                currentProduct: data,
                productAttributes: {
                    ...this.state.productAttributes, id: data.id, name: data.name, brand: data.brand,
                    gallery: data.gallery, price: data.prices
                }
            }))
    }


    handleTab = (index) => this.setState({photoIndex: index})

    handleChangeProductColor = (color) => this.setState({
        productAttributes: {
            ...this.state.productAttributes,
            color: color
        }
    })
    handleChangeProductCapacity = (capacity) => this.setState({
        productAttributes: {
            ...this.state.productAttributes,
            capacity: capacity
        }
    })
    handleChangeProductSize = (size) => this.setState({
        productAttributes: {
            ...this.state.productAttributes,
            size: size
        }
    })


    render() {
        return (
            <div>
                <DescriptionLayout currentProduct={this.state.currentProduct}
                                   photoIndex={this.state.photoIndex}
                                   productAttributes={this.state.productAttributes}
                                   handleToggle={this.props.handleToggle}
                                   toggle={this.props.toggle}
                                   currentId={this.props.currentId}
                                   addSelectedProduct={this.props.addSelectedProduct}
                                   incrementQuantity={this.props.incrementQuantity}
                                   handleTab={this.handleTab}
                                   handleChangeProductColor={this.handleChangeProductColor}
                                   handleChangeProductCapacity={this.handleChangeProductCapacity}
                                   handleChangeProductSize={this.handleChangeProductSize}

                />
            </div>
        );
    }
}


export default memo(DescriptionContainer);