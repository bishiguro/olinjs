var home = function(req, res){
  res.render("home", {"classes": [
	  "Olin.js"]
	  //"Name": ["Bonnie"]
	});
};

module.exports.home = home;