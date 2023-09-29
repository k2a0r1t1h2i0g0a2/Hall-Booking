import express from 'express'
import {
  createRoom,
  listRoomsWithBookData,
  listAllRooms,
} from "../Controllers/Rooms.controller.js";
const router = express.Router();


router.post("/createRoom", createRoom)
router.get("/roomWithBookData", listRoomsWithBookData);
router.get("/listrooms", listAllRooms);

export default router;