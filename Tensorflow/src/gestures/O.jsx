import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const O = new GestureDescription('О');

O.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
O.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

O.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
O.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

O.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
O.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

O.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
O.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

O.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
O.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default O;

/**
Thumb | Half Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up 
*/