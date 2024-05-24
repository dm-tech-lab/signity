import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const Z = new GestureDescription("З");

Z.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Z.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

Z.addCurl(Finger.Index, FingerCurl.Halfcurl, 1.0);
Z.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

Z.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Z.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

Z.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Z.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

Z.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Z.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default Z;