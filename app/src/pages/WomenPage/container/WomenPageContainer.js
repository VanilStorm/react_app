import React, {Component} from 'react';
import {connect} from "react-redux";

import {queries} from "../../../server/queries";
import {getCategories, getCategory, getProductCategory} from "../../../redux/reducers/womenPage/womenPageReducer";
import {addSelectedProduct, incrementQuantity} from "../../../redux/reducers/cartPopup/cartPopupReducer";

import WomenPageLayout from "../component/WomenPageLayout";
import DescriptionContainer from "../../../commonComponents/ProductDescriptionPage/container/DescriptionContainer";

class WomenPageContainer extends Component {
    state = {
        productId: '',
        selectedProductId: '',
        currentProductId: '',
        toggle: true,
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
        queries.getAllCategories().then(({categories}) => this.props.getCategories(categories))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            queries.getCurrentCategory(this.props.category).then(({products}) => this.props.getProductCategory(products))
        }
        if(this.state.currentProductId !== prevState.currentProductId) {
            queries.getCurrentProduct(this.state.currentProductId).then(data => this.setState(
                {
                    productAttributes: {
                        ...this.state.productAttributes, id: data.id, name: data.name, brand: data.brand,
                        gallery: data.gallery, price: data.prices
                    }
                })).then(() => this.props.addSelectedProduct(this.state.productAttributes)).then(()=>this.setState({currentProductId: ''}))
        }
    }


    handleChangeCategory = (event) => this.props.getCategory(event.target.value)
    handleOnMouseEnter = (id) => this.setState({ productId: id})
    handleOnMouseLeave = () => this.setState({ productId: ''})
    handleGetCurrentProduct = (id) => this.setState({selectedProductId: id, toggle: !this.state.toggle})
    handleToggle = () => this.setState({toggle: !this.state.toggle})
    handleGetProductId = (id) => this.setState({currentProductId: id})

    render() {
        return (
            <div>
                {this.state.toggle ? <WomenPageLayout handleChangeCategory={this.handleChangeCategory}
                                                      handleOnMouseEnter={this.handleOnMouseEnter}
                                                      handleOnMouseLeave={this.handleOnMouseLeave}
                                                      handleGetCurrentProduct={this.handleGetCurrentProduct}
                                                      handleGetProductId={this.handleGetProductId}
                                                      currentProducts={this.props.currentProducts}
                                                      categories={this.props.categories}
                                                      category={this.props.category}
                                                      currentId={this.props.currentId}
                                                      addSelectedProduct={this.props.addSelectedProduct}
                                                      incrementQuantity={this.props.incrementQuantity}
                                                      productId={this.state.productId}
                                                      productAttributes={this.state.productAttributes}
                    /> :
                    <DescriptionContainer selectedProductId={this.state.selectedProductId}
                                          toggle={this.state.toggle}
                                          currentId={this.props.currentId}
                                          addSelectedProduct={this.props.addSelectedProduct}
                                          incrementQuantity={this.props.incrementQuantity}
                                          handleToggle={this.handleToggle}
                    />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.womenPage.categories,
    category: state.womenPage.category,
    currentProducts: state.womenPage.currentProducts,
    selectedProductsNames: state.popup.selectedProductsNames,
    currentId: state.currency.currentId,
})



export default connect(mapStateToProps,{getCategories, getCategory, getProductCategory,addSelectedProduct,incrementQuantity})(WomenPageContainer);