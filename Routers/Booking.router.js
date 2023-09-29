import express from "express";
const router = express.Router();
import { bookRoom, listBookings } from "../Controllers/Bookings.controller.js";


router.post("/bookRoom",bookRoom)
router.get("/listBookings",listBookings)





export default router;