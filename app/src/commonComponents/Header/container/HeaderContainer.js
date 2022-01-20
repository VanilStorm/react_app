import React, {Component} from 'react';
import HeaderLayout from "../component/HeaderLayout";

import {connect} from "react-redux";
import {queries} from "../../../server/queries";
import {getCategories, getCategory, getProductCategory} from "../../../redux/reducers/mainPage/mainPageReducer";

class HeaderContainer extends Component {
    state = {
        isToggle: false,
    }

    componentDidMount() {
        queries.getAllCategories().then(({categories}) => this.props.getCategories(categories))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            queries.getCurrentCategory(this.props.category).then(({products}) => this.props.getProductCategory(products))
        }
    }

    handleChangeToggle = boolean => this.setState({isToggle: boolean})
    handleChangeCategory = (event) => this.props.getCategory(event.target.value)

    render() {
        return ( <>
                <HeaderLayout isToggle={this.state.isToggle}
                              handleChangeToggle={this.handleChangeToggle}
                              handleChangeCategory={this.handleChangeCategory}
                              categories={this.props.categories}
                              selectedProducts={this.props.selectedProducts}
                />
            </>
            );
    }
}

const mapStateToProps = state => ({
    selectedProducts: state.cartPopup.selectedProducts,
    categories: state.mainPage.categories,
    category: state.mainPage.category,

})

export default connect(mapStateToProps, {getCategories,getCategory,getProductCategory})(HeaderContainer);