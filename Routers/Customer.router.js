import express from "express";
import {
  listCustomersBookData,
  customerBookingHistory,
} from "../Controllers/Customers.controller.js";

const router = express.Router();


   router.get("/list", listCustomersBookData);
  router.get("/booking-history", customerBookingHistory);




export default router;