import fs from "fs"

//console.log(fs)

//console.log(fs.readFileSync("sample.txt","UTF-8"))//this is a sysnchronous mathod

//in case if the data in the text file is so large than it will make webpage very slow
//we should use asysnchronous 

// fs.readFile("sample.txt","UTF-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data);
//     }
// })



//let olderdata = fs.readFileSync("sample.txt","UTF-8")
//fs.writeFileSync("sample.txt",olderdata+`Hello Bachoooo!!`)

// let data = `Hello bachon`
// fs.writeFile("sample.txt",data,(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(`Directory has been updated asynchronously`)
//     }
// })

fs.rm("sample.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Directory has been removed successfully`)
    }
})

//fs.unlinkSync("sample.txt")//unlink will remove the file from teh current directory 
