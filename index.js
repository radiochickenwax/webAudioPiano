window.onload = function()
{

    var context = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    var oscRun = 0;
    

    oscillator.connect(gain);
    gain.connect(context.destination);
    gain.gain.value = 0.05;
    oscillator.frequency.value = 0;

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
                // playTone(oscillator,'sine',ui.value,oscRun);
                
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
    //oscillator.stop();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;   
    if ( oscRun )
    {
	oscillator.stop();
	oscillator.start();
	// oscRun = 1;
    }
    else
    {
	// oscillator.stop();
	oscillator.start();
    }
}
