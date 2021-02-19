import React from 'react';
import icons from '../techIcons.json';
import classes from './SkillCard.module.scss';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

const SkillCard = (props) => {
  return (
    <article className={classes.container}>
      <ArticleHeader header={props.header} />

      <ul className={classes.technology}>
        {props.technology.map((tech) => {
          return (
            <li>
              <p>{tech}</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/${icons[tech]}`}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default SkillCard;
