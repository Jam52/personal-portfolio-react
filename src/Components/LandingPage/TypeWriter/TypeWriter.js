import React, {Component} from 'react';
import classes from './TypeRiter.module.scss';

class TypeWriter extends Component {
    state = {
        open: false
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.word !== prevProps.word) {
            this.setState({open: !this.state.open})
        }
    }

    render() {
        let typeClass = this.state.open ? classes.typewriterTwo: classes.typewriter;
        return (
            <div className={classes.typeContainer}>
                <h1 key={this.props.word} className={typeClass}>{this.props.word}<span className={classes.blink}>_</span></h1>
            </div>
        )
    }
}

export default TypeWriter;