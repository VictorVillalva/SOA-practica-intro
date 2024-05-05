import {TutorRepository} from "../../domain/repository/tutorRepository";

export class GetTutorUseCase{
    constructor(readonly repository:TutorRepository) {}

    async run(){
        try {
            return await this.repository.getAll()
        }catch (e) {
            console.log("* UseCase-GetTutor / ERROR!: ",e)
            return null;
        }
    }
}