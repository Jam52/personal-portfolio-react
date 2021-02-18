import React, { Component } from 'react';
import classes from './ProjectsPage.module.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import projectData from './projectsData.json';
import Header from '../../Components/Header/Header';
import FadeInTransition from '../../Components/FadeInTransition/FadeInTransition';

class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  render() {
    let projectCards = projectData.data.map((project) => {
      return (
        <ProjectCard
          title={project.title}
          date={project.date}
          description={project.description}
          gif={project.gif}
          technology={project.technology}
          github={project.github}
          live={project.hosted}
        />
      );
    });

    return (
      <div data-test="component-project-card">
        <Header
          text="Portfolio Projects"
          icon={process.env.PUBLIC_URL + '/images/projects.svg'}
        />
        <FadeInTransition>
          <main className="container">
            <div className={classes.cardContainer}>{projectCards}</div>
          </main>
        </FadeInTransition>
      </div>
    );
  }
}

export default ProjectPage;
