import express from "express";
import {createTutorController, getTutorController, setStudentController} from "../dependencies";

export const tutorRoute = express.Router();

tutorRoute.get("/",getTutorController.run.bind(getTutorController))
tutorRoute.put("/:tutorUuid/assign", setStudentController.run.bind(setStudentController))
tutorRoute.post("/", createTutorController.run.bind(createTutorController))