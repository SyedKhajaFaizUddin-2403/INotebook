const express = require('express')
const User23 = require("../model/usermodel");

const Notes23 = require("../model/note");
const bodyParser = require("body-parser");
const route = express();
route.use(express.json())

route.post("/signup",async (req, res) => {
    const { name, email, password } = req.body;
   result1 = await User23.findOne({ email: email })
    //  result2 = await User23.findOne({ password: password });
    if (result1 )
    {
       
        
        res.send({ message: "User already registerd" });
    }
 else {
      const user = new User23({
        name,
        email,
        password
      })
        user
          .save()
          .then((result) => {
              console.log("savedd" + result);
               res.send({
                 message: "Successfully Registered, Please login now.",
               });
          })
            .catch((err) => {
              
            console.log("error" + err);
              res.send(err);
          });
    //   user.save((err) => {
    //     if (err) {
    //       res.send(err);
    //     } else {
    //       res.send({ message: "Successfully Registered, Please login now." });
    //     }
    //   });
    }
  });






// route.post("/signup", async (req, res) => {
//     // console.log("entered in signup")
//      const { email, password } = req.body;
//     // const user = new User({
//     //     email,password
//     // })
//     // user.save().then((result)=>{console.log("savedd"+result)}).catch((err)=>{console.log("error"+err)})
//     console.log(req.body)
//     // User23.findOne({ email: email }, (err, user) => {
//     // }
//               const data = new User23(req.body)
//               let result = await data.save()
//               console.log(result);
//               res.send({message:"Successfully registered "})
          
          
            
          
            
          
// })
route.post('/login', async (req, res) =>
{
    const {email, password} = req.body
    console.log(email)
    console.log(password)
    result1 = await User23.findOne({ email: email })
    //  result2 = await User23.findOne({ password: password });
    if (result1 )
    {
        const dat = JSON.stringify(result1._id);
        console.log("enterd login" + dat)
        
        res.send(dat);
    }
    else {
        res.send("failed")
    }
    
}
)
route.post('/addnotes', async(req, res) =>
{
    console.log("enterred")
    const { title, description,tag,user } = req.body
    
     const data = new Notes23(req.body);
    // const date = new Date();
    data.createddate = new Date().toLocaleString();
    data.updateddate= new Date().toLocaleString();
    let result = await data.save()
    console.log("added"+result)
    res.send(result)
})
route.post('/getnotes', async (req, res) => {
     const  {filter,user}  = req.body
    console.log("id is "+user);
    console.log("filter value:"+filter);
      if(filter === "All"){
    result = await Notes23.find({ user:user});
    if (result)
    {
      console.log("res"+result)
      res.send(result);
        }
      }
      else{
        result= await Notes23.find({ user:user,tag:filter});
        if (result)
        {
          console.log("res"+result)
          res.send(result);
            }
          }
})
route.post("/update", async (req, res) => {
  //  const User=new User23()
//   const result = await User23.find();
    const {user,oldtitile,oldtag,olddescription,title,tag,description}=req.body
   const result = await Notes23.updateMany({ user:user,tag:oldtag,description:olddescription}, { $set: { title:title,tag:tag,description:description,updateddate:new Date().toLocaleString()} },{timestamps:true})
  // console.log(Date.now.stringify);
  res.send(result);
});
route.post('/delete', async(req, res) => {
    const { user,description,tag } = req.body;
    console.log("in delete")
    console.log(user)
    const result= await Notes23.deleteOne({user:user,description:description,tag:tag})
res.send(result)
})
module.exports = route
