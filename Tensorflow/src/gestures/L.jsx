import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const L = new GestureDescription("Л");

L.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
L.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1);

L.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
L.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);

L.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
L.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

L.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
L.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

L.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
L.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);

export default L;
/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Vertical Down
Middle | Half Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Diagonal Down Right
*/