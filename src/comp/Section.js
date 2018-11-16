import React, { PureComponent } from 'react';

class Section extends PureComponent {
    render() {
        const { id, children } = this.props;
        return (
            <div id={id} style={{ marginTop: 160 }}>
                {children}
            </div>
        )
    }
}
export default Section
