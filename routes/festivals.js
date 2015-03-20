Fandor.FestivalsRoute = Ember.Route.extend({
	model: function() {
		festivals.forEach(function(festival){
		    //festival.fname = festival.fname.replace("Film Festival", "");
			marquees.forEach(function(marquee){
				if(festival.id == marquee){
					festival.marquee = true;
				} 
			});
			upcomings.forEach(function(upcoming){
				if(festival.id == upcoming){
					festival.upcoming = true;
				} 
			});	
			total.forEach(function(all){
				if(festival.id == all){
					festival.all = true;
				} 
			});				
		});
		return festivals;
		//return this.store.findAll('festivals');
	}
});