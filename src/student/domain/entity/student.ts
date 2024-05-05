import {ExtraInfo} from "./extraInfo";

export class Student {
    constructor(
        readonly uuid:string,
        readonly name:string,
        readonly extraInfo:ExtraInfo,
        readonly tutorUuid:string|null,
        readonly deletedAt:Date|null,

    ) {
    }
}