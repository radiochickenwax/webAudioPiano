window.onload = function()
{

    context = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = context.createOscillator();
    var gain = context.createGain();
    oscRun = 0;
    

    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value = 0.05;
    oscillator.frequency.value = 0;
    oscillator.start();


    $("#frequency").css("height",400);

    // setup sliders
    $("#frequency").slider
    (
	{
	    orientation: 'vertical',
	    range: "min",
	    min: 0,
	    max: 6000,
	    // height: 4000,
	    value: 60, // what's this?
	    slide: function (event, ui )
	    {
                // oscillator.stop();
	        $( "#freq_amount" ).val( ui.value );	                
                console.log(ui.value);
                oscRun = playTone(oscillator,'sine',ui.value,oscRun);

	    }
	}
    );

    $("#volume").slider
    (
	{
	    orientation: 'vertical',
	    range: "min",
	    min: 0,
	    max: 5000,
	    value: 60, // what's this?
	    slide: function (event, ui )
	    {
		$( "#vol_amount" ).val( ui.value );	
	    }
	}
    );


    // playTone(440);

}




function playTone (oscillator, type, freq,oscRun)
{
    // oscillator.stop();

    if ( oscRun )
    {
	// oscillator.stop(0);
	// oscillator.start();
	oscillator.frequency.value = freq;   
	console.log('already running.');
	// oscillator = context.createOscillator();
	// oscillator = 0;
	return 0;
    }
    else
    {
	// oscillator = context.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.value = freq;   

	// oscillator.stop();
	//oscillator.start();
	// oscRun = 1;
	return 1;
    }
}
