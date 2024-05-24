import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const H = new GestureDescription("Х");

H.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
H.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

H.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
H.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

H.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
H.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

H.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
H.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

H.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
H.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default H;

/*
Thumb | No Curl | Diagonal Up Left
Index | Half Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Diagonal Up Left
Pinky | Full Curl | Diagonal Up Left
*/