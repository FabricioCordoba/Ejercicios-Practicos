import  Student from "./Student";
import { Teacher } from "./teacher";

import * as fs from "fs";

export let students: Student []=[];

const data= fs.readFileSync("./students.json", "utf8");
const children = JSON.parse(data); // revisar...children tiene q ser un array
for (let i=0; i < children.length; i++){
    students.push(children[i]);
}

let teachers: Teacher []= []
const data1= fs.readFileSync("./teachers.json", "utf8");// simplificar no repetir con children
const miss = JSON.parse(data1);
for (let i=0; i < miss.length; i++){
    teachers.push(miss[i]);
}

export default class SchoolManager {
    consultStudents(){
        console.log(students);        
    }
 approved(name:string, array:Student[]){
    let value: any= array.find((student) => student.name===name);
    console.log(value); 
  if(value?.note >= 7){
    console.log(name, " APROBADO");
  }else{
    console.log(name, "DESAPROBADO");    
  }
}

enroll(name: Student, array: Student[]){
array.push(name);
console.log(array);
}
hire(name: Teacher, array: Teacher[]){
    array.push(name);
    console.log(array);
}

dismiss(name: string, array: Teacher[]){
    let dismiss= array.findIndex((tutor) => tutor.name === name);
    if (dismiss>=0){
        array.splice(dismiss,1)
        console.log(name, "Fue despedido");        
    }
    
}

}



//console.log(teachers);
let administrator= new SchoolManager;
let javier: Teacher = new Teacher("Javier", "Lopez");

let santi: Student= new Student("Santiago",  "Garda", 7)

//administrator.consultStudents();
//administrator.approved("Maria", students);
//administrator.approved("Julian", students);
administrator.enroll(santi, students);
//administrator.hire(javier, teachers);
//console.log(students);

//administrator.dismiss("Sofia", teachers);