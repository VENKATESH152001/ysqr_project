const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')
accpt=express()
accpt.use(cors())
accpt.use(express.json())
accpt.use(bodyparser.urlencoded({extended:true}))
accpt.use(express.static('public'))
let connec=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"venkat12.*3",
    database:"ysqproject"
})

connec.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("database connected")
    }
})
accpt.post('/register',(request,response)=>{
    let{employee_name, employee_role,employee_email,employee_salary,employee_doj,employee_phone,employee_age,employee_password,employee_gender,employee_address}=request.body
    let sql='insert into employee_detls (employee_name,employee_role,employee_email,employee_salary,employee_doj,employee_phone,employee_age,employee_password,employee_gender,employee_address)values(?,?,?,?,?,?,?,?,?,?)'
    connec.query(sql,[employee_name,employee_role,employee_email,employee_salary,employee_doj,employee_phone,employee_age,employee_password,employee_gender,employee_address],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
accpt.get('/getdata',(request,response)=>{
    let sql='select * from employee_detls'
    connec.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
accpt.listen(3333,()=>{
    console.log("port is running 3333")
})