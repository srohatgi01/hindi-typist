import React from "react";
import { useState, useEffect } from "react";

function App() {
  const sentence = "hi linkedin, this is engine boilerplate";
  const [currIndex, setCurrIndex] = useState(0);
  const [userFeedback, setUserFeedBack] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key == sentence[currIndex]) {
        setUserFeedBack("correct");
        setCurrIndex((idx) => idx + 1);
      } else {
        setUserFeedBack("incorrect");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currIndex]);

  return (
    <div style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <div
        style={{
          display: "flex",
          height: "60vh",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-wrap",
          fontFamily: "Tiro Devanagari Hindi",
        }}
      >
        <span
          style={{
            backgroundColor: "rgba(109, 255, 0, 0.37)",
            fontSize: "30px",
          }}
        >
          {sentence.substring(0, currIndex)}
        </span>
        <span
          style={{
            fontSize: "30px",
            color: userFeedback === "incorrect" ? "red" : "black",
          }}
        >
          {sentence[currIndex]}
        </span>
        <span style={{ color: "grey", fontSize: "30px" }}>
          {sentence.substring(currIndex + 1, sentence.length)}
        </span>
        {/* <h1>{'\u0928\u0041'}</h1> */}
      </div>

      <h1>{sentence[currIndex]}</h1>
    </div>
  );
}

export default App;
