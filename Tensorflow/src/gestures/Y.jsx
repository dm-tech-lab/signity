import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const Y = new GestureDescription("Ъ");

Y.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Y.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

Y.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Y.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

Y.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Y.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

Y.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Y.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

Y.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Y.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default Y;

// Thumb | No Curl | Horizontal Left
// Index | No Curl | Vertical Up
// Middle | Full Curl | Diagonal Up Left
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Vertical Up