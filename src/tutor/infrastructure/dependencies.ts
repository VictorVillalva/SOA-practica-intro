import {CreateTutorUseCase} from "../application/useCase/createTutorUseCase";
import {GetTutorUseCase} from "../application/useCase/getTutorUseCase";
import {SetStudentUseCase} from "../application/useCase/setStudentUseCase";
import {SetStudentController} from "./controllers/setStudentController";
import {CreateTutorController} from "./controllers/createTutorController";
import {GetTutorController} from "./controllers/getTutorController";
import {MysqlTutorRepository} from "./repository/mysqlTutorRepository";

export const database = new MysqlTutorRepository()

export const createTutorUseCase = new CreateTutorUseCase(database)
export const createTutorController = new CreateTutorController(createTutorUseCase)


export const getTutorUseCase = new GetTutorUseCase(database)
export const getTutorController = new GetTutorController(getTutorUseCase)


export const setStudentUseCase = new SetStudentUseCase(database)
export const setStudentController = new SetStudentController(setStudentUseCase)