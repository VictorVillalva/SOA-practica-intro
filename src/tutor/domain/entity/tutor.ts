export class Tutor {
    constructor(
        readonly uuid:string,
        readonly name:string,
        readonly email:string,
        readonly phoneNumber:number,
        readonly studentUuid:string|null,
        readonly deletedAt:Date|null,
    ) {}
}