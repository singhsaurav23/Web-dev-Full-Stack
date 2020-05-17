var mongoose = require("mongoose"),
	Comment = require("./comment");

var campgroundSchema = new mongoose.Schema({
	name: String,
	price: String,
	image: String,
	description: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		},
		username: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});
campgroundSchema.post('remove', function(campground) {
   Comment.remove({
      _id: {
        $in: campground.comments
      }
    }).exec();
});
										   
module.exports = mongoose.model("Campground", campgroundSchema);										   