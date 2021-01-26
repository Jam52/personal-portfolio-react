import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Carosel from '../../Components/Carosell/Carosell';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import projectsData from '../../Containers/ProjectsPage/projectsData.json';
import classes from './ProjectPage.module.scss';

const ProjectPage = () => {
  let { id } = useParams();
  const history = useHistory();
  const [data] = useState(projectsData.data[id]);

  const description = data.fullDescription.map((para) => {
    return <p className={classes.para}>{para}</p>;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <div className={classes.container}>
      <Header text={data.title} />
      <p className={classes.details}>{data.details}</p>

      <div className={classes.mainImg}>
        <Carosel>
          {data.images.map((image, index) => {
            return (
              <div key={index} className={classes.slide}>
                <img src={image} alt=""></img>
              </div>
            );
          })}
        </Carosel>
      </div>
      <div className={classes.description}>{description}</div>
      <button className={classes.backButton} onClick={() => history.goBack()}>
        Back
      </button>
      <Footer />
    </div>
  );
};

export default ProjectPage;
