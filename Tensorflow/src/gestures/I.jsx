import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const I = new GestureDescription('И');

I.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
I.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

I.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
I.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

I.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
I.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

I.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
I.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

I.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
I.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default I;

/*
Thumb | Half Curl | Horizontal Left
Index | Full Curl | Diagonal Up Left
Middle | Half Curl | Diagonal Up Left
Ring | No Curl | Diagonal Up Left
Pinky | No Curl | Vertical Up
*/