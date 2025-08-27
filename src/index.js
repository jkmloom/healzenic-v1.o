import { app } from "./app.js";
import path, { dirname } from "path"
import express from "express"
import { fileURLToPath } from "url";
import dbConnections from "./db/index.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)
console.log(__filename)

const rootDir = path.join(__dirname,"..");
console.log(rootDir)

app.use(express.static(path.join(rootDir,'public')))


dbConnections()
.then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log(`Server is listening at http://localhost:${process.env.PORT}/`)
    })

    app.get('/',(req,res)=>{
        res.sendFile(path.join(rootDir,'public','html','index.html'))
    })
})
.catch((err)=>{
    console.log(`Couldn't connect to Database..`)
})

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','signin.html'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','signup.html'))
})
app.get('/reportpage',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','reportPage.html'))
})

import regChecker from "./middleware/reg.middlewares.js";
app.get('/homepage',regChecker,(req,res)=>{
   const now = new Date();
   console.log(typeof(now.getHours()))
   const options = {
    httpOnly:true,
    secure:true
   }
   if(now.getHours()==24)
   {
    res.cookie("checkList","false",options)
   }
    res.sendFile(path.join(rootDir,'public','html','homepage.html'))
})
app.get('/deleteaccount',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','deleteaccount.html'))
})
app.get('/informationpanel',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','informationPanel.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','aboutpage.html'))
})
app.get('/proposedfeatures',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','proposedfeatures.html'))
})
app.get('/recommendation',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','recommendation.html'))
})
app.get('/deleteMsg',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','deleteAccMsg.html'))
})
app.get('/initialhealth',(req,res)=>{
    res.sendFile(path.join(rootDir,'public','html','initialHealthPage.html'))
})


