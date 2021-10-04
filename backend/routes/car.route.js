let mongoose = require('mogoose'),
    express = require('express'),
    router = express.Router();

const { Next } = require('react-bootstrap/esm/PageItem');
// Car model
let carSchema = require('../models/Car')

// Create Car
router.route('/create-car').post((req, res, Next) => {
    carSchema.create(req.body, (error, data) => {
        if (error) {
            return Next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})


//Read cars
router.route('/') .get((req, res) =>{
    carSchema.find((error, data) =>{
        if (error) {
            return Next(error);            
        } else { 
            res.json(data);
        }
    })
})

// Get single car
router.route('/edit-car/:id').get((req, res) => {
    carSchema.findById(req.params.id, (error, data) =>{
        if (error) {
            return Next(error);
        } else {
            res.json(data);
        }
    })
})

//Update car
router.route('/update-car/:id').put((req, res, next) => {
    carSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log('Car update successfully')
        }
    })
})

//Delete Car
router.route('/detele-car/:id').delete((req, res, next) =>{
    carSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;