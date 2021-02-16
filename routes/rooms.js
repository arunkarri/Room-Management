var express = require('express');
var router = express.Router();
var customers = require('../customers');

const rooms = [
  {
    id: 1,
    name: 'Room-1',
    seats: 10,
    amenities: ['Wi-Fi', 'TV', 'AC'],
    price: '100',
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(rooms);
});

router.post('/create-room', function (req, res, next) {
  const newRoom = req.body.room;
  newRoom.id = rooms.length + 1;
  rooms.push(newRoom);
  res.json({ status: 200, message: 'New room added successfully!!' });
});

router.post('/book-room/:id', function (req, res, next) {
  const room = rooms.find((ele) => ele.id === parseInt(req.params.id));
  if (room) {
    room.status = 'Booked';
    room.bookingDetails = req.body;
    room.bookingDetails.roomID = parseInt(req.params.id);
    customers.push(room.bookingDetails);
  }
  res.json({ status: 200, message: `Room with id: ${req.params.id} booked successfully!!` });
});

module.exports = router;
