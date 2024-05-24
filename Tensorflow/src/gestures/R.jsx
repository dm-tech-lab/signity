import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const R = new GestureDescription('Р');

R.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
R.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

R.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
R.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

R.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
R.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

R.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
R.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

R.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
R.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default R;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/