window.onload = function()
{
    // $("#frequency").css("height",400);

    var context;
    var oscillator;
    var gain;
    // setup play button
    $("td").mousedown
    ( 
	function()
	{
	    context = new (window.AudioContext || window.webkitAudioContext)();
	    oscillator = context.createOscillator();	
	    gain = context.createGain();
	    gain.connect(context.destination);
	

	    // get freq from second word in <td>
	    
	    // the split actually gives a 14 element array.
		       // var freq = $(this).text().split(" ") ;

	    var freq = $(this).text().split(" ")[4] ;
	    console.log(freq);
	    playTone(freq,oscillator,gain,context);
	}
    )
	.mouseup
    (
	function()
	{
	    // console.log(context);
	    oscillator.stop(0);
	    context.close();
	}
    )
}

function playTone (freq,oscillator,gain,context)
{
    oscillator.connect(gain);

    gain.gain.value = 0.08;

    oscillator.start();

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;   
}
