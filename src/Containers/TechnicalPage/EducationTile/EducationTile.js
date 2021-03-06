import React from 'react';
import classes from './EducationTile.module.scss';

const EducationTile = (props) => {
  console.log(props.educationAlt);
  return (
    <div data-test="component-project-card" className={classes.card}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <div className={classes.card_inner}>
          <div
            className={classes.card_front}
            style={{ backgroundColor: props.background, color: props.color }}
          >
            <h3 className={classes.text_title}>{props.title}</h3>
            <img
              data-test="card-image"
              src={process.env.PUBLIC_URL + props.educationImg}
              alt={props.educationAlt}
            />
            <p className={classes.text_para}>{props.description}</p>
          </div>
          <div
            className={classes.card_back}
            style={{ backgroundColor: props.background }}
          >
            <img
              data-test="card-image"
              src={process.env.PUBLIC_URL + props.certificateImg}
              alt={props.description}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default EducationTile;
