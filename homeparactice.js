let score = prompt("enter your score(0-100):");
let grade;
if( score>= 90 && score<=100){
    grade = "a";
}
else if(score>= 70 && score<=89){
    grade = "b";
}
else if(score>= 60 && score<=79){
    grade = "c";
}
else if(score>= 50 && score<=59){
    grade = "d";
}
else if(score>= 0 && score<=49){
    grade = "f";
}
console.log("your grade is according to your score is=",grade)