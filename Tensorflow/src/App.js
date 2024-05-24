import './App.css';
import Webcam from "react-webcam";
import Gestures from "./gestures/Gestures";
import React, { useEffect, useState, useRef } from "react";

require("@tensorflow/tfjs");
const fingerpose = require("fingerpose");
const handpose = require("@tensorflow-models/handpose");

function App() {
	const webcamRef = useRef(null);
	const [enabled, setEnabled] = useState(false);
	const [sentence, setSentence] = useState([]);
	const [confidence, setConfidence] = useState("Confidence");
	const [thumb, setThumb] = useState("Thumb");
	const [index, setIndex] = useState("Index");
	const [middle, setMiddle] = useState("Middle");
	const [ring, setRing] = useState("Ring");
	const [pinky, setPinky] = useState("Pinky");

  const deleteCharacter = () => {
    let array = sentence;
    array.pop();
    setSentence(array);
  }

  const classify = async (model) => {
		if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
		  const webcam = webcamRef.current.video;
		  const hand = await model.estimateHands(webcam);
      console.log(hand);
	
		  if (hand.length > 0) {
        const GE = new fingerpose.GestureEstimator([
          Gestures.A, Gestures.B, Gestures.V, Gestures.G, Gestures.D, Gestures.E, Gestures.ZH,
          Gestures.Z, Gestures.I, Gestures.K, Gestures.L, Gestures.M, Gestures.N, Gestures.O,
          Gestures.P, Gestures.R, Gestures.S, Gestures.T, Gestures.U, Gestures.F, Gestures.H,
          Gestures.C, Gestures.CH, Gestures.SH, Gestures.Y, Gestures.IU, Gestures.Q,

          Gestures.Yes, Gestures.No,
          Gestures.One, Gestures.Two, Gestures.Three, Gestures.Four, Gestures.Five,
          Gestures.Interval, Gestures.End
        ]);
        
        const gesture = await GE.estimate(hand[0].landmarks, 10);
        console.log(gesture);

        setThumb(`${gesture.poseData[0][0]} | ${gesture.poseData[0][1]} | ${gesture.poseData[0][2]}`);
        setIndex(`${gesture.poseData[1][0]} | ${gesture.poseData[1][1]} | ${gesture.poseData[1][2]}`);
        setMiddle(`${gesture.poseData[2][0]} | ${gesture.poseData[2][1]} | ${gesture.poseData[2][2]}`);
        setRing(`${gesture.poseData[3][0]} | ${gesture.poseData[3][1]} | ${gesture.poseData[3][2]}`);
        setPinky(`${gesture.poseData[4][0]} | ${gesture.poseData[4][1]} | ${gesture.poseData[4][2]}`);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const score = gesture.gestures.map(prediction => prediction.score);
          const max_score = score.indexOf(Math.max.apply(null, score));

          setConfidence(gesture.gestures[max_score].name + " - " + Math.round(gesture.gestures[max_score].score * 10) + "%");
    
          if (gesture !== undefined && gesture !== null) {
            const sign = gesture.gestures[max_score].name;
            console.log(sign);
      
            if (sentence.length === 0)
            {
              let array = sentence;
              array.push(sign);
              setSentence(array);
            }
            else if (sign === "Н" && sentence[sentence.length - 2] !== "Н" && sentence[sentence.length - 1] === "Н")
            {
              let array = sentence;
              array.push(sign);
              setSentence(array);
            }
            else if (sign === "Т" && sentence[sentence.length - 2] !== "Т" && sentence[sentence.length - 1] === "Т")
            {
              let array = sentence;
              array.push(sign);
              setSentence(array);
            }
            else if (sentence[sentence.length - 1] !== sign)
            {
              let array = sentence;
              array.push(sign);
              setSentence(array);
            }
          }
        }
		  }
		}
	}

  const detect = async () => {
    const model = await handpose.load();
    console.log("Model loaded successfully!");
  
    setInterval(() => {
      classify(model);
    }, 10);
  }

  useEffect(() => {
    detect();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>{sentence.length === 0 ? "Sentence" : sentence}</div>
        <div>{confidence}</div>

        {enabled && <Webcam ref={webcamRef} mirrored={true}/>}

        <div>
          {enabled ? <button onClick={() => setEnabled(false)}>Stop</button> : <button onClick={() => setEnabled(true)}>Start</button>}
          <button onClick={() => deleteCharacter()}>Delete</button>
        </div>

        <div>{thumb}</div>
        <div>{index}</div>
        <div>{middle}</div>
        <div>{ring}</div>
        <div>{pinky}</div>
      </header>
    </div>
  );
}

export default App;