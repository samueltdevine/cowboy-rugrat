import React from "react";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.buttonContainer}>
      <a href={"spotify:artist:30yAH7N8EdCazhRu0xxTEX"}>
        <button className={styles.button}>Spotify</button>
      </a>
      <a target="_blank" href={"https://music.apple.com/us/artist/cowboy-rugrat/1500612545"}>
        <button className={styles.button}>Apple Music</button>
      </a>
      <a target="_blank" href={"https://en.m.wikipedia.org/wiki/Criticism_of_capitalism"}>
        <button className={styles.button}>Amazon Music</button>
      </a>
    </div>
  );
};

export default Music;
