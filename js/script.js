function displayPoll() {

		var Poller = window.massrel.Poller;

		var getPoll = new Poller({frequency: 15,limit: 4}, function(){});
		// Get the data and process the data
		getPoll.start();
		var bandArray = getPoll.getData();
		bandArray = getPoll.processData(bandArray);
		$.each(bandArray, function(i) {
			$('#poller').append("<li><span>&nbsp;Mentions</span><strong>" + bandArray[i].name + "<span>" + bandArray[i].count + "</span></strong></li>");
			
		});
		setTimeout(function() {
  			$('#poller li').fadeOut(function(){
  				$('#poller li').remove();
  			});
  				
  		}, 14000);

  		getPoll.stop();

		setInterval(displayPoll, 15000);
	
}

