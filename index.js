window.onload = function()
{
    // $("#frequency").css("height",400);
 

    // setup play button
    $("td").click( function()
		   {
		       // get freq from second word in <td>
		       
		       // the split actually gives a 14 element array.
		       // var freq = $(this).text().split(" ") ;
		       var freq = $(this).text().split(" ")[4] ;
		       console.log(freq);
		       playTone(freq);
		   }
		 );
}

function playTone (freq)
{
    context = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = context.createOscillator();	
    gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value = 0.05;

    oscillator.start();

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;   
    oscillator.stop(1);
}
