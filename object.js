var student1 = {
    id: 001,
    name: "parag",
    marks:85
}
var student2 = {
    id: 002,
    name: "Ferdous",
    marks:85
}
student1.marks =99;
student1["name"] ="parag alam";
student2["name"]= "ferdous Alam";
var studentIdOne = student1.id;

console.log(studentIdOne);
console.log(student1.name);
console.log(student2);