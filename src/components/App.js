import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  // const [posi, setPosi] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });
  const keyListener = (event) => {
    switch (event.keyCode) {
      case 39:
        setBallPosition({
          left: ballPosition.left + 5,
          top: ballPosition.top
        });
        break;
      case 40:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top + 5
        });
        break;
      case 37:
        setBallPosition({
          left: ballPosition.left - 5,
          top: ballPosition.top
        });
        break;
      case 38:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top - 5
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyListener);
    console.log("Listener is", keyListener);

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });
  //cleanup function
  // WE WROTE HERE BECAUSE AFTER FIRST RENDER THE CLEAN UP WILL EXECUTE
  // AND IT WOULD REMOVE THE PREVIOUSLY ADDED LISTENERS
  // SO THAT WON'T BE A BUNCH OF LISTENERS ATTACH WHICH COULD HINDER PERFORMANCE OF OUR APP
  // to add dependency
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute"
          }}
        ></div>
      );
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  };

  // bind ArrowRight keydown event

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
