//console.dir(document)

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


let n = document.querySelector(".number").value
let cont = document.querySelector(".cont")
let submit = document.querySelector(".submit")

submit.addEventListener("click",function(){
    //let color = documnet.querySelector(inputc).value
    let dropdown = document.querySelector(".dropdown").value
    //console.log(dropdown)
    let n = document.querySelector(".number").value
    cont.innerHTML = "";//container.innerhtml se we have cleared all the child elements that we have appended in the div tag
    //console.log(n)
    let color = document.querySelector(".inputc").value
    for(let i=0;i<n;i++){
        let shape = document.createElement("div")
        shape.classList.add("shape")
        if(dropdown=="circle") shape.classList.add("circle")
        shape.style.borderColor = `${color}`
        cont.appendChild(shape)
    }
})

//  submit.addEventListener("click",function(){
//      console.log(n)
//  })








