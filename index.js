window.onload = function()
{
    // $("#frequency").css("height",400);
    context = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = context.createOscillator();	
    gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value = 0.05;
    oscillator.frequency.value = 0;
    oscillator.start();

    // setup play button
    $("td").click( function()
		   {
		       console.log( $(this).text() );
		   }
		 );
}

function playTone (oscillator, type, freq)
{
	oscillator.type = 'sine';
	oscillator.frequency.value = freq;   
}
