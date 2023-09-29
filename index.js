import express from 'express';
import roomRouter from './Routers/Room.router.js';
import bookingRouter from './Routers/Booking.router.js';
import customerRouter from './Routers/Customer.router.js';
const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/" ,function(req, res) {
  res.send("Welcome to Hall Booking App");
})
app.use("/bookings",bookingRouter)
app.use("/rooms", roomRouter)
app.use("/customers",customerRouter)
app.listen(PORT, () => {
  console.log("My app is listening with port", PORT);
});