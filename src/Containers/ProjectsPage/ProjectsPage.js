import React, {  Component } from 'react';
import classes from './ProjectsPage.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';

class ProjectPage extends Component {
    state = {
        projects: [
            "madame-mimi's",
            "travel-planner",
            "smallfoods",
            "boardgame-marketplace",
            "orbit",
            "float",
            "dmz",
            "shobu",
            "semantic"
        ],
      
    }

    render() {
        let projectCards = this.state.projects.map(project => {
            return <ProjectCard title={project} key={project}/>
        })

        return (
            <div data-test="component-project-card" className={classes.container}>
                <h1 className={classes.title}>Projects</h1>
                <p className={classes.para}>Please see below for my favorate projects from my web development learning so far, as well as some highlights from my industrial design career.</p>
                <div  className={classes.cardContainer}>
                    {projectCards}
                </div>
            </div>
        )
    }
}

export default ProjectPage;