import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Empregister(){
    function handlesignup(event){
        event.preventDefault()
    var employee_name=document.getElementById("employee_name").value
    var employee_role=document.getElementById("employee_role").value
    var employee_email=document.getElementById("employee_email").value
    var employee_salary=document.getElementById("employee_salary").value
    var employee_doj=document.getElementById("employee_doj").value
    var employee_phone=document.getElementById("employee_phone").value
    var employee_age=document.getElementById("employee_age").value
    var employee_password=document.getElementById("employee_password").value
    var employee_gender=document.getElementById("employee_gender").value
    var employee_address=document.getElementById("employee_address").value
   
    var key={
      
        employee_name:employee_name,
        employee_role:employee_role,
        employee_email:employee_email,
        employee_salary:employee_salary,
        employee_doj:employee_doj,
        employee_phone:employee_phone,
        employee_age:employee_age,
        employee_password:employee_password,
        employee_gender:employee_gender,
        employee_address:employee_address
    }

     if(employee_name ===""){
        alert("Please Enter employee name")
    }
    else if(employee_role ===" "){
        alert("Please select employee role")
    }
    else if( employee_email===""){
        alert("Please Enter employee email")
    }
    else if( employee_salary===""){
        alert("Please Enter employee salary")
    }
    else if( employee_doj===""){
        alert("Please Enter employee doj")
    }
    else if(employee_phone ===""){
        alert("Please Enter employee phone")
    }
    else if( employee_age===""){
        alert("Please Enter employee age")
    }
    else if( employee_password===""){
        alert("Please Enter employee password")
    }
    else if( employee_gender===""){
        alert("Please Select employee gender")
    }
    else if(employee_address ===""){
        alert("Please Enter employee address")
    }
   else{
    axios.post("http://localhost:3333/register",key)
    .then(function(res){
        if(res.data.status==="error"){
            alert("Data's are not inserted")
        }
        else if(res.data.status==="success"){
            alert("Register Successfully!")
            window.location.href='/table'
        }
    })
   }
}
    return(
    <>
    <div className="">
        <div className="bg-info p-4 col-md-6 col-lg-6 mx-auto">
            <h1 className="text-center mb-5">Employee Register Page</h1>
      
        <form onSubmit={handlesignup} class="row g-3 back_img_">
  
  <div class="col-lg-6">
    <input type="text" class="form-control" id="employee_name" placeholder="Employee Name"/>
  </div>
  
  <div class="col-lg-6">
    <textarea type="text" class="form-control" placeholder="Enter Addres" id="employee_address"/>
  </div>
 
  <div className="col-lg-6">
    <input type="password" placeholder="Password" className="form-control" id="employee_password"/>
  </div>
  
  <div class="col-lg-6">
    <input type="email" placeholder="Enter Email" class="form-control" id="employee_email"/>
  </div>
  
  <div className="col-lg-6">
    <input type="text" placeholder="Employee Salary" className="form-control" id="employee_salary"/>
  </div>
        <br/>
  <div class="col-lg-6">
  <label for="inputState" class="form-label">Date of Joining</label>
    <input type="date" class="form-control" id="employee_doj"/>
  </div>
  <div class="col-lg-6">
    <input type="number" placeholder="phone number" id="employee_phone" className="form-control"/>
  </div>

    <div class="col-lg-6">
    <label for="inputState" class="form-label">Employee role</label>
    <select id="employee_role" class="form-select">
      <option selected>Choose...</option>
      <option>UI/UX designer</option>
      <option>Frontend Developer</option>
      <option>Backend Developer</option>
      <option>FullStact Developer</option>
      <option>Manual Tester</option>
      <option>Automatin Tester</option>
      <option>Cloud Engineer</option>
    </select>
  </div>

 
  <div class="col-lg-6">
    <label for="inputCity" class="form-label">Age</label>
    <input type="number" class="form-control" id="employee_age"/>
  </div>

  <div class="col-lg-6">
    <label for="inputState" class="form-label">gender</label>
    <select id="employee_gender" class="form-select">
      <option selected>Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  
 
  <div class=" col-12 p-4 ">
    <button type="submit" class="btn btn-dark col-12">CLick to Register</button>
  </div>
</form>
      
        </div>

    </div>
    </>

    );
}