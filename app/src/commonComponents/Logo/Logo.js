import React, {Component} from 'react';
import logo from "../../Icons/Brand_icon.jpg"

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Logo;