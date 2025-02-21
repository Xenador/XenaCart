//console.dir(document)
//import {add,sub,mul,devide} from '../javaScript/Maths.js'
//import temp from '../javaScript/Maths.js'
import chk from 'chalk'
import figlet from "figlet";

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
// let h1tag = document.getElementById("h1tag")
// let imgtag = document.getElementById("imgtag")//ye html walw tags js ko object ki form mai milte hai but console converts it into form of 
// //html tag 
// //console.log(typeof(imgtag))
// console.dir(imgtag)
// h1tag.innerHTML = "Yo!!<p> i m inner tag!!</p>"
// h1tag.style.backgroundColor = "Red"
// console.dir(h1tag)
//we can put some other tegs also  in the inner html key value of the any particular tag object 
//but if we want to change only the innertext of that tag than we shall use the key of the object innerText
// let allBoxes = document.querySelectorAll(".box")
// console.log(allBoxes)
// //imgtag.src = "image2.jpg"
// //the difference between the nodelist and the array is that we are having the more features in array than nodelist

// let allimg = document.querySelectorAll(".img1")//this is a nodelist 

// for(let i=0;i<allimg.length;i++){
//     allimg[i].setAttribute("src","./image2.jpg")
//}
//we can also change the val of attributes by get attributes mathod
// let allshapes = document.querySelectorAll(".box")

// console.dir(allshapes)

// for(let i=0;i<allshapes.length;i++){
//     if(allshapes[i].classList.contains("circle")) allshapes[i].classList.remove("circle")
//     else allshapes[i].classList.add("circle")
// }
// let box = document.querySelector(".circle")
// console.dir(box)
// let h1tag = document.createElement("h1")
// h1tag.innerHTML = "HI I am h1 tag created through javascript"
// box.append(h1tag)
// for(let i=0;i<allshapes.length;i++){
//     if(allshapes[i].)
// }

// let images = document.querySelectorAll(".img1")
// let flag = true
// let image = document.querySelector(".img1")
// console.dir(image)
// document.addEventListener("click", function funct() {
//     console.log("Image is clicked")
//     if (flag == true) {
//         image.setAttribute("src", "./image2.jpg")
//         flag = false
//     }
//     else {
//         image.setAttribute("src","./image1.jpg")
//         flag = true
//     }
//     //image.setAttribute("src", "./image2.jpg")
// })


// let n = document.querySelector(".number").value
// let cont = document.querySelector(".cont")
// let submit = document.querySelector(".submit")

// submit.addEventListener("click",function(){
//     //let color = documnet.querySelector(inputc).value
//     let dropdown = document.querySelector(".dropdown").value
//     //console.log(dropdown)
//     let n = document.querySelector(".number").value
//     cont.innerHTML = "";//container.innerhtml se we have cleared all the child elements that we have appended in the div tag
//     //console.log(n)
//     let color = document.querySelector(".inputc").value
//     for(let i=0;i<n;i++){
//         let shape = document.createElement("div")
//         shape.classList.add("shape")
//         if(dropdown=="circle") shape.classList.add("circle")
//         shape.style.borderColor = `${color}`
//         cont.appendChild(shape)
//     }
// })

//  submit.addEventListener("click",function(){
//      console.log(n)
//  })


// let grandparent = document.querySelector(".grandparent");
// let Parent  = document.querySelector(".parent")
// let child  = document.querySelector(".child")

// grandparent.addEventListener("click",function(){
//     console.log(`grandparent was clicked`)
// },true)

// Parent.addEventListener("click",function(){
//     console.log(`parent was clicked`)
// },true)

// child.addEventListener("click",function(){
//     console.log(`child was clicked`)
// },true)

//in the end bracket we did seen that true represents that the in the envent bubbling process the capturing is turned on 
//which means that if an action is performed on the child than for that action function will first be performed for the parent action 
//rather than the dunction for the element on which the click was made
//the scenerio in which if we perform some action on the child of parent and grandparnt than that action shall also be performed on the parent and grandparent as well
//this is called event bubbling

//we are advied not to add to much event listeners to our page as it can made our page more slow
//in js event listeners are stored in some mermory and they actually are waiting to be called 
//Event deligation is a technique which helps us to reduce the lots of usage of event listeners
//it tells ki we should apply the event lisener to the parent instead of child in order to achieve tha event listener to all the child elements

// let box = document.querySelector(".box")

// box.addEventListener("click",function(clickedele){
//     console.log(clickedele.target.classList[1])
// })

//event bubbling and the even cspturing is the important property of the java script which allows us to do the event deligation in javascript

//pure funcitons are the functions which do not affect any other code 
// for each function operates on the same array on which its called while map fuction operates on seperate memory location
// let arr = [1,2,3,4]
// let ans = arr.map(function(ele,idx,arr){
//     return ele*2
// })
// //in these hgher order functions we are actually not calling this but passing the reference of these functions
// console.log(arr)
// console.log(ans)

//closures refers to the point that a function will always carry its lexical scope
//when you are returning a function than a fuction wil always carry its lexcal scope
//currying is conscept of javascript in which we what we do is just split the functional argurments into smaller subfuncitons 
// function abc(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// let ans = ((abc(1))(2))(3);
// console.log(ans)

//this keyword in javasrcipt plays different role for diffrent type of fucntions for the normal fucntion
//this keyword is gives the scope of the body where the this keyword is placed 
//while for the arrow function the this keyword gives the scope where the function is called 

// let obj = {
//     name:"Ram",
//     class:"CSE A",
//     givedetailes: function(){
//     console.log(this);    
//     },
//     givedetailstwo: ()=>{
//         console.log(this);
//     }
// }

// console.log(`with normal function -> ${obj.givedetailes()}`)
// console.log(`with normal function -> ${obj.givedetailstwo()}`)

//javascript is synchronous by nature but it shoes its asynchronous behaiviour at different scenerios for eg in setTimeout functions or in promises or in callbacks or in async/await
// console.log(`Start`);
// function abc(){
//     setTimeout(()=>{
//         console.log(`Maggi is here`);
//     },2000)
// }
// abc();
// console.log(`end`);

//promises

// function makeMaggi(raw){
//     let pr = new Promise((resolve,reject)=>{
//         if(raw!=undefined){
//             setTimeout(()=>{
//                 resolve(`Maggie is ready`);
//             },2000)
//         }
//         else reject(`Maggie is not ready`);
//     })
//     return pr;
// }

// console.log(`Start`);
// console.log(makeMaggi());//here we are not getting the output of the promise object so inorder to get the output of the promise object we have to use the then and catch mathod 
// makeMaggi().then((res)=>{
//     console.log(res);
// }).catch((err=>{
//     console.log(err);
// }))

// console.log(`end`);
//promises are the objects which are used to perfrom the asynchronous task in the javascript 
//promises have three states:
//1->fullfilled 
//2->pending 
//3->rejected

//promises are more readable than the callback statements

// function task1(raw){
//     let pr = new Promise((resolve,reject)=>{
//         if(raw!=undefined){
//             setTimeout(()=>{
//                 resolve(`task1 done`)
//             },2000)
//         }
//         else reject(`can't be done`)
//     })
//         return pr;
// }function task2(raw){
//     let pr = new Promise((resolve,reject)=>{
//         if(raw!=undefined){
//             setTimeout(()=>{
//                 resolve(`task2 done`)
//             },2000)
//         }
//         else reject(`can't be done`)
//     })
//     return pr
// }
// function task3(raw){
//     let pr = new Promise((resolve,reject)=>{
//         if(raw!=undefined){
//             setTimeout(()=>{
//                 resolve(`task3 done`)
//             },2000)
//         }
//         else reject(`can't be done`)
//     })
//     return pr;
// }

// task1(`raw`).then((res)=>{
//     console.log(res)
//     return(task2(res))
// }).then((res)=>{
//     console.log(res)
//     return task3(res)
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//now we are to use the async await to use javascript asynchrously
// async function abc(){
//     try{let ans1 = await(task1(`raw`));
//     console.log(ans1)
//     let ans2 = await(task2(ans1));
//     console.log(ans2)
//     let ans3 = await(task3());
//     console.log(ans3)}
//     catch(err){
//         console.log(err)
//     }
// }
// abc()

// console.log(add(1,2))

// console.log(sub(1,9))

// console.log(temp(1))
//try catch is used to for the rejection returned by the promise in the function
//package lock json is the copy of the copy of the package.json so if any unnecessary changes made in the json file can retrieved  back from the package-lock.json

//as the node modules are so heavy modules we prefer not to puch these modules into the github
//now if we delete our node modules that can wven be retrieved from the package lock json files or we ccan say from teh dependecies 
console.log(chk.red(`Hello World`))

//we are just writing the code in javascript 
//but javascript do not has the capablity to interact with the hardware 
//so in libuv is responsible for making our js code to interact with the hardware 
//as lib uv is written in c++