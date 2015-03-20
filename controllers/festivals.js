Fandor.FestivalsController = Ember.Controller.extend({	
	
});

Ember.Handlebars.helper('shortNamer', function(name) {
    //name.gsub(/Independent Film Festival Boston/, 'IFFBoston').gsub(/Festival|Film|International|Documentary|of Independent Cinema/, '').gsub(/South by Southwest/, 'SXSW').gsub(/Amsterdam/, 'IDFA').strip
	if(name == "Independent Film Festival Boston"){
		name = "IFFBoston";
	} else if(name == "South by Southwest Film Festival"){
		name = "SXSW";
	} else if(name == "International Documentary Film Festival Amsterdam"){
		name = "IDFA";
	} else name = name.replace(/Festival|Film|International|Documentary|of Independent Cinema/gi, "");
	
	return name;
});