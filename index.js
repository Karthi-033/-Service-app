const express= require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const nodemailer = require('nodemailer');
const userModel=require('./models/db');
app.use(cors())
app.use(express.json());

/*mongoose.connect("mongodb+srv://karthickparamasivam03:123@bike.8ah66om.mongodb.net/bike");*/

app.get("/view",(req,res)=>{
    userModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

// app.post("/status",async (req,res)=>{
//     const st=new userModel({
//         "serv":req.body.serv,
//         "mail":req.body.mail,
//     })
//     await st.save();
//     res.send(st);
//     console.log(st);
// })
app.post("/save",async (req,res)=>{
    const data=new userModel({
        "name": req.body.name,
        "phone": req.body.phone,
        "mail": req.body.mail,
        "gen": req.body.gen,
        "oil": req.body.oil,
        "water":req.body.water,
        "status":req.body.status
    })
await data.save();



let sender = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    secureConnection: false,
    auth: {
        user: 'karthickparamasivam03@gmail.com',
        pass: 'yghh yjxc guly xgtu'
    },
    tls: {
        rejectUnauthorized: true
    }
});

let mail = {
    from: "karthickparamasivam03@gmail.com",
    to: "pkkarthi822@gmail.com",
    subject: "New Customer",
    text: "You has a new booking of a services  ",
};

const mailsend = sender.sendMail(mail, function (error, info) {
    if (error) {
        console.log("error1111")
        console.log(error);
    } else {
        console.log("Email sent successfully: "
            + info.response);
    }

  
});

res.send(data);
console.log(data);


}

   
);

app.put("/update",async (req,res)=>{
    const status= req.body.status
    const id=req.body.id
    await userModel.updateOne(
        {_id:id},
      { status : status}
      
       
    )
    res.send(status);

});
app.delete("/delet/:id", async (req,res)=>{

      await userModel.findByIdAndDelete(req.params.id);
     
});


app.listen(3003,()=>
{
    console.log("surver is running in port 3003");
})