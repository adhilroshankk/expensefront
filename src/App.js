import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getUsers } from './services/allApis';


function App() {
  const [users, setUsers] = useState([])

  const accessUsers = async () => {

    const res = await getUsers()
    setUsers(res.data)
  }

  const handlesort = () => {
    const sorted = [...users].sort((a, b) => a.amount - b.amount);
    setUsers(sorted);
  };
  const handlesortb = () => {
    const sorted = [...users].sort((a, b) => b.amount - a.amount);
    setUsers(sorted);
  };

  useEffect(()=>{
    accessUsers()
  },[])

  return (
    <div className='cardfront m-4'>
      <h1 className='d-flex flex-column align-items-center  text-warning'>MY EXPENSES</h1>
      <div className='addbutton d-flex justify-content-center my-5'>
        <Link to={'/adduser'}><button className='btn btn-success'>ADD NEW EXPENSE</button></Link>
        <button className='ms-3 btn btn-danger ' onClick={handlesort}>SORT BY LOW - HIGH </button>
        <button className='ms-3 btn btn-warning' onClick={handlesortb}>SORT BY HIGH - LOW</button>

      </div>
      <div className='carddetail d-flex justify-content-center mt-4 gap-2 '>
     { users.length > 0?
     users.map(i=>(
      <Card className='shadow' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> DESCRIPTION :  {i.description} </Card.Title>
        <p>SPEND : {i.amount}</p>
        <p>DATE SPEND : {i.date}</p>
       
      
      </Card.Body>
    </Card>)):
    <p>loading...</p>}
      </div>

    </div>
  )
}

export default App