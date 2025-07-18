const express = require('express');
const router = express.Router();
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/AppError');
const { campgroundSchema } = require('../schemas.js');
const Campground = require('../models/campground');
const campgrounds = require('../controllers/campground.js');
const Review = require('../models/review')
const { validateCampground, isLoggedIn, isAuthor} = require('../middleware')

const multer = require('multer');
const {storage} = require('../cloudinary/index.js')
const upload = multer({storage });

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))
    // .post(upload.single('image'), (req, res)=>{
    //     console.log(req.body, req.file);
    //     res.send('It worked mynigga')
    // })

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.editCampground))
    .delete(isAuthor, catchAsync(campgrounds.deleteCampground))

router.get('/:id/edit', isLoggedIn, catchAsync(campgrounds.renderEditForm))

module.exports = router;