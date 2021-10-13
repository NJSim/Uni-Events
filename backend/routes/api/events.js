const express = require('express')
const asyncHandler = require('express-async-handler');
// const { db } = require('../../config');
const { Event } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res, next) => {
    const events = await Event.findAll()//include extra db keys here)
    console.log(events);

    return res.json(events);
}))

module.exports = router;
