import React from 'react';
import circleIcon from "../../Icons/Circle_Icon.svg"

class CircleIcon extends React.PureComponent {
    render() {
        return (
            <div>
                <img src={circleIcon} alt="circleIcon"/>
            </div>
        );
    }
}

export default CircleIcon;