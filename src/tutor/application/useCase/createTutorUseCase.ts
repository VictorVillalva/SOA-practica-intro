import {TutorRepository} from "../../domain/repository/tutorRepository";

export class CreateTutorUseCase{
    constructor(readonly repository:TutorRepository) {}

    async run(name:string, email:string, phoneNumber:number){
        try{
            return await this.repository.create(name,email,phoneNumber)
        }catch (e) {
            console.log('* UseCase-CreateTutor / ERROR!: ',e)
            return  null;
        }
    }
}