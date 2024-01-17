

//1.Compile time polymorphism:Method Overloading
//2.Run time polymorphism:Method Overriding

class Student{
    constructor(rollNo, name){
        this.rollNo=rollNo;
        this.name=name;
    }
    marks(maths,physics){
        console.log(`Maths: ${maths} , Physics: ${physics} `);
        console.log(arguments);
        console.log(typeof arguments);
        console.log(this);
        if (arguments.length==2) {
            console.log(`Addition of marks is: ${maths+ physics}`);
        }
        if (arguments.length==1 || physics ==undefined ) {
            console.log(`Addition of marks is: ${maths+0}`);
        }
    }
}

const jenny=new Student(11,"Jenny");
console.log(jenny);
jenny.marks(89,91);
jenny.marks(60);