import React from "react";
import styles from "./Home.module.css";



const Home = () => {
  return (
    <>
      <div className={styles.featuredVideo}>
        <iframe
          title="featured video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/J77D_bazIo4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Home;
