import {Request,Response} from "express";
import {CreateSubjectUseCase} from "../../application/useCase/createSubjectUseCase";

export class CreateSubjectController{
    constructor(readonly useCase:CreateSubjectUseCase) {}

    async run(req:Request,res:Response){
        try {
            let {name, studentUuid} = req.body
            const subject = await this.useCase.run(name,studentUuid)
            if (subject){
                return res.status(201).send({
                    status:"Success",
                    data:subject,
                    message:"Creacion de materia exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Creacion de materia fallida!"
            })
        }catch (e) {
            console.log("* Controller-CreateSubject / ERROR! : ",e)
            res.status(417).send({
                message:"Error!",
                error:e
            })
        }
    }
}