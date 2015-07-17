window.onload = function()
{
    // document.write("Hello from js.");
    playTone(2000);
}


function playTone (freq)
{
    var context = new webkitAudioContext();
    var oscillator = context.createOscillator();

    oscillator.type = 0;
    oscillator.frequency.value = freq;
    oscillator.connect(context.destination);
    oscillator.noteOn && oscillator.noteOn(0);

}
