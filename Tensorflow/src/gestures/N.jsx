import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const N = new GestureDescription('Н');

N.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
N.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

N.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
N.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

N.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
N.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

N.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
N.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

N.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
N.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default N;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/