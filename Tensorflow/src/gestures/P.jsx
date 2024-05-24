import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const P = new GestureDescription('П');

P.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
P.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

P.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
P.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

P.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
P.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

P.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
P.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

P.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
P.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default P;

// Thumb | No Curl | Diagonal Down Left
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | Full Curl | Vertical Down
// Pinky | Full Curl | Diagonal Down Right