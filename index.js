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
    $("#play").button
    (
	{
	    text:false,   icons:  { primary: 'ui-icon-play'  }
	}
    ).click( function()
	     {
		 // oscillator.stop;
		 // delete oscillator;

		 oscillator = context.createOscillator();	

		 oscillator.connect(gain);
		 gain.connect(context.destination);
		 gain.gain.value = 0.05;

		 oscillator.start();
	     }
	   );

    $("#stop").button
    (
	{ 
	    text:false,  icons: { primary: 'ui-icon-stop' }
	}
    ).click( function()
	     {
		 oscillator.stop();
		 delete oscillator;
	     }
	   );


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
                playTone(oscillator,'sine',ui.value);

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


}




function playTone (oscillator, type, freq)
{
	oscillator.type = 'sine';
	oscillator.frequency.value = freq;   
}
