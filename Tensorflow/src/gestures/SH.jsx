import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const SH = new GestureDescription("Ш");

SH.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SH.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

SH.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
SH.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

SH.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
SH.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

SH.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
SH.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

SH.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
SH.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default SH;

/*
Thumb | No Curl | Horizontal Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/