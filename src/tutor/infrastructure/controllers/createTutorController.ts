import {Request,Response} from "express";
import {CreateTutorUseCase} from "../../application/useCase/createTutorUseCase";

export class CreateTutorController{
    constructor(readonly useCase:CreateTutorUseCase) {}

    async run(req:Request, res:Response){
        try{
            let{name,phoneNumber,email} = req.body
            const tutor = await this.useCase.run(name,phoneNumber,email)
            if(tutor){
                return res.status(201).send({
                    status: "Success",
                    data: tutor,
                    message: "Tutor creado de manera existosa!"
                })
            }
            res.status(400).send({
                status: "Error",
                data: [],
                message: "Error al crear tutor!"
            })
        }catch (e){
            console.log("Controller-CreateTutor / ERROR! : ", e)
            res.status(417).send({
                message: "ERROR! ---> ",
                error: e
            })
        }
    }
}
