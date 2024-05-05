import express from 'express';
import {Signale} from 'signale';
import {tutorRoute} from "./tutor/infrastructure/route/tutorRoute";
import {studentRoute} from "./student/infrastructure/route/studentRoute";
import {subjectRoute} from "./subject/infrastructure/route/subjectRoute";

const app = express();
const signale = new Signale();
app.use(express.json())

//First version (v1)
app.use('/api/v1/tutor', tutorRoute)
app.use('/api/v1/student', studentRoute)
app.use('/api/v1/subject', subjectRoute)

app.listen(8080,()=>{
    signale.success("Servidor escuchando en puerto  8080")
})