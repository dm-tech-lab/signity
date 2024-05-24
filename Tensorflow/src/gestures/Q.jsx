import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const Q = new GestureDescription('Я');

Q.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Q.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

Q.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Q.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

Q.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Q.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

Q.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Q.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

Q.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Q.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default Q;

/*
Thumb | Half Curl | Diagonal Up Right
Index | No Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | Full Curl | Diagonal Up Right
Pinky | Full Curl | Diagonal Up Right
*/