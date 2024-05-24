import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const ZH = new GestureDescription("Ж");

ZH.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ZH.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

ZH.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ZH.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

ZH.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ZH.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

ZH.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ZH.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

ZH.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ZH.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ZH;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/