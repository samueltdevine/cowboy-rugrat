import React from "react";
import styles from "./Beats.module.css";
const Beats = () => {
  return (
    <div className={styles.scWrapper}>
      <iframe
      title="soundcloud audio"
        width="85%"
        height="500"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1042417321%3Fsecret_token%3Ds-oCupKJt24PE&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
     
    </div>
  );
};

export default Beats;
