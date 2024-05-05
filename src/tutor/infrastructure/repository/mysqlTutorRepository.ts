import {Tutor} from "../../domain/entity/tutor";
import {query} from "../../../database/mysql";
import {TutorRepository} from "../../domain/repository/tutorRepository";

export class MysqlTutorRepository implements TutorRepository{

    async getAll():Promise<Tutor[]|null> {
        try {
            const slq = "SELECT * FROM tutors WHERE deleted_at IS NULL"
            const [result]:any = await query(sql,[])
            return result.map((tutorData:any)=>{
                console.log(tutorData)
                let contact
                return new Tutor(
                    tutorData.uuid,
                    tutorData.name,
                    tutorData.email,
                    tutorData.phoneNumber,
                    tutorData.student_uuid,
                    null
                )
            })

        }catch (e) {
            console.log("* Repository / ERROR! : ",e)
            return null;
        }
    }
    async create(name:string, email:string, phoneNumber:number ):Promise<Tutor|null> {
        try {
            let uuid = await this.generateTutorUuid(name)
            const sql = "INSERT INTO tutors(uuid,name,address,phone_number,email) VALUES(?,?,?,?,?)"
            const params:any[]=[uuid,name,email,phoneNumber]
            const [result]:any = await query(sql,params)
            const tutor = result[0]
            console.log("* Resultado :\n",tutor)
            return new Tutor(uuid,name,email,phoneNumber,null,null)
        }catch (e) {
            console.log("* Repository / ERROR! : ",e)
            return null;
        }
    }

    async setPupil(tutorUuid:string, studentUuid:string):Promise<Tutor|null> {
        try {
            let isValid = false
            const sql = "SELECT * FROM students WHERE uuid= ? AND deleted_at IS NULL"
            const [result]:any = await query(sql,[studentUuid])
            if (result.length>0){
                const sql = "UPDATE students SET tutor_uuid=? WHERE uuid =? AND deleted_at IS NULL"
                const params: any[] = [tutorUuid,studentUuid]
                const [result]: any = await query(sql, params)
                isValid=true
            }
            if (isValid) {
                let sql:string = "UPDATE tutors SET student_uuid=? WHERE uuid =? AND deleted_at IS NULL"
                let params: any[] = [studentUuid, tutorUuid]
                let [result]: any = await query(sql, params)
                sql="SELECT * FROM tutors WHERE uuid=? AND deleted_at IS NULL";
                const [result2]:any=await query(sql,[tutorUuid])
                const tutor = result2[0]
                return new Tutor(tutor.uuid, tutor.name, tutor.email,tutor.phoneNumber, tutor.student_uuid, null)
            }
            return null
        }catch (e) {
            console.log("repository error: ", e)
            return null;
        }
    }


    async generateTutorUuid(name:string):Promise<string|any>{
        try {
            let results
            do{
                const namePrefix = name.slice(0, 3).toLowerCase();
                const randomNumbers = Array.from({ length: 3 }, () =>
                    Math.floor(Math.random() * 10));
                results = '';
                for (let i = 0; i < 3; i++) {
                    results += namePrefix[i] + randomNumbers[i];
                }}while (await this.findById(results))

            return results;
        }catch (e){
            console.log(e)
        }
    }

    async findById(uuid:string):Promise<Tutor|any> {
        try {
            const sql ="SELECT * FROM tutors WHERE uuid = ? AND deleted_at IS NULL";
            const params:any[]=[uuid]
            const [result]:any = await query(sql,params)
            const tutor = result[0]
            return new Tutor(tutor.uuid,tutor.name,tutor.email,tutor.phoneNumber,tutor.student_uuid,null)
        }catch (e) {
            console.log(e)
            return null
        }
    }

}