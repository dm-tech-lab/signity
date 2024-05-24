import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const B = new GestureDescription("Б");

B.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
B.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

B.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
B.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

B.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
B.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

B.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
B.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

B.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
B.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default B;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/