import {TutorRepository} from "../../domain/repository/tutorRepository";

export class SetStudentUseCase {
    constructor(readonly repository:TutorRepository) {}

    async run(tutorUuid:string,studentUuid:string){
        try {
            return await this.repository.setStudent(tutorUuid,studentUuid)
        }catch (e) {
            console.log("* UseCase-SetStudent / ERROR!: ",e)
            return null;
        }
    }
}