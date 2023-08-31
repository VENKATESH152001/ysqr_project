import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
export function Table(){
    const[empregstr,setEmpregstr]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3333/getdata")
        .then(myreg=>myreg.json())
        .then(empreg=>setEmpregstr(empreg))
    })
    const csvhd=[
         
         { label:"employee_id", key:"employee_id"},
         { label:"employee_name", key:"employee_name"},
         { label:"employee_role", key:"employee_role"}, 
         { label:"employee_email", key:"employee_email" },
         { label:"employee_salary", key:"employee_salary"},
         { label:"employee_doj", key:"employee_doj"},
         { label:"employee_phone", key:"employee_phone"},
         { label:"employee_age", key:"employee_age"},
         { label:"employee_password", key:"employee_password"},
         { label:"employee_gender", key:"employee_gender"},
         { label:"employee_address", key:"employee_address"},
        
    ];
    return(
        <>
       
            
            <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Employe ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Date Of Join</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
        {empregstr.map((value,index)=>(
                <tr>
                    <td>{value.employee_id}</td>
                    <td>{value.employee_name}</td>
                    <td>{value.employee_role}</td>
                    <td>{value.employee_email}</td>
                    <td>{value.employee_salary}</td>
                    <td>{value.employee_doj}</td>
                    <td>{value.employee_phone}</td>
                    <td>{value.employee_age}</td>
                    <td>{value.employee_password}</td>
                    <td>{value.employee_gender}</td>
                    <td>{value.employee_address}</td>
                </tr>
        ))}
            </tbody>
        </table>
        <div className=" text-center">
        <CSVLink data={empregstr} headers={csvhd}>
            <button className="btn btn-info btn-lg">Download</button>
        </CSVLink>
        </div>
        </>
    );
}