import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Yes = new GestureDescription("Да!");

Yes.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Yes.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

Yes.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
Yes.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Yes.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Yes.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

Yes.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Yes.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

Yes.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Yes.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default Yes;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Horizontal Left
Pinky | Full Curl | Horizontal Left
*/