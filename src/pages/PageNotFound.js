import React, { Component } from 'react';


class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h2>PageNotFound</h2>
                <h3>
                    No match for <code>{window.location.pathname}</code>
                </h3>
            </div>
        )
    }
}
export default PageNotFound;
