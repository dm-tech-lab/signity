import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const K = new GestureDescription('К');

K.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
K.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

K.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
K.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

K.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
K.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

K.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
K.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

K.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
K.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default K;