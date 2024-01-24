import React from "react";
import DigitalClock from "./components/DigitalClock";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <DigitalClock></DigitalClock>
      </div>
    </>
  );
}

export default App;
