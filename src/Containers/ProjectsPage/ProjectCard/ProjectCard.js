import React from 'react';
import classes from './ProjectCard.module.scss';

const ProjectCard = (props) => {
    
        return (
            <div data-test="component-project-card" className={classes.card}>
                <div className={classes.card_inner}>
                    <div className={classes.card_front}>
                        <img data-test="card-image" src={process.env.PUBLIC_URL + props.project.thumb} alt={props.project.title}/>
                    </div>
                    <div className={classes.card_back}>
                        <div className={classes.text}>
                            <h3 className={classes.text_title}>{props.project.title}</h3>
                            <p className={classes.text_para}>{props.project.description}</p>
                            <p className={classes.text_para___details}>{props.project.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    

}

export default ProjectCard;