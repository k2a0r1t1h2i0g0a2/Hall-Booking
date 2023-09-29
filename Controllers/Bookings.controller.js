 const bookings = [
   {
     customerId: 1,
     customerName: "John ",
     roomName: "Conference Room A",
     date: "2023-09-30",
     startTime: "10:00 AM",
     endTime: "12:00 PM",
     roomId: 1,
   },
   {
     customerId: 2,
     customerName: "Arun",
     roomName: "Meeting Room B",
     date: "2023-09-30",
     startTime: "02:00 PM",
     endTime: "04:00 PM",
     roomId: 2,
   },
   {
     customerId: 3,
     customerName: "Babu",
     roomName: "Boardroom C",
     date: "2023-10-01",
     startTime: "09:00 AM",
     endTime: "11:00 AM",
     roomId: 1,
   },
 ];



export const bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
 const conflictingBooking = bookings.find(
   (booking) =>
     booking.roomId === roomId &&
     booking.date === date &&
     ((startTime >= booking.startTime && startTime < booking.endTime) ||
       (endTime > booking.startTime && endTime <= booking.endTime))
 );
if (conflictingBooking) {
  return res
    .status(400)
    .json({ message: "Room is already booked for that time" });
    }
    const newBookingId = bookings.length + 1;
    const newBooking = {
      customerId: newBookingId,
      customerName,
      date,
      startTime,
      endTime,
      roomId,
    };
     bookings.push(newBooking);
    res.status(201).json({message:"booked a room " ,newBooking });

}


export const listBookings = (req, res) => {
     res.json(bookings)
}

export default bookings
