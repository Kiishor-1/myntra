const mongoose = require('mongoose');

const ratingAndReviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Product",
		index: true,
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
    }
})

module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);