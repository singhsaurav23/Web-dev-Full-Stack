var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
	Comment = require("./models/comment");

var data = [
	{   name: "Cloud's Rest",
	    price: 12.5,
		image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "This is one of the best site for campgrounds among the clouds",
	 author:{
            id : "588c2e092403d111454fff76",
            username: "Arick_Danier"
        }
	},
	
	{   name: "Star's Dazzling",
	    price: 17.5,
		image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "This is famous for its ambience of stars and the peace among the ground",
	  author:{
            id : "588c2e092403d111454fff71",
            username: "Nikansh_Ranawat"
        }
	},
	
	{   name: "Couple's canyon",
	    price: 30,
		image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description: "This campground is best for couples and the facilities and ambience is good",
	  author:{
            id : "588c2e092403d111454fff77",
            username: "pro_srv"
        }
	},  
	{   
	    name: "Sunset Lake",
		price: 25,
		image: "https://images.unsplash.com/photo-1510002507184-45227b3a3524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
		description: "This campground has the best sunset scene and is around a beautiful lake",
		 author:{
            id : "588c2e092403d111454fff77",
            username: "pro_srv"
        }
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
			 author: {
            id : "588c2e092403d111454fff77",
            username: "pro_srv"
        } 
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
