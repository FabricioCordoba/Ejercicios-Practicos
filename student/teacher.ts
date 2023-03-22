import  Student  from "./Student";
import { students } from "./schoolManager";
export class Teacher{
    name:string;
    lastName:string;

    constructor(name:string, lastName:string){
        this.name=name;
        this.lastName=lastName;
    }

    consultStudents(){
        console.log(students);        
    }
}

