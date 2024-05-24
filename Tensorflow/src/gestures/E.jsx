import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const E = new GestureDescription("Е");

E.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
E.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

E.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
E.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

E.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
E.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

E.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
E.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

E.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
E.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default E;

/*
Thumb | Half Curl | Diagonal Up Right
Index | Full Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Diagonal Up Right
Pinky | Full Curl | Diagonal Up Right
*/