import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../services/allApis';

function AddUser() {

    const navigate=useNavigate()
    const [addUse,setAddUse]=useState({description:"",amount:"",year:""})

    const handlechange=(e)=>{
        let{
            name,value
        }=e.target
        setAddUse({...addUse,[name]:value})

    }
    
    const handleAdd=async()=>{
      await  addUser(addUse)
      navigate('/')
    }

  return (
    <div className='addfront d-flex justify-content-center  '>
        <div className='formadd w-50 shadow'>
        <h1 className='text-warning'>Add new expense</h1>
        <Form.Control className='mt-3' size="lg" type="text" placeholder=" Enter Description" name="description" onChange={handlechange}/>
        <Form.Control className='mt-3' size="lg" type="text" placeholder="Enter Amount" name="amount" onChange={handlechange}/>
        <Form.Control className='mt-3' size="lg" type="date" placeholder="Enter Date" name="date" onChange={handlechange} />
       <div className='buttonadd d-flex justify-content-center mt-5 gap-2'>
            <button className='btn btn-success ' onClick={handleAdd}>Add</button>
            <Link to={'/'}><button className='btn btn-dark'>Cancel</button></Link>
       </div>


        </div>
    </div>
  )
}

export default AddUser