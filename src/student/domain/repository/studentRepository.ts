import {Student} from "../entity/student";
import {ExtraInfo} from "../entity/extraInfo";

export interface StudentRepository {
    getAll():Promise<Student[]|null>
    getAllFrom(tutorUuid:string):Promise<Student[]|any>
    create(
        name:string,
        extraInfo:ExtraInfo
    ):Promise<Student|null>
}