const Campground = require('../models/campground');
const Review = require('../models/review')

module.exports.postReview = async(req, res)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Successfully posted the review!')
    res.redirect(`/campgrounds/${campground.id}`);
};

module.exports.deleteReview = async(req, res)=>{
    await Campground.findByIdAndUpdate(req.params.id, {$pull:{reviews:  req.params.reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success', 'Successfully deleted the review!')
    res.redirect(`/campgrounds/${req.params.id}`);
};