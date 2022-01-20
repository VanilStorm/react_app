import React from 'react';
import logo from "../../Icons/Brand_icon.jpg"

class Logo extends React.PureComponent {
    render() {
        return (
            <div>
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Logo;