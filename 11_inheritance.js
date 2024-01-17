

class MotherCat{
    constructor(eyeColor,totalLegs){
        this.eyeColor=eyeColor;
        this.totalLegs=totalLegs;
    }
    meowing(){
        console.log(`Cat is meowing`);
        console.log(`Eye color: ${this.eyeColor}, and Total legs ${this.totalLegs}`);
    }
}

class BabyCat extends MotherCat{
    constructor(bodyColor,name,colorOfEye,legs){
        super(colorOfEye,legs);
        this.bodyColor=bodyColor;
        this.name=name;
        
    }
    meowing(){//Method overrinding which is runtime polymorphism
        console.log(`Baby Cat is meowing`);
        console.log(`Eye color: ${this.eyeColor}, and Total legs ${this.totalLegs}`);
        console.log(`Body color: ${this.bodyColor}, and Name is: ${this.name}`);

    }
}

const Kitty=new BabyCat("Brown","Kitty","grey",4);
console.log(Kitty);
Kitty.meowing();

