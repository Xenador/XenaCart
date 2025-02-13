console.dir(document)

let h1tag = document.getElementById("h1tag")
h1tag.innerHTML = "Yo!!<p> i m inner tag!!</p>"
h1tag.style.backgroundColor = "Red"
console.dir(h1tag)
//we can put some other tegs also  in the inner html key value of the any particular tag object 
//but if we want to change only the innertext of that tag than we shall use the key of the object innerText
let allBoxes = document.querySelectorAll(".box")
console.log(allBoxes)
//the difference between the nodelist and the array is that we are having the more features in array than nodelist
