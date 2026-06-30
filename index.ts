let userName: string = "hello";
let age: number = 25;
console.log(userName, age)

//Function
function add(a: number, b:number): number{
    return a + b;
}
console.log(add(5,3))

//Array
let fruits: string[] = ["Apple", "Mango", "Orange"];
console.log(fruits)

//Object - single info
let student: {
    name: string;
    age: number;
} = {
    name: "Heenal",
    age: 21
};
console.log(student)

//Interface - multiple info
interface Student{
    name: string;
    age: number;
}
let s1: Student ={
    name: "Heenal",
    age: 21
}
let s2: Student ={
    name: "Tiya",
    age: 21
}
let s3: Student ={
    name: "Annu",
    age: 21
}
console.log(s1,s2,s3)

//Type checking
/*let roll: number = 25;
roll = "Twenty-Five";
console.log(age);*/