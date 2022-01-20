import React from 'react';
import {connect} from "react-redux";

import {queries} from "../../../server/queries";
import {getCategories, getCategory, getProductCategory} from "../../../redux/reducers/mainPage/mainPageReducer";
import {
    addSelectedProduct,
    incrementQuantity, productFilter,
} from "../../../redux/reducers/cartPopup/cartPopupReducer";

import WomenPageLayout from "../component/MainPageLayout";
import DescriptionContainer from "../../../commonComponents/ProductDescriptionPage/container/DescriptionContainer";

class MainPageContainer extends React.Component {
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


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.currentProductId !== prevState.currentProductId) {
            queries.getCurrentProduct(this.state.currentProductId).then(({id, name, brand, gallery, prices}) => this.setState(
                {
                    productAttributes: {
                        ...this.state.productAttributes, id: id, name: name, brand: brand,
                        gallery: gallery, price: prices
                    }
                }))
                .then(() => this.props.addSelectedProduct(this.state.productAttributes))
                .then(() => this.handleFilter())
        }
    }


    handleChangeCategory = (event) => this.props.getCategory(event.target.value)
    handleOnMouseEnter = (id) => this.setState({ productId: id})
    handleOnMouseLeave = () => this.setState({ productId: ''})
    handleGetCurrentProduct = (id) => this.setState({selectedProductId: id, toggle: !this.state.toggle})
    handleToggle = () => this.setState({toggle: !this.state.toggle})
    handleGetProductId = (id) => this.setState({currentProductId: id})
    handleFilter= () => this.props.productFilter(this.state.productAttributes)


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
                                          selectedProducts={this.props.selectedProducts}
                                          productFilter={this.props.productFilter}
                                          handleToggle={this.handleToggle}
                    />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.mainPage.categories,
    category: state.mainPage.category,
    currentProducts: state.mainPage.currentProducts,
    currentId: state.currency.currentId,
    selectedProducts: state.cartPopup.selectedProducts
})



export default connect(mapStateToProps,{
    getCategories, getCategory, productFilter,
    getProductCategory,addSelectedProduct,incrementQuantity
})(MainPageContainer);