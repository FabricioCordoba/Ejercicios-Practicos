import { Student } from "./Student";
import { Teacher } from "./teacher";

import * as fs from "fs";
import * as readLineSync from "readline-sync";

export default class SchoolManager {
  dataStudent() {
    return JSON.parse(fs.readFileSync("./students.json", "utf-8"));
  }
  dataTeacher() {
    return JSON.parse(fs.readFileSync("./teachers.json", "utf-8"));
  }

  consultStudents() {
    console.log(this.dataStudent());
  }

  enrollStudent() {
    let name = readLineSync
      .question("Escriba el nombre del alumno:--> ")
      .toLowerCase();
    let lastName = readLineSync
      .question("Escriba el apellido del apellido:--> ")
      .toLowerCase();
    let note = Number(readLineSync.question("ingresar nota del alumno:--> "));
    let newStudent = new Student(name, lastName, note);

    let students = [...this.dataStudent(), newStudent];
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
    console.log(this.dataStudent());
  }

  hireTeacher() {
    //fs.writeFileSync("teachers.json", "[]", "utf-8")
    let name = readLineSync
      .question("Escriba el nombre del docente:--> ")
      .toLowerCase();
    let lastName = readLineSync
      .question("Escriba el apellido del docente:--> ")
      .toLowerCase();
    let newTeacher = new Teacher(name, lastName);


    let teachers: any = [...this.dataTeacher(), newTeacher];

    
    
    let constantes= Buffer.alloc( Buffer . byteLength ( teachers , 'utf8' ), teachers , 'utf8' ); 
   fs.writeFileSync("./teachers.json", "[]", "utf-8");
    console.log(this.dataTeacher());
  }

  approvedStudent(name: string) {
    let student = this.dataStudent().find(
      (student: { name: string }) => student.name === name.toLowerCase()
    );
    console.log(student);
    if (student?.note >= 7) {
      console.log(name, " APROBADO");
    } else if (student?.note < 7) {
      console.log(name, "DESAPROBADO");
    } else {
      console.log("El alumno", name, "no se encontro");
    }
  }

  dismissTeacher(name: string) {
    let teachers = this.dataTeacher();
    let dismissTeacher = teachers.findIndex(
      (teacher: { name: string }) => teacher.name === name.toLowerCase()
    );
    if (dismissTeacher >= 0) {
      teachers.splice(dismissTeacher, 1);
      console.log(name, "Fue despedido");
      fs.writeFileSync("./teachers.json", JSON.stringify(teachers));
      console.log(this.dataTeacher());
    } else {
      console.log("No se encontro ", name, "ya fue despedido");
    }
  }

  expelStudent(name: string) {
    let students = this.dataStudent();
    let expelStudent = students.findIndex(
      (students: { name: string }) => students.name === name.toLowerCase()
    );
    if (expelStudent >= 0) {
      students.splice(expelStudent, 1);
      console.log("El Alumno ", name, "fue expulsado");
      fs.writeFileSync("./students.json", JSON.stringify(students));
    }
  }
}
