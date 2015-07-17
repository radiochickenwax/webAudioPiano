window.onload = function()
{
    document.write("Hello from js.");
    playTone(5000);
}


function playTone (freq)
{
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value = 0.02;

    oscillator.type = 'square';
    oscillator.frequency.value = freq;   
    oscillator.start(0);
    console.log('did what ');
}
