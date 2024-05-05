import {Request,Response} from "express";
import {GetSubjectUseCase} from "../../application/useCase/getSubjectUseCase";

export class GetSubjectController{
    constructor(readonly useCase:GetSubjectUseCase) {
    }

    async run(req:Request,res:Response){
        try {
            let studentUuid = req.params.studentUuid
            const subjects = await this.useCase.run(studentUuid)
            if (subjects){
                return res.status(200).send({
                    status:"Success",
                    data:subject,
                    message:"Obtencion de materia exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Obtencion de materia fallida!"
            })
        }catch (e) {
            console.log("* Controller-GetSubject / ERROR! : ",e)
            res.status(417).send({
                message:"Error",
                error:e
            })
        }
    }
}