import React, {  Component } from 'react';
import classes from './ProjectsPage.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';

class ProjectPage extends Component {
    state = {
        projects: {
            "madame-mimi's": ['react', 'web development', 'redux', 'html', 'css', "restfull api's"],
            "travel-planner": ["restfull api's", 'web development', 'html', 'css'],
            "smallfoods": ['web development', 'html', 'css'],
            "boardgame-marketplace": ['react', 'web development', 'redux', 'html', 'css', "restfull api's", 'work in progress'],
            "orbit":  ['furniture design', 'industrial design'],
            "float": ['interior design', 'industrial design'],
            "dmz":['interior design', 'industrial design'],
            "shobu":  ['boardgame design'],
            "semantic": ['web development', 'html', 'css', "restfull api's"]
        },
        labels: [],
        selectedLabels: ['web development']
      
    }

    componentDidMount() {
        let allLabels = []
        Object.keys(this.state.projects).forEach(project => {
            allLabels = allLabels.concat(this.state.projects[project])
        })
        const labelSet = new Set(allLabels)
        this.setState({labels: [...labelSet]})
    }
    
    addLabelHandeler = (event) => {
        event.preventDefault()
        const value = event.target
        if(!this.state.selectedLabels.includes(value)) {
            this.setState({selectedLabels: [...this.state.selectedLabels, event.target.value]})
        }
        
    }

    removeLabelHandler = (value) => {
        this.setState({selectedLabels: [...this.state.selectedLabels].filter(label => label !== value)})
    }

    

    render() {
        let filteredProjects = Object.keys(this.state.projects).filter(projectKey => {
            return filterArrays(this.state.selectedLabels, this.state.projects[projectKey])
        })

        let projectCards = filteredProjects.map((projectKey, index) => {
            return <ProjectCard title={projectKey} key={index}/>
        })

        const labels = this.state.labels.map(label => {
            return <option value={label} className={classes.option}>{label}</option>
        })

        const selectedLabels = this.state.selectedLabels.map((label, index) => {
            return <div className={classes.filter_label} key={label + index} onClick={() => this.removeLabelHandler(label)}>
                <p>X</p><p>{label}</p>
            </div>
        })

        return (
            <div data-test="component-project-card" className={classes.container}>
                <h1 className={classes.title}>Projects</h1>
                <div className={classes.filter}>
                    <form className={classes.filter_form}>
                        <label for="dropdown">Filter By Label</label>
                        <select className={classes.filter_select} onChange={(event) => {this.addLabelHandeler(event)}}>{labels}</select>
                    </form>
                    <div className={classes.filter_labelContainer}>
                        {selectedLabels}
                    </div>
                </div>
                <div  className={classes.cardContainer}>
                    {projectCards}
                </div>
            </div>
        )
    }
}

export const filterArrays = (arr1, arr2) => {
    const found  = arr1.some( label => arr2.includes(label));
    return found
}

export default ProjectPage;