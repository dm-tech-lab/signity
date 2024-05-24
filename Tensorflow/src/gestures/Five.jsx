import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const Five = new GestureDescription("5");

Five.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Five.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

Five.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Five.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

Five.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Five.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

Five.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Five.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

Five.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
Five.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default Five;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/