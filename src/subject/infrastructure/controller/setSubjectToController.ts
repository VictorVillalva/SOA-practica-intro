import {Request,Response} from "express";
import {SetSubjectToUseCase} from "../../application/useCase/setSubjectToUseCase";

export class SetSubjectToController{
    constructor(readonly useCase:SetSubjectToUseCase) {
    }

    async run(req:Request,res:Response){
        try {
            let subjectUuid=req.params.subjectUuid
            let {studentUuid} = req.body
            const subject = await this.useCase.run(subjectUuid,studentUuid)
            if (subject){
                return res.status(201).send({
                    status:"Success",
                    data:subject,
                    message:"Asignacion de materia exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Asignacion de materia fallida!"
            })
        }catch (e) {
            console.log("* Controller-SetSubject / ERROR! : ",e)
            res.status(417).send({
                message:"Error",
                error:e
            })
        }
    }
}