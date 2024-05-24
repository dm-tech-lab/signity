import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const G = new GestureDescription("Г");

G.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
G.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

G.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
G.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

G.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
G.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

G.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
G.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

G.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
G.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default G;

/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Vertical Down
Middle | Full Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/