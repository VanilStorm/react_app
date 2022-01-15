import React, {Component} from 'react';
import HeaderLayout from "../component/HeaderLayout";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    state = {
        isToggle: false,
    }

    handleChangeToggle = boolean => this.setState({isToggle: boolean})

    render() {
        return ( <>
                <HeaderLayout isToggle={this.state.isToggle}
                              handleChangeToggle={this.handleChangeToggle}
                              selectedProducts={this.props.selectedProducts}
                />
            </>
            );
    }
}

const mapStateToProps = state => ({
    selectedProducts: state.popup.selectedProducts,
})

export default connect(mapStateToProps, null)(HeaderContainer);