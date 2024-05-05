import {Request,Response} from "express";
import {GetStudentUseCase} from "../../application/useCase/getStudentUseCase";


export class GetStudentController {
    constructor(readonly useCase:GetStudentUseCase) {
    }

    async runAll(req:Request,res:Response){
        try {
            const students = await this.useCase.runAll()
            if (students){
                return res.status(200).send({
                    status:"Success",
                    data:students,
                    message:"Obtencion de estudiante exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Obtencion de estudiante fallida!"
            })

        }catch (e) {
            console.log("Controller-GetStudent / ERROR! :",e)
            res.status(417).send({
                message:"Error",
                error:e
            })
        }
    }

    async runAllFrom(req:Request,res:Response){
        try {
            let tutorUuid=req.params.tutorUuid
            const students = await this.useCase.runByTutor(tutorUuid)
            if (students){
                return res.status(200).send({
                    status:"Success",
                    data:students,
                    message:"Obtencion de estudiante exitosa!"
                })
            }
            res.status(400).send({
                status:"Error",
                data:[],
                message:"Obtencion de estudiante fallida!"
            })

        }catch (e) {
            console.log("Controller-GetStudent / ERROR! :",e)
            res.status(417).send({
                message:"Error",
                error:e
            })
        }
    }


}