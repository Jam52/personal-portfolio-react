import React from 'react';
import classes from './ProjectCard.module.scss';
import icons from '../techIcons.json';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

const ProjectCard = (props) => {
  return (
    <article className={classes.container}>
      <ArticleHeader header={props.header} />
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
