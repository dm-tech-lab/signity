import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Interval = new GestureDescription(" ");

Interval.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Interval.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

Interval.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Interval.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Interval.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Interval.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

Interval.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Interval.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

Interval.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Interval.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default Interval;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/