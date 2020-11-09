import React, { Component } from 'react';
import classes from './ProjectCard.module.scss';

class ProjectCard extends Component {
    state = {
        onHover: false,
        projects: {
            "madame-mimi's": {title: "Madame Mimi's", description: "A static web application to expore cocktails.", details: "React, Redux, RESTful Apis", thumb: "/images/madame-mimis-thumb.jpg"},
            "travel-planner": {title: "Travel Planner", description: "Udacity Capstone Project - Travel planner.", details: "Html, CSS, JavaScript,  RESTful Apis", thumb: "/images/travel-thumb.jpg"},
            "smallfoods": {title: "SmallFoods", description: "A layout exercise set by an acquaintance at a marketing agency.", details: "Html, CSS, JavaScript", thumb: "/images/smallfoods-thumb.jpg"},
            "orbit": {title: "Orbit Coffee Table", description: "A Coffee table designed to be able to pack flat for shipping.", details: "Furniture Design", thumb: "/images/orbit-thumb.jpg"},
            "float": {title: "Float Escape", description: "An interior design project for a wellness treatment business.", details: "Interior Design", thumb: "/images/float-thumb.jpg"},
            "dmz": {title: "DMZ", description: "An reception design project for a tech incubartor in Toronto.", details: "Interior Design", thumb: "/images/dmz-thumb.jpg"},
            "boardgame-marketplace": {title: "Boardgame Marketplace", description: "Work in progress", details: "React, Redux, RESTful Api, PostgreSQL", thumb: "/images/boardgame-thumb.jpg"},
            "shobu": {title: "Shobu", description: "A two player abstract strategy game, designed to be a modern classic.", details: "Boardgame Design", thumb: "/images/shobu-thumb.jpg"},
            "semantic": {title: "Semantic Evaluator", description: "Udemy Project to semantically evaluate text for url.", details: "Html, Css, JavaScript, RESTful Api", thumb: "/images/semantic-thumb.jpg"},
            "personal": {title: "Personal Portfolio", description: "A static web page to present my accomplishments and projects so far.", details: "Html, Css, JavaScript, React", thumb: "/images/personal-thumb.jpg"}
        },
    }



    render() {
        const title = this.props.title;
        const project = this.state.projects[title]

        return (
            <div data-test="component-project-card" className={classes.card}>
                <div className={classes.card_inner}>
                    <div className={classes.card_front}>
                        <img data-test="card-image" src={process.env.PUBLIC_URL + project.thumb} alt={project.title}/>
                    </div>
                    <div className={classes.card_back}>
                        <div className={classes.text}>
                            <h3 className={classes.text_title}>{project.title}</h3>
                            <p className={classes.text_para}>{project.description}</p>
                            <p className={classes.text_para___details}>{project.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectCard;