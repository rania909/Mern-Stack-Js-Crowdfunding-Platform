const Event = require('../models/event.model');
const moment = require ('moment');

exports.getEventList = (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json(`error : ${err}`));
};

exports.getEventById = (req, res) => {
    Event.findById(req.params.id)
        .then(events => res.json(events))
        .catch(err => res.status(400).json(`error : ${err}`));
};


exports.deleteEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('event deleted'))
        .catch(err => res.status(400).json(`error : ${err}`));
};

exports.addEvent = (req, res) => {
   
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({
        
       title,
        description,
        date,
    });

    newEvent.save()
        .then(() => res.json('event added'))
        .catch(err => res.status(400).json(`error : ${err}`));
};

exports.updateEvent = (req, res) => {
    
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    Event.findById(req.params.id)
        .then(event => {
           
            event.title = title;
            event.description = description;
            event.date = date;

            event.save()
                .then(() => res.json('event updated'))
                .catch(err => res.status(400).json(`error : ${err}`));
        })
        .catch(err => res.status(400).json(`error : ${err}`));
};


exports.getEventsByDaterange = (req, res) => {
    Event.find({
        date: {
            $gte: (req.query.startdate),
            $lt: (req.query.enddate)
        }
    }).sort({ date: 'asc' })
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`error : ${err}`));      
;}