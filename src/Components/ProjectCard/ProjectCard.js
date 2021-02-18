import React from 'react';
import classes from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const icons = {
    React: 'React.svg',
    JavaScript: 'js.svg',
    HTML5: 'html.svg',
    CSS3: 'css.svg',
    PostgreSQL: 'postgresql.svg',
    Redux: 'redux.svg',
  };

  return (
    <article className={classes.container}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <img className={classes.gif} src={props.gif} alt="" />
      <div className={classes.links}>
        <a href={props.github}>View on Github</a>
        <a href={props.live}>View Live</a>
      </div>
      <div className={classes.description}>
        {props.description.map((para) => {
          return <p>{para}</p>;
        })}
      </div>

      <ul className={classes.technology}>
        {props.technology.map((tech) => {
          return (
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/' + icons[tech]}
                alt={tech}
              />
              <p>{tech}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ProjectCard;
