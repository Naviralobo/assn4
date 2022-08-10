class Student {
    constructor(name,age,phone,marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.count +=1;
    }
    minAgeForPlacement(eligibleAge){
        return (minMarks) => {
            if(this.age>=eligibleAge && this.marks>=minMarks)
            console.log(`${this.name} is eligible`);
            else
            console.log(`${this.name} is  not eligible`);
            
        }
    }
   
}
const student1 = new Student('Ram',21,9443245410,30);
const student2 = new Student('sam',22,9443246410,40);
const student3 = new Student('cam',17,9443247410,70);
const student4 = new Student('pam',24,9443245480,39);
const student5 = new Student('Ham',21,9443275410,90);
//student1.minAgeForPlacement(18)(40);
//student2.minAgeForPlacement(18)(40);
//student3.minAgeForPlacement(18)(40);
//student4.minAgeForPlacement(18)(40);
//student5.minAgeForPlacement(18)(40);
let students = [ student1,student2,student3,student4,student5];
for(let studs of students){
    studs.minAgeForPlacement(18)(40); 
}