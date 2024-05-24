import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const No = new GestureDescription("Не!");

No.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
No.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

No.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
No.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

No.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
No.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

No.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
No.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

No.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
No.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default No;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/