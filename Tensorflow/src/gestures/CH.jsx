import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const CH = new GestureDescription("Ч");

CH.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CH.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

CH.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
CH.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

CH.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
CH.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

CH.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
CH.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);

CH.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
CH.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

export default CH;

// Thumb | No Curl | Diagonal Up Left
// Index | Half Curl | Diagonal Up Left
// Middle | Full Curl | Diagonal Up Left
// Ring | Full Curl | Diagonal Up Left
// Pinky | Full Curl | Vertical Up