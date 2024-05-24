import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const C = new GestureDescription('Ц');

C.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
C.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

C.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
C.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

C.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
C.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

C.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
C.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

C.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
C.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

export default C;

// Thumb | Half Curl | Diagonal Up Right
// Index | No Curl | Vertical Up
// Middle | No Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Diagonal Up Right