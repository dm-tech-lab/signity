import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const U = new GestureDescription("У");

U.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
U.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

U.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
U.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

U.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
U.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

U.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
U.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

U.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
U.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default U;

// Thumb | No Curl | Horizontal Left
// Index | Full Curl | Diagonal Up Left
// Middle | Full Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | No Curl | Vertical Up