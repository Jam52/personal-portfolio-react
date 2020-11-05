import React, {Component} from 'react';
import classes from './AboutMeTransition.module.scss';
import TypeWriter from './TypeWriter/TypeWriter';


class LandingPage extends Component {
 
    state = {
        words: ['a web developer', 'a designer', 'a life long learner', 'an avid reader', 'a boardgame designer', 'a father', 'a guitarist', 'a sci-fi lover', 'a drummer'],
        currentWord: 'a web developer',
        count: 1

    }

    componentDidMount() {
        this.interval = setInterval(() => this.triggerNewWord(), 3000);
    }

    componentWillUnmount() {
         clearInterval(this.interval);
    }

    triggerNewWord = () => {
        const currentCount = this.state.count % this.state.words.length;
        this.setState({count: this.state.count + 1})
        this.setState({currentWord: this.state.words[currentCount]})
    }

    render () {

        return (
        
                <div className={classes.header}>
                    <h1>Hi, My name is Jamie and I am</h1>
                    <TypeWriter word={this.state.currentWord}/>
                </div> 
    
        )
    }
    
}

export default LandingPage;