import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const One = new GestureDescription("1");

One.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
One.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

One.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
One.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

One.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

One.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

One.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default One;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/