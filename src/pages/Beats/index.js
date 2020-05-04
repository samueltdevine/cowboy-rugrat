import React from "react";
import styles from "./Beats.module.css";
const Beats = () => {
  return (
    <div>
      <iframe
      title="soundcloud audio"
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1042417321%3Fsecret_token%3Ds-oCupKJt24PE&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        className={styles.iframeDiv}
      >
        <a
          href="https://soundcloud.com/lev-dev"
          title="Lev Dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iframeAnchor}
        >
          Lev Dev
        </a>{" "}
        ·{" "}
        <a
        rel="noopener noreferrer"
          href="https://soundcloud.com/lev-dev/sets/deck/s-oCupKJt24PE"
          title="deck"
          target="_blank"
          className={styles.iframeAnchor}
        >
          deck
        </a>
      </div>
    </div>
  );
};

export default Beats;
