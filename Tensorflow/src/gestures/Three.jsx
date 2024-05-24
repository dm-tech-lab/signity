import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Three = new GestureDescription("3");

Three.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

Three.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Three.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

Three.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

Three.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Three.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default Three;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/