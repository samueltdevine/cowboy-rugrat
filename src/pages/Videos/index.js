import React from "react";
import styles from "./Videos.module.css";
import DragWindow from "components/DragWindow";
import Draggable from "react-draggable"; // The default
import useWindowSize from "hooks/useWindowSize.js";
import { useState } from "react";

const windows = [
  {
    x: 0,
    y: 0,
    name: "I Have A Degree",
    content: (
      <iframe
        title="featured video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/PojeWnDpkSk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    mobileContent: (
      <a href="https://www.youtube.com/watch?v=PojeWnDpkSk">
        🎓
      </a>
    ),
  },
  {
    x: 60,
    y: 123,
    name: "Cabin",
    content: (
      <iframe
        title="featured video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/jzTyGXkWfNY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    mobileContent: (
        <a href='https://www.youtube.com/watch?v=jzTyGXkWfNY'>🐑</a>
    ),
  },
  {
    x: 120,
    y: 243,
    name: "Tired",
    content: (
      <iframe
        title="featured video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/J77D_bazIo4"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    mobileContent: (
      <>
      <a href='https://www.youtube.com/watch?v=J77D_bazIo4'>😴</a>
      </>
    ),
  },
];

const Videos = () => {
  const size = useWindowSize();
  let mobileCheck = false;

  if (size.width < 800) {
    mobileCheck = true;
  }
  if (mobileCheck === false) {
    return (
      <div className={styles.videoWindow}>
        {windows.map(({ name, content, x, y }) => {
          return (
            <DragWindow name={name} x={x} y={y}>
              {content}
            </DragWindow>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.videoWindow}>
        {windows.map(({ name, mobileContent, x, y }) => {
          return (
            <DragWindow name={name} x={x} y={y}>
              {mobileContent}
            </DragWindow>
          );
        })}
      </div>
    );
  }
};

export default Videos;
