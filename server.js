const express=require(`express`)
const cors=require(`cors`)
const app=express()
Port=5678

app.use(express.json())
app.use(cors)
app.get('/',(req,res)=>{
    res.status(200).send("Hello world!")
})
app.post('/signup',(req,res)=>{
    const {username,email,passsword,dateofbirth}=app.req
    if(!username){
        return res.status(400).json({msg:"username cannot be empty"})
    }
    if(!email){
        return res.status(400).json({msg:"Email cannot be empty"})
    }
    const c=passsword.length
    if(c<8 || c>16){
        return res.status(400).json({msg:"Password length should not be less than 8 or greater than 16"})
    }

})

app.listen(Port,()=>{
    console.log(`Succesfully connected ${Port}`)
})