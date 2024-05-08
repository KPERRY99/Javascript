let grade = prompt("Please enter your grade", "");

Number(grade)

console.log(grade)

switch(true){
    case(grade>=90):
    console.log("A");
    break;
    case(grade>=80 && grade <=89):
    console.log("B");
    break;
    case(grade>=70 && grade <=79):
    console.log("C");
    break;
    case(grade>=60 && grade <=69):
    console.log("D");
    break;
    default:
    console.log("Insufficiente");
}