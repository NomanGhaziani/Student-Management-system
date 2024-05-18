#!/usr/bin/env node
import inquirer from "inquirer";
class student{
static counter = 20000;
    id : number;
    name : string;
    courses : string[];
    balance : number;

    constructor(name: string){
        this.id =student.counter++;
        this.name = name;
        this.courses =[];
        this.balance = 100;
    }

    enroll_courses(course: string){
this.courses.push(course);
    }
    view_balance(){
        console.log(`balance for ${this.name} : $${this.balance}`);
    }
pay_fees(amount : number){
    this.balance -= amount;
    console.log(`$${amount}fees paid succesfuly for ${this.name}`);
}
show_status(){
    console.log(`id : ${this.id}`);
    console.log(`name : ${this.name}`);
    console.log(`courses : ${this.courses}`);
    console.log(`balance : ${this.balance}`);    
}
}
class student_manager{
    students : student[]
    constructor(){
        this.students=[];
    }
    add_student(name : string){
let Student = new student(name);
this.students.push(Student)
console.log(`student :${name} added successfully.student id :${Student.id}`);
}
enroll_student(student_id : number , course : string){
let student = this.find_student(student_id);
if(student){
    student.enroll_courses(course);
    console.log(`${student.name}enrolled in ${course}successfully`);
}
}
view_student_balance(student_id :number){
    let student = this.find_student(student_id);
    if(student){
        student.view_balance();
    }
    else{

    }
}
pay_student_fees(student_id : number ,amount: number){
    let student = this.find_student(student_id);
    if(student){
        student.pay_fees(amount);
    }
    else{
        console.log("student not found. please enter a correct student ID");
    }
}
show_student_status(student_id :number){
    let student = this.find_student(student_id);
    if(student){
        student.show_status();
    }
}
find_student(student_id : number){
    return this.students.find(std => std.id === student_id);
}
}
async function main(){
    console.log("WElcome to 'NOMAN GHAZIANI' - Student Management System")
    console.log("-".repeat(50));
   let Student_manager = new student_manager();
   while(true){
let choice =await inquirer.prompt([{
    name : "choice",
    type : "list",
    message: "select an option",
    choices :[
        "Add Student",
        "Enroll Student",
        "View Student Balance",
        "Pay Fees",
        "Show Status",
        "Exit",
]
}]);
switch(choice.choice){
    case "Add Student":
    let name_input = await inquirer.prompt([{
        name : "name",
        type : "input",
        message : "Enter a student name",
    }]);
    Student_manager.add_student(name_input.name);
    break;
case"Enroll Student" :
let course_input =await inquirer.prompt([{
    name : "student_id",
    type : "Number",
    message : "Enter a student ID",


},{
    name : "course",
    type : "input",
    message : "Enter a course name",
}])
Student_manager.enroll_student(course_input.student_id,course_input.course);
break;
case "View Student Balance":
    let balance_input = await inquirer.prompt([{
        name : "student_ID",
        type : "number",
        message :"Enter a student ID",
    }]);
     
Student_manager.view_student_balance(balance_input.student_id);
break;
case  "Pay Fees":
    let fees_input = await inquirer.prompt([{
        name : "student_ID",
        type : "number",
        message :"Enter a student ID",
    },
{
        name : "amount",
        type : "number",
        message :"Enter the amount to pay",
    }
]);
Student_manager.pay_student_fees(fees_input.student_id,fees_input.amount);
break;
case "Show Status" :
let Status_input = await inquirer.prompt([{
    name : "student_ID",
    type : "number",
    message :"Enter a student ID",
}])
Student_manager.show_student_status(Status_input.student_id);
break;
case "Exit" :
    console.log("Exiting...");
    process.exit();
}
}
}    
main();