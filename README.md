# Room-Management
Simple Node API to manage room booking and customers

API Link:

https://sleepy-temple-48359.herokuapp.com/

API Documentation:


Create a room:

POST/ https://sleepy-temple-48359.herokuapp.com/rooms/create-room/

Output:

{
    "status": 200,
    "message": "New room added successfully!!"
}

Json request:

{
    "room": {
        "seats": 20,
        "amenities": [
            "Wi-Fi",
            "TV",
            "AC",
            "Water"
        ],
        "price": "Rs.150/-"
    }
}

Book a Room:

POST/ https://sleepy-temple-48359.herokuapp.com/rooms/book-room/:id

Json request:

{
	"customerName": "Arun",
	"date": "17th Feb",
	"startTime" : "11:00 AM",
	"endTime": "5:00 PM"
}

Output:

{
    "status": 200,
    "message": "Room with id: 1 booked successfully!!"
}

Get rooms:

GET/ https://sleepy-temple-48359.herokuapp.com/rooms

Output:

[
    {
        "id": 1,
        "name": "Room-1",
        "seats": 10,
        "amenities": [
            "Wi-Fi",
            "TV",
            "AC"
        ],
        "price": "100",
        "status": "Booked",
        "bookingDetails": {
            "customerName": "Arun",
            "date": "17th Feb",
            "startTime": "11:00 AM",
            "endTime": "5:00 PM",
            "roomID": 1
        }
    }
]

Get Customers List:

GET/ https://sleepy-temple-48359.herokuapp.com/customers

Output:

[
    {
        "customerName": "Arun",
        "date": "17th Feb",
        "startTime": "11:00 AM",
        "endTime": "5:00 PM",
        "roomID": 1
    }
]

