const express = require('express');

const db = require('../database/helpers/dishHelper');

const router = express.Router();

router.post('/', (req, res) => {
    try {
        db
            .addDish(req.body)
            .then(id => {
                res.status(201).json(id)
            })
            .catch(error => {
                res.status(400).json({
                    message: "Bad request, please provide recipe name",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message:"Server could not post dish",
            error
        })
    }
});

router.get('/', (req, res) => {
    db
        .getDishes()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not get dishes data",
                error
            })
        })
})

router.get('/:id', (req, res) => {
    db
        .getDish(req.params.id)
        .then(dish => {
            if(dish){
                res.status(200).json(dish)
            }else{
                res.status(404).json({
                    message: "Dish could not be found with this Id"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not find dish",
                error
            })
        })
});

router.put('/:id', (req, res) => {
    try {
        db
            .updateDish(req.params.id, req.body)
            .then(count => {
                if(count){
                    res.status(200).json({
                        message: "Dish was updated"
                    }) 
                }else{
                    res.status(404).json({
                        message: "Dish with ID provided could not be found",
                        error
                    })
                }
            })
            .catch(error => {
                res.status(400).json({
                    message: "Bad request, please provide required fields",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not update dish",
            error
        })
    }
});

router.delete('/:id', (req, res) => {
    db
        .deleteDish(req.params.id)
        .then(count => {
            if(count){
                res.status(204).end();
            }else{
                res.status(404).json({
                    message:"Dish with ID provided could not be found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message:"Server could not delete dish",
                error
            })
        })
});

module.exports = router;