 class Person{
    id:number;
    name:string;
    classes:string;
    
    constructor(id:number,name:string,classes:string){
        id=this.id,
        name=this.name,
        classes= this.classes;
    }
 }
  
 let person :Person;
 person.id=1;
 person.name= "khanh";
 person.classes="2A";

 console.log(person);