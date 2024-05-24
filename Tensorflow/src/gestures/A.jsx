import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const A = new GestureDescription("A");

A.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
A.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

A.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
A.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

A.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
A.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

A.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
A.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

A.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
A.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default A;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/