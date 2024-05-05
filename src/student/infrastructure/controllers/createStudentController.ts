import {Request,Response} from "express";
import {ExtraInfo} from "../../domain/entity/extraInfo";
import {CreateStudentUseCase} from "../../application/useCase/createStudentUseCase";

export class CreateStudentController {
    constructor(readonly useCase:CreateStudentUseCase) {}

    async run(req:Request,res:Response){
        try {
            let {name} = req.body
            let {address,phoneNumber,email} = req.body.extraInfo
            const contactInfo = new ExtraInfo(address,phoneNumber,email)
            const tutor = await this.useCase.run(name,contactInfo)
            if (tutor){
                return res.status(201).send({
                    status:"Success",
                    data:tutor,
                    message:"Creacion de estudiante exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Creacion de estudiante fallida!"
            })
        }catch (e) {
            console.log("Controller-CreateStudent / ERROR! : ",e)
            res.status(417).send({
                message:"Error",
                error:e
            })
        }
    }
}