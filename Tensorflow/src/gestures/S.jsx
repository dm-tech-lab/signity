import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const S = new GestureDescription('С');

S.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
S.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

S.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
S.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

S.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
S.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

S.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
S.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

S.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
S.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default S;

// Thumb | No Curl | Horizontal Left
// Index | Half Curl | Diagonal Up Left
// Middle | Half Curl | Diagonal Up Left
// Ring | Half Curl | Diagonal Up Left
// Pinky | Half Curl | Diagonal Up Left