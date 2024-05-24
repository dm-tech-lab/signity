import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Four = new GestureDescription("4");

Four.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Four.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

Four.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Four.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Four.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Four.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

Four.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Four.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

Four.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
Four.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default Four;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/