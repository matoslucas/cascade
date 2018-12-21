import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import SquareButton from '../components/SquareButton'

const styles = theme => ({
    card: {
        maxWidth: 800,
        margin: 10,
    },
    content: {
        height: 80,
    },
    actions: {
        justifyContent: 'center'
    },
    media: {
        height: 260,
        paddingTop: '56.25%', // 16:9
        backgroundColor: '#601e1f',
    },
    title: {
        fontFamily: 'Cabin Sketch',
        color: '#9e9e9e'
    },
    cyan: {
        fontFamily: 'Cabin Sketch',
        color: '#00bcd4'
    },
    red: {
        fontFamily: 'Cabin Sketch',
        color: '#f44336'
    },
    green: {
        fontFamily: 'Cabin Sketch',
        color: '#4caf50'
    },
    orange: {
        fontFamily: 'Cabin Sketch',
        color: '#ff9800'
    }
});


class ProductCard extends React.Component {

    constructor(props) {
        super(props)
        // Don't call this.setState() here!
        const color = props.color ? props.color : '#fff'
        this.state = {
            imgStyle: {
                height: 260,
                paddingTop: '56.25%',
                backgroundColor: color,
            },
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(color) {

        this.setState({
            imgStyle: {
                ...this.state.imgStyle,
                backgroundColor: color,
            }
        })
    }

    renderTools(data) {
        return data ? data.map((color, index) => {
            return <SquareButton key={index} color={color} onClick={this.onClickHandler} />
        }) : null

    }

    render() {
        const { imgStyle } = this.state
        const { classes, img, alt, title, data } = this.props

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        style={imgStyle}
                        image={img}
                        title={alt}
                    />
                    <CardContent className={classes.content}>
                        <h4 className={classes.title}>
                            {title}
                        </h4>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.renderTools(data)}
                </CardActions>

            </Card>
        );
    }
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
