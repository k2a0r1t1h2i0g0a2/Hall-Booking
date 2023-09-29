import  bookings from "../Controllers/Bookings.controller.js"


const rooms = [
  {
    id: 1,
    name: "Conference Room A",
    seatsAvailable: 20,
    amenities: ["Projector", "Whiteboard", "Wi-Fi"],
    pricePerHour: 50,
  },
  {
    id: 2,
    name: "Meeting Room B",
    seatsAvailable: 10,
    amenities: ["Whiteboard", "Wi-Fi"],
    pricePerHour: 30,
  },
  {
    id: 3,
    name: "Boardroom C",
    seatsAvailable: 8,
    amenities: ["Projector", "Video Conferencing", "Wi-Fi"],
    pricePerHour: 60,
  },
];

export const createRoom = (req, res) => {
    const { name, seatsAvailable, amenities, pricePerHour } = req.body;
    const newRoomId = rooms.length + 1;
    const newRoom = {
      id: newRoomId,
      name,
      seatsAvailable,
      amenities,
      pricePerHour,
    };
     rooms.push(newRoom);
  res.status(201).json({ message: "create a new Room", newRoom });
}


export const listRoomsWithBookData = (req, res) => {
   
  const roomsWithBookedData = rooms.map((room) => {
   
    const roomBookings = bookings.filter(
      (booking) => booking.roomId === room.id
    );

    
    const bookedData = roomBookings.map((booking) => ({
      customerName: booking.customerName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    }));

    return {
      roomName: room.name,
      bookedStatus: roomBookings.length > 0,
      bookedData,
    };
  });

  res.status(200).json(roomsWithBookedData);

    
}

export const listAllRooms = (req, res) => {
  res.status(200).json({message:"list of all rooms",rooms})
}