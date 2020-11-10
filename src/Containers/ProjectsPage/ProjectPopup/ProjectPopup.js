import React from 'react';
import classes from './ProjectPopup.module.scss';
import projectData from '../projectsData.json';
import Carosell from '../../../Components/Carosell/Carosell';

const ProjectPopup = (props) => {
  const data = projectData.data[props.selectedProject];
  const showPopup = props.selectedProject !== null ? classes.show : null;

  let project;
  if (props.selectedProject !== null) {
    project = (
      <div>
        <div className={classes.mainImg}>
          <Carosell>
            {data.images.map((image, index) => {
              return (
                <div key={index} className={classes.slide}>
                  <img src={image} alt=""></img>
                </div>
              );
            })}
          </Carosell>
        </div>
        <div className={classes.title}>
          <h1>{data.title}</h1>
          <img
            src={process.env.PUBLIC_URL + '/images/cancel.png'}
            onClick={props.click}
            alt="cancel"
          />
        </div>

        <div className={classes.details}>
          {data.fullDescription.map((para) => (
            <p>{para}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={[classes.container, showPopup].join(' ')}>{project}</div>
  );
};

export default ProjectPopup;
