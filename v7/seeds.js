var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
	Comment = require("./models/comment");

var data = [
	{   name: "Cloud's Rest",
		image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80",
		description: "This is one of the best site for campgrounds among the clouds"
		
	},
	
	{   name: "Star's Dazzling",
		image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "This is famous for its ambience of stars and the peace among the ground"
	},
	
	{   name: "Couple's canyon",
		image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "This campground is best for couples and the facilities and ambience is good"
	},
]
	


function seedDB(){
	Comment.remove({}, function(err){
		if(err) console.log(err);
	else console.log("removed comments!");
	Campground.remove({}, function(err){
	if(err) console.log(err)
	else
	console.log("removed campgrounds!");
	data.forEach(function(seed){
	Campground.create(seed, function(err, campground){
		if(err) console.log(err);
		else {
			console.log("added campground");
		  Comment.create(
		  {
			text: "This place is great, but I wish there was internet",
			author: "Homer"  
		  }, function(err, comment){
			  if(err) console.log(err);
			  else{
			  campground.comments.push(comment);
			  campground.save();
			  console.log("created new comment");  
			  }
		  });	
		
		}
	});
});
});
});
	}

module.exports = seedDB;
