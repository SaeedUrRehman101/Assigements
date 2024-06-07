class batch202309b{
    constructor(name,course,semester){
        this.name=name;
        this.course=course;
        this.semester=semester;
    }
    learning(name,course,semester){
        let x=name+" is the student of " +course + "and current semester is "+ semester;
        document.getElementById("object_heading").innerHTML=x;
        // console.log(x);
    }
}
let std=new batch202309b;
std.learning("Fahad","ACCP","2023");

