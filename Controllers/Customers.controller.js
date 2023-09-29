import bookings from "../Controllers/Bookings.controller.js";

const customers = [
  {
    customerId: 1,
    customerName: "Arun",
    name: "Conference Room A",
    date: "2023-09-30",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
  },
  {
    customerId: 2,
    name: "Meeting Room B",
    customerName: "Arun",
    date: "2023-09-30",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
  },
  {
    customerId: 3,
    name: "Boardroom C",
    customerName: "Babu",
    date: "2023-10-01",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
  },
];

export const listCustomersBookData = (req, res) => {
  const customersWithBookedData = customers.map((customer) => {
   
    const customerBookings = bookings.filter(
      (booking) => booking.customerId === customer.customerId
    );

    const bookingDetails = customerBookings.map((booking) => ({
      roomName: booking.roomName, 
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    }));

   
    const bookedStatus = customerBookings.length > 0;

    return {
      customerName: customer.customerName,
      bookedStatus, 
      bookings: bookingDetails,
    };
  });

  res.status(200).json(customersWithBookedData);
};

export const customerBookingHistory = (req, res) => {
 

  const customersWithBookingHistory = customers.map((customer) => {
   
    const customerBookings = bookings.filter(
      (booking) => booking.customerId === customer.customerId
    );

    const bookingHistory = customerBookings.map((booking) => ({
      roomName: booking.roomName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingId: booking.customerId,
      bookingDate: booking.date,
      bookingStatus: booking.bookingStatus,
    }));
   const bookedStatus = customerBookings.length > 0;

    return {
      customerName: customer.customerName,
      bookedStatus,
      bookingHistory: bookingHistory,
    };
  });

  res.status(200).json(customersWithBookingHistory);
};
