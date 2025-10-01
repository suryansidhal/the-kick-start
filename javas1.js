console.log("Hey! Java Script"); //to print a variable or print statement
console.log("loving itava Script");
fullname= "harry potter";
console.log(fullname) //no double coats while printing a variable.
x=null; //special kind variable in js
y=undefined; //another special kind of variable in js;
fullname="lol"; //js is dynamically typed, the variable value changed after new value input
console.log(fullname);
//FullName- camel case
//full-name-kabab case
//full_name-snake case

let FullName= "virat"; //declare a variable by commenting let
console.log(FullName);

//we don't use var anymore bec it was confusing.
//let don't allow re declaration,just updATion. it is a block variable
//CONST are those which can't be redeclared or updATED.

FullName= "kohli"; //not writing LET again, just updating the value.
console.log(FullName);

{
    let a=5;
    // let a=10 not possible in same block.
    console.log(a);
}
//formation of second block
{
    let a=10;
    console.log(a);
}

//tu acess the type of the vaiable, write this is in console
     // typeof VARIABLENAME //

const STUDENT = {  //DECLARE A OBJECT TO MAKE A SECTION OF INFORMATION
    fullName:"Suryansi Dhal",
    age:20,
    cgpa:9.3,
    Ispass:true,
};

/*TO ACCESS THE OBJECT'S MATERIAL IN THE JS CONSOLE- NAMEOFOBJECT["VARIABLENAME"]
   EXAMPLE- STUDENT["fullName"]*/

/* TO ACCESS THE VALUE OF THE KEY IN THE CODE CONSOLE.LOG(OBJECTNAME["KEYNAME"]);
                                        OR    CONSOLE.LOG(OBJECTNAME.KEY)*/

//TO UPDATE ANY VALUE IN THE OBJET SEC, OBJECTNAME["KEY"]=OBJECTNMAE["KEY"] +1;//
 
STUDENT.age= STUDENT.age +1;
console.log(STUDENT.age);

//addition of number with string in js adds it
// "absc" + 123 = "absc123"//

const Profile={
    title: "Suryansi",
    followers: 10000000,
    following:87,
    IsFollow: true,
    proffesion: "full stack developer,EX  MICROSOFT DEVELOPER, INTERN AT GOOGLE AND CURRENTLY IN GOOGLE AS FULL TIME DEVELOPER ",
};

console.log(Profile);
//arthematic operators
let a=9;
let b=3;
console.log("a+b=",a+b);
//comparison operator
let z=8;
let g="8"; //string-->number
console.log("8==8?",z==g); //implicit conversion

//for stricter comparision so even implict conversion isn't allowed to move on
let u=8;
let abc="8"; //string-->number
console.log("8==8?",z===g); //no conversion allowed


//conditional statement

let color;
let mode;
if(mode=== "dark-mode"){
    color="black";
};

//alert over webpage before popups
alert("hello!");

//prompt--> pop ups but also takes input

/*let pt= prompt("helo!"); //takes input and prints the element in console
console.log(pt);*/

let user=prompt("enter your number");
if(user%5===0){
    console.log("number is yes");
}else{
    console.log("nah!");
};

let grade=prompt("enter your grade");
    if(grade>=80 && grade<=100){
        console.log("a");
    }else if(grade>=70 && grade<=89){
        console.log("b");
    }else if(grade>=60 && grade<=69){
        console.log("c");
    }else if(grade>=50 && grade<=59){
        console.log("d");
    }else{
        console.log("f");
    };
//'for of' loop is used to go on every single value of string and check 
let str="tony";
for(let i of str){ 
        console.log("i=",i)                               //for(let variable of string variablename)
};

// 'for in' loop for object variable
let singham={
    dso:"nacho"
    golmal:70
    cpa:9.7
}
for(let i in singham){ //i gives you keys eg: dsa,golmal,cpa
    console.log(i);
}