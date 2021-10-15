const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { Event, Sequelize } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res, next) => {
    const events = await Event.findAll()//include extra db keys here)

    return res.json(events);
}))

//events/search
router.get("/search/:searchQuery", asyncHandler(async (req, res, next) => {
    const { searchQuery } = req.params.searchQuery;
    const events = await db.Event.findAll({
        // where: {
        //     description: {
        //         [Sequelize.Op.iLike]: `%${searchQuery}%`
        //     },
        // },
    })
    res.json(events);
}));

router.get("/:id", asyncHandler(async function(req, res){
    const event = await Event.findByPk(req.params.id);
    return res.json(event);
}))

router.get("/:id/tickets", asyncHandler(async function(req, res){
    const userId = res.locals.user.id;
    const eventId = parseInt(req.params.id, 10);
    console.log('USER id here', userId);
    console.log('EVENT id here', eventId);

    const alreadyRegistered = await db.Ticket.findOne({
        where: {userId: userId, eventId: eventId}
    });

    if (alreadyRegistered) {
        await alreadyRegistered.destroy();
    } else {
        const register = db.Ticket.build({
            userId: userId,
            eventId: eventId
        });
        await register.save();
    }
    const registerArray = await db.Ticket.findAll({
        where: { eventId: eventId }
    });

    res.json({ registerArray });

}))

module.exports = router;
