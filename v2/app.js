var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
	Comment = require("./models/comment"),
    seedDB = require("./seeds");


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){ 
	Campground.find({}, function(err, allCampgrounds){
		if(err) console.log(err);
		else{
			res.render("index",{campgrounds:allCampgrounds});
		}
		
	});
	
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image= req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description:desc}
	Campground.create(newCampground, function(err, newlyCreated){
		if(err) console.log(err);
		else res.redirect("/campgrounds");
	});
});

app.get("/campgrounds/new", function(req,res){
	res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
	 Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		 if(err) console.log(err);
		 else {
			 res.render("show",{campground: foundCampground});	
		 }
	 });
});

app.listen(3000, function(){
	console.log("YelpCamp server has started!!!!");
});