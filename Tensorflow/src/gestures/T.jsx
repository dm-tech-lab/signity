import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const T = new GestureDescription("Т");

T.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
T.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

T.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
T.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

T.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
T.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

T.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
T.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

T.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
T.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default T;

// Thumb | No Curl | Diagonal Down Left
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | No Curl | Vertical Down
// Pinky | Full Curl | Vertical Down