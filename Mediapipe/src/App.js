import "./App.css";
import Webcam from "react-webcam";
import { useState, useRef, useEffect } from "react";
import Gestures from "./gestures/Gestures";
import * as Camera from "@mediapipe/camera_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

const fingerpose = require("fingerpose");

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [sentence] = useState([]);

	const [thumbL, setThumbL] = useState("Thumb");
	const [indexL, setIndexL] = useState("Index");
	const [middleL, setMiddleL] = useState("Middle");
	const [ringL, setRingL] = useState("Ring");
	const [pinkyL, setPinkyL] = useState("Pinky");

	const [thumbR, setThumbR] = useState("Thumb");
	const [indexR, setIndexR] = useState("Index");
	const [middleR, setMiddleR] = useState("Middle");
	const [ringR, setRingR] = useState("Ring");
	const [pinkyR, setPinkyR] = useState("Pinky");

  const onResults = (result) => {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const ctx = canvasRef.current.getContext("2d");

    ctx.save();
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.drawImage(result.image, 0, 0, canvasRef.current.width, canvasRef.current.height);

    if (result.multiHandLandmarks) {
      for (const landmarks of result.multiHandLandmarks) {
        drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 3 });
        drawLandmarks(ctx, landmarks, { color: '#FF0000', lineWidth: 2 });
      }
    }

    ctx.restore();

    if (result.multiHandLandmarks && result.multiHandedness) {
      const GE = new fingerpose.GestureEstimator([
        Gestures.AL, Gestures.AR,
        Gestures.BL, Gestures.BR,
        Gestures.CHL, Gestures.CHR,
        Gestures.DL, Gestures.DR,
        Gestures.EL, Gestures.ER,
        Gestures.EndL, Gestures.EndR,
        Gestures.FL, Gestures.FR,
        Gestures.FiveL, Gestures.FiveR,
        Gestures.FourL, Gestures.FourR,
        Gestures.GL, Gestures.GR,
        Gestures.HL, Gestures.HR,
        Gestures.HelloL, Gestures.HelloR,
        Gestures.IL, Gestures.IR,
        Gestures.IntervalL, Gestures.IntervalR,
        Gestures.KL, Gestures.KR,
        Gestures.LL, Gestures.LR,
        Gestures.ML, Gestures.MR,
        Gestures.NL, Gestures.NR,
        Gestures.NoL, Gestures.NoR,
        Gestures.OL, Gestures.OR,
        Gestures.OneL, Gestures.OneR,
        Gestures.PL, Gestures.PR,
        Gestures.QL, Gestures.QR,
        Gestures.RL, Gestures.RR,
        Gestures.SL, Gestures.SR,
        Gestures.SHL, Gestures.SHR,
        Gestures.TL, Gestures.TR,
        Gestures.ThreeL, Gestures.ThreeR,
        Gestures.TSL, Gestures.TSR,
        Gestures.TwoL, Gestures.TwoR,
        Gestures.UL, Gestures.UR,
        Gestures.VL, Gestures.VR,
        Gestures.YL, Gestures.YR,
        Gestures.YesL, Gestures.YesR,
        Gestures.YUL, Gestures.YUR,
        Gestures.ZL, Gestures.ZR,
        Gestures.ZHL, Gestures.ZHR
      ]);

      if (result.multiHandedness.length === 1) {
        const multiHandLandmarks = result.multiHandLandmarks[0];
        const landmarks = multiHandLandmarks.map(landmark => [landmark.x, landmark.y, landmark.z]);
        const gesture = GE.estimate(landmarks, 10);

        if (result.multiHandedness[0].label === "Left") {
          setThumbL(`${gesture.poseData[0][0]} | ${gesture.poseData[0][1]} | ${gesture.poseData[0][2]}`);
          setIndexL(`${gesture.poseData[1][0]} | ${gesture.poseData[1][1]} | ${gesture.poseData[1][2]}`);
          setMiddleL(`${gesture.poseData[2][0]} | ${gesture.poseData[2][1]} | ${gesture.poseData[2][2]}`);
          setRingL(`${gesture.poseData[3][0]} | ${gesture.poseData[3][1]} | ${gesture.poseData[3][2]}`);
          setPinkyL(`${gesture.poseData[4][0]} | ${gesture.poseData[4][1]} | ${gesture.poseData[4][2]}`);

          setThumbR("Thumb");
          setIndexR("Index");
          setMiddleR("Middle");
          setRingR("Ring");
          setPinkyR("Pinky");
        } else {
          setThumbL("Thumb");
          setIndexL("Index");
          setMiddleL("Middle");
          setRingL("Ring");
          setPinkyL("Pinky");

          setThumbR(`${gesture.poseData[0][0]} | ${gesture.poseData[0][1]} | ${gesture.poseData[0][2]}`);
          setIndexR(`${gesture.poseData[1][0]} | ${gesture.poseData[1][1]} | ${gesture.poseData[1][2]}`);
          setMiddleR(`${gesture.poseData[2][0]} | ${gesture.poseData[2][1]} | ${gesture.poseData[2][2]}`);
          setRingR(`${gesture.poseData[3][0]} | ${gesture.poseData[3][1]} | ${gesture.poseData[3][2]}`);
          setPinkyR(`${gesture.poseData[4][0]} | ${gesture.poseData[4][1]} | ${gesture.poseData[4][2]}`);
        }

        if (gesture.gestures[0]) {
          const sign = gesture.gestures[0].name;

          if (sentence.length === 0 && sign !== ".") {
            sentence.push(sign);
          }
          else if (sign === "Н" && sentence[sentence.length - 2] !== "Н" && sentence[sentence.length - 1] === "Н") {
            sentence.push(sign);
          }
          else if (sign === "Т" && sentence[sentence.length - 2] !== "Т" && sentence[sentence.length - 1] === "Т") {
            sentence.push(sign);
          }
          else if (sentence[sentence.length - 1] !== sign) {
            sentence.push(sign);
          } else if (sign === ".") {
            const message = sentence.filter(x => x !== ".").join("");

            if (message) 
              console.log(message);

            sentence.length = 0;
          }
        }
      } else if (result.multiHandedness.length === 2) {
        const multiLeftHandLandmarks = result.multiHandLandmarks[0];
        const multiRightHandLandmarks = result.multiHandLandmarks[1];

        const leftLandmarks = multiLeftHandLandmarks.map(landmark => [landmark.x, landmark.y, landmark.z]);
        const rightLandmarks = multiRightHandLandmarks.map(landmark => [landmark.x, landmark.y, landmark.z]);

        const leftGesture = GE.estimate(leftLandmarks, 10);
        const rightGesture = GE.estimate(rightLandmarks, 10);

        setThumbL(`${leftGesture.poseData[0][0]} | ${leftGesture.poseData[0][1]} | ${leftGesture.poseData[0][2]}`);
        setIndexL(`${leftGesture.poseData[1][0]} | ${leftGesture.poseData[1][1]} | ${leftGesture.poseData[1][2]}`);
        setMiddleL(`${leftGesture.poseData[2][0]} | ${leftGesture.poseData[2][1]} | ${leftGesture.poseData[2][2]}`);
        setRingL(`${leftGesture.poseData[3][0]} | ${leftGesture.poseData[3][1]} | ${leftGesture.poseData[3][2]}`);
        setPinkyL(`${leftGesture.poseData[4][0]} | ${leftGesture.poseData[4][1]} | ${leftGesture.poseData[4][2]}`);

        setThumbR(`${rightGesture.poseData[0][0]} | ${rightGesture.poseData[0][1]} | ${rightGesture.poseData[0][2]}`);
        setIndexR(`${rightGesture.poseData[1][0]} | ${rightGesture.poseData[1][1]} | ${rightGesture.poseData[1][2]}`);
        setMiddleR(`${rightGesture.poseData[2][0]} | ${rightGesture.poseData[2][1]} | ${rightGesture.poseData[2][2]}`);
        setRingR(`${rightGesture.poseData[3][0]} | ${rightGesture.poseData[3][1]} | ${rightGesture.poseData[3][2]}`);
        setPinkyR(`${rightGesture.poseData[4][0]} | ${rightGesture.poseData[4][1]} | ${rightGesture.poseData[4][2]}`);

        if (leftGesture.gestures[0] && rightGesture.gestures[0]) {
          const signL = leftGesture.gestures[0].name;
          const signR = rightGesture.gestures[0].name;

          if (sentence[sentence.length - 1] !== "Благодаря ти!" && (signL === "В" && signR === "В")) {
            sentence.push("Благодаря ти!");
          } else if (sentence[sentence.length - 1] !== "6" && ((signL === "5" && signR === "1") || (signL === "1" && signR === "5"))) {
            sentence.push("6");
          } else if (sentence[sentence.length - 1] !== "7" && ((signL === "5" && signR === "2") || (signL === "2" && signR === "5"))) {
            sentence.push("7");
          } else if (sentence[sentence.length - 1] !== "8" && ((signL === "5" && signR === "3") || (signL === "3" && signR === "5"))) {
            sentence.push("8");
          } else if (sentence[sentence.length - 1] !== "9" && ((signL === "5" && signR === "4") || (signL === "4" && signR === "5"))) {
            sentence.push("9");
          } else if (sentence[sentence.length - 1] !== "10" && ((signL === "5" && signR === "5") || (signL === "5" && signR === "5"))) {
            sentence.push("10");
          }
        }
      } else {
        setThumbL("Thumb");
        setIndexL("Index");
        setMiddleL("Middle");
        setRingL("Ring");
        setPinkyL("Pinky");

        setThumbR("Thumb");
        setIndexR("Index");
        setMiddleR("Middle");
        setRingR("Ring");
        setPinkyR("Pinky");
      }
    }
  }

  const deleteCharacter = () => {
    sentence.pop();
  }

  const clearSentence = () => {
    // sentence.splice(0, sentence.length);
    sentence.length = 0;
  }

  useEffect(() => {
    const hands = new Hands({ locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.9,
      minTrackingConfidence: 0.9
    });
    
    hands.onResults(onResults);

    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
      const camera = new Camera.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });

      camera.start();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div style={{ margin: "20px" }}>
            <div>Left Hand:</div>
            <div>{thumbR}</div>
            <div>{indexR}</div>
            <div>{middleR}</div>
            <div>{ringR}</div>
            <div>{pinkyR}</div>
          </div>

          <div style={{ margin: "20px" }}>
            <div>Right Hand:</div>
            <div>{thumbL}</div>
            <div>{indexL}</div>
            <div>{middleL}</div>
            <div>{ringL}</div>
            <div>{pinkyL}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Webcam
            ref={webcamRef}
            style={{
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              textAlign: "center",
              zindex: 10,
              width: 640,
              height: 480,
            }}
          />
        </div>

        <div>{sentence.length === 0 ? "Sentence" : sentence}</div>

        <div>
          <button onClick={deleteCharacter}>Delete</button>
          <button onClick={clearSentence}>Clear</button>
        </div>
      </header>
    </div>
  );
}

export default App;