import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Two = new GestureDescription("2");

Two.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Two.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

Two.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Two.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Two.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Two.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

Two.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Two.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

Two.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Two.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default Two;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/