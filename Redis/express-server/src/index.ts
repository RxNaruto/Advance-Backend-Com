import express from "express"
import { createClient } from "redis"
const app =express();
app.use(express.json());

app.post("/submit" , async(req,res)=>{
    const{ problemId,userId,code,language}= req.body;
   try {
    await client.lPush("submission", JSON.stringify({problemId,userId,code,language}))
     res.json({
         message: "Submission Recieved"
     })
   } catch (error) {
    console.log(error);
    
   }
})

const client = createClient();
client.connect();

app.listen(3000);