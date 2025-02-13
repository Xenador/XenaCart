//intenstionally if we want to put some variable empty than we initialise it with null else we do not initialise something in the valriable the its initialise with the undefined datatype
let arr = [1,3,4,[1,2,4],undefined,"saurabh"]
//the datatype of the null is an ibject which is the error of the javascript 
let obj={
    name:"Ram",
    class:"CSE",
    address : {
        city:"moz",
        street:"ansari road"
    }
}
for(let ele in obj){
    console.log(ele,obj[ele])
}

//we are putting this like  this because ele is also an variable not the key value so inorder to acsses the key value with the help of the vcariable we have to put it in this format

//for of loop for iterables 

let arr1 = [10,20,30,40,50]
for(let ele of arr1){
    console.log(ele)
}
// 2 types of the datatypes 1 primitive datatype number booleans
//2 reference datatype object datatype


//to create the deep copy of the object 
let copyobj2 = JSON.parse(JSON.stringify(obj)) //stringify coverts the obj into the string and than josn .parse again converts the string in the obj json format

copyobj2.name = "Karan"
console.log(obj)
console.log(copyobj2)
//in case of the spread operators in objects :-they can form the mixture of the deep as well as the shallow copy not the deep copy as

let copyobj3 = {...obj}

copyobj3.name = "Karan"
copyobj3.address.city = "delhi"

console.log(obj)
console.log(copyobj3)

// var vs let vs const 

//reassign 
//var and let can be reassigned but const can not be reassigned

//redeclaration 
//var can be redeclared but  const and let can not be redeclared 
//Hoisting :- hoisting is the process in which the varibles or the function will be aloocated with the memory before the code execution
//basically before the code actual code execution the functions and variables are getting memory in the global execution phase or hoisting phase 
//than in hoisiting that particular memory which is assigned with the undefined kewyword shall be acssesed
//hoisting first searches only for the variables and the functions 
function abc(){
    if(true){
        let a=5 // as let is block scoped hence we can not acsess its value outside of if statement or any kind of else statement of loop statement 
    }
   // console.log(a)
}

abc()

//anything which is not inside the function is called to be in the global scope
console.log(`hi`)
