import React, {Component} from 'react';
import style from "./PageNotFound.module.css"

class PageNotFound extends Component {
    render() {
        return (
            <div className={style.header}>
                <h1>Page not found!</h1>
            </div>
        );
    }
}

export default PageNotFound;