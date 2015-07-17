This is a brief example of playing sounds using WebAudio.


Here's the first example I found online. 
http://patorjk.com/blog/2012/07/22/tone-playing-experiment-with-html5s-web-audio-api/

This doesn't seem to work: 

'webkitAudioContext' is deprecated. Please use 'AudioContext' instead.
index.js:13 The provided value '0' is not a valid enum value of interface OscillatorType.

Here's the next.
http://stackoverflow.com/questions/6866817/generating-a-tone-using-pure-javascript-with-chromium-webaudio-api

This seems more general:
https://developer.mozilla.org/en-US/docs/Web/API/AudioContext

Here's an oscillator:
https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createOscillator