import {Tutor} from '../entity/tutor';

export interface TutorRepository{
    getAll(): Promise<Tutor[]|null>;
    create(
        name:string,
        email:string,
        phoneNumber:number
    ):Promise<Tutor|null>
    setStudent(tutorUuid:string, studentUuid:string):Promise<Tutor|null>
}