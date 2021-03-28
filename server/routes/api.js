const express = require('express');
const router = express.Router()
const Favs = require('../models/Favs');

router.get('/favourites' , async (req, res) => {
    try {
        const images = await Favs.find({})
        res.send(images)
    } catch (error) {
        res.send(error)
    }
})

router.post('/favourite', async (req, res) => {
    try {
        const fav  = new Favs(req.body)
        await fav.save()
        res.send(fav)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/favourite/:id', async (req, res) => {
    const imageID = req.params.id
    const image = await Favs.findOneAndDelete({_id: imageID})
    res.send(image)
})


module.exports = router
