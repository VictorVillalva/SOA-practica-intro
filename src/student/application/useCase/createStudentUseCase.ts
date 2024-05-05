import {ExtraInfo} from "../../domain/entity/extraInfo";
import {StudentRepository} from "../../domain/repository/studentRepository";

export class CreateStudentUseCase {
    constructor(readonly repository:StudentRepository) {}

    async run(name:string,extraInfo:ExtraInfo){
        try {
            return await this.repository.create(name,extraInfo)
        }catch (e) {
            console.log(" ",e)
            return null;
        }
    }
}