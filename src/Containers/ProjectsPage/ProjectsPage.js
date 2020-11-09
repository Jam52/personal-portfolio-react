import React, {  Component } from 'react';
import classes from './ProjectsPage.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';

class ProjectPage extends Component {
    state = {
        projects: {
            "madame-mimi's": ['all', 'web development'],
            "travel-planner": ['all', 'web development'],
            "smallfoods": ['all','web development' ],
            "boardgame-marketplace": ['all','web development'],
            "orbit":  ['all','furniture design', 'industrial design'],
            "float": ['all','interior design', 'industrial design'],
            "dmz":['all','interior design', 'industrial design'],
            "shobu":  ['all','boardgame design'],
            "semantic": ['all','web development'],
            "personal": ['all',  'web development']
        },
        labels: ['web development', 'industrial design', 'interior design', 'boardgame design', 'furniture design',  'all'],
        selectedLabel: 'web development'
      
    }


    onSelectChangeHandeler = (event) => {
        event.preventDefault()
        this.setState({selectedLabel: event.target.value})
    }
    

    render() {
        let filteredProjects = Object.keys(this.state.projects).filter(projectKey => {
            return this.state.projects[projectKey].includes(this.state.selectedLabel)
        })

        let projectCards = filteredProjects.sort().map((projectKey, index) => {
            return <ProjectCard title={projectKey} key={index}/>
        })

        const labels = this.state.labels.map(label => {
            return <option value={label} className={classes.option}>{label}</option>
        })

        return (
            <div data-test="component-project-card" className={classes.container}>
                <div className={classes.landing}>
                    <h1 className={classes.title}>Projects_</h1>
                    <div className={classes.filter}>
                        <div>
                            <p className={classes.para}>Please explore my projects below.</p>
                            <p className={classes.para}>You will find a selection of my web development projects so far, projects from my industrial/interior design career and personal projects that I am particularly proud of</p> 
                        </div>
                        <form className={classes.filter_form}>
                            <label for="dropdown">Filter By Category</label>
                            <select className={classes.filter_select} onChange={(event) => {this.onSelectChangeHandeler(event)}}>{labels}</select>
                        </form>
                    </div>
                </div>
                
                <div  className={classes.cardContainer}>
                    {projectCards}
                </div>
            </div>
        )
    }
}


export default ProjectPage;