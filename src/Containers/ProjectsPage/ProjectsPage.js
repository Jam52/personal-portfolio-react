import React, { Component } from 'react';
import classes from './ProjectsPage.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import projectData from './projectsData.json';

class ProjectPage extends Component {
  state = {
    projects: [],
    labels: [
      'Web Development',
      'Industrial Design',
      'Interior Design',
      'Boardgame Design',
      'Furniture Design',
      'All',
    ],
    selectedLabel: 'Web Development',
    selectedProject: null,
  };

  componentDidMount() {
    this.setState({
      projects: [...projectData.data],
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onSelectChangeHandeler = (event) => {
    event.preventDefault();
    this.setState({ selectedLabel: event.target.value });
  };

  selectProjectHandler = (key) => {
    console.log(this.state.projects[key]);
    this.props.history.push(`/project/${key}`);
  };

  removeProjectPopup = () => {
    this.setState({ selectedProject: null });
  };

  render() {
    let filteredProjects = Object.keys(this.state.projects).filter(
      (projectKey) => {
        return this.state.projects[projectKey].labels.includes(
          this.state.selectedLabel,
        );
      },
    );

    let projectCards = filteredProjects.map((projectKey, index) => {
      return (
        <ProjectCard
          project={this.state.projects[projectKey]}
          key={index}
          select={() => this.selectProjectHandler(projectKey)}
        />
      );
    });

    const labels = this.state.labels.map((label) => {
      return (
        <option value={label} className={classes.option}>
          {label}
        </option>
      );
    });

    return (
      <div data-test="component-project-card" className={classes.container}>
        <div className={classes.landing}>
          <h1 className={classes.title}>
            <span>Projects</span>_
          </h1>
          <div className={classes.filter}>
            <p className={classes.para}>
              Please explore my projects below. You will find a selection of my
              web development projects so far, projects from my
              industrial/interior design career and personal projects that I am
              particularly proud of.
            </p>
            <form className={classes.filter_form}>
              <label for="dropdown">Filter By Category</label>
              <select
                className={classes.filter_select}
                onChange={(event) => {
                  this.onSelectChangeHandeler(event);
                }}
              >
                {labels}
              </select>
            </form>
          </div>
        </div>
        <div className={classes.cardContainer}>{projectCards}</div>
      </div>
    );
  }
}

export default ProjectPage;
