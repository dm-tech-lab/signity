import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const F = new GestureDescription("Ф");

F.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
F.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

F.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
F.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

F.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
F.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

F.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
F.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

F.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
F.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default F;

// Thumb | No Curl | Vertical Up
// Index | Half Curl | Horizontal Left
// Middle | Half Curl | Horizontal Left
// Ring | Half Curl | Horizontal Left
// Pinky | Half Curl | Horizontal Left