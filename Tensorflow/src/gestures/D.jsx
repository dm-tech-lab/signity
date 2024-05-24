import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const D = new GestureDescription("Д");

D.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
D.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

D.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
D.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

D.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
D.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

D.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
D.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

D.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
D.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default D;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Diagonal Up Right
*/