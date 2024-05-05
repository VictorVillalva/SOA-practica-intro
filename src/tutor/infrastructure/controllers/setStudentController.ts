import {Request,Response} from "express";
import {SetStudentUseCase} from "../../application/useCase/setStudentUseCase";

export class SetStudentController {
    constructor(readonly useCase:SetStudentUseCase) {}

    async run(req:Request,res:Response){
        try {
            let tutorUuid=req.params.tutorUuid
            let {studentUuid} = req.body
            const tutor = await this.useCase.run(tutorUuid,studentUuid)
            if (tutor){
                return res.status(200).send({
                    status:"Success",
                    data:tutor,
                    message:"Creacion de tutor exitoso"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Error de creacion tutor"
            })
        }catch (e) {
            console.log("Controller-SetStudent / Error! : ",e)
            res.status(417).send({
                message:"ERROR! ---> ",
                error:e
            })
        }
    }
}