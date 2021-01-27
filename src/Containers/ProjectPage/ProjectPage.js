import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import Carosel from '../../Components/Carosell/Carosell';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import projectsData from '../../Containers/ProjectsPage/projectsData.json';
import classes from './ProjectPage.module.scss';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

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
      <main>
        <div className={classes.description}>{description}</div>
        {data.gif ? (
          <img className={classes.gif} src={data.gif} alt="" />
        ) : (
          <ImageCarousel urls={data.images} />
        )}
        {data.github ? (
          <div className={classes.links}>
            <a href={data.github}>View On Github</a>
            <a href={data.hosted}>View live</a>
          </div>
        ) : null}

        <button className={classes.backButton} onClick={() => history.goBack()}>
          Back
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
