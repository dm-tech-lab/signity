import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const V = new GestureDescription("В");

V.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
V.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

V.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
V.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

V.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
V.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

V.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
V.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

V.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
V.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default V;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/