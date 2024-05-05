import {Request,Response} from "express";
import {GetTutorUseCase} from "../../application/useCase/getTutorUseCase";

export class GetTutorController {
    constructor(readonly useCase:GetTutorUseCase) {}

    async run(req:Request,res:Response){
        try {
            const tutors = await this.useCase.run()
            if (tutors){
                return res.status(200).send({
                    status:"Success",
                    data:tutors,
                    message:"Obtencion de tutores exitoso!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Error de obtecion de tutores!"
            })

        }catch (e) {
            console.log("Controller-GetTutor / ERROR! : ",e)
            res.status(417).send({
                message:"ERROR! ---> ",
                error:e
            })
        }
    }
}