import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const M = new GestureDescription("М");

M.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
M.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

M.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
M.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

M.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
M.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

M.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
M.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

M.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
M.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default M;

/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Diagonal Down Left
Middle | No Curl | Vertical Down
Ring | No Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/