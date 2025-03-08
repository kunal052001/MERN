const express = require("express");
const path = require("path");
const app = express();


// Define the port number
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

// app.set("view engine",'ejs')


// app.get("/:username/:age", (req, res) => {
//   res.send(`${req.params.username} age is ${req.params.age}`);
// });
app.use((req,res,next)=>{
     res.send("this is middleware here")
     next()
     
})

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"file.html"))
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
