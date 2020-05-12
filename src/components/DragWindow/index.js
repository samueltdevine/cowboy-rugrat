import React, { useState } from "react";
import styles from "./DragWindow.module.css";
import Draggable from "react-draggable";

const DragWindow = ({ children, name, x = 0, y = 0 }) => {
  const [isMinimized, setMinimized] = useState(false);
  return (
    <Draggable defaultPosition={{ x, y }} handle={`.${styles.dragHandle}`}>
      <div className={styles.dragWindow}>
        <div className={styles.flexVert}>
          <div className={styles.flexRight}>
            <div className={styles.dragHandle}>{name}</div>
            <button onClick={() => setMinimized(true)}>_</button>
            <button onClick={() => setMinimized(false)}>[]</button>
          </div>
          <div className={styles.content}>{!isMinimized && children}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default DragWindow;
