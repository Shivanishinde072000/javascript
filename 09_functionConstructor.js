
function Student(id,name,marks){
this.id=id;
this.name=name;
this.marks=marks;
this.display=function(){
    console.log(`ID: ${this.id}, Name: ${this.name}, Marks:${this.marks}`);
}
}
const steve=new Student(11,"Elon",99);
console.table(steve);
const jenny = new Student(22, "Jenny", 88);
console.table(jenny);

elon.display();
jenny.display();

//Prototype
const elon = new Student(33, "Elon", 60);

Student.prototype.country = "India";
console.log(elon.name);
console.log(elon.country);
console.log(stew.country);
console.log(jenny.country);