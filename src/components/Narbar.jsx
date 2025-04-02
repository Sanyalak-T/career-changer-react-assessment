import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Narbar() {
  const navigate = useNavigate();

  const handleToHomePage = () => {
    navigate("/home");
  }

  const handleToOwnerPage = () => {
    navigate("/owner");
  }

  return (
    <>
        <div className='flex flex-row gap-4 justify-end mr-4 p-4 text-white font-bold bg-blue-400'>
        <button onClick={handleToHomePage} className='cursor-pointer'>Home</button>
         <button onClick={handleToOwnerPage} className='cursor-pointer'>Owner</button>
        </div>
    </>
  )
}

export default Narbar