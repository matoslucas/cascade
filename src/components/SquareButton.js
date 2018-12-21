import React from 'react';


class SquareButton extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        //this.state = { counter: 0 };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        const { color, onClick } = this.props
        onClick(color)
    }

    render() {
        const { color } = this.props
        const squareStyle = {
            border: '3px ridge #ccc',
            width: 48,
            height: 48,
            cursor: 'pointer',
        }
        const dynamicCss = {
            ...squareStyle,
            backgroundColor: color,
        }

        return (<div onClick={this.onClickHandler} style={dynamicCss}></div>)
    }

}

export default SquareButton;