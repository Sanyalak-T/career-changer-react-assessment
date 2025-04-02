import { useState } from 'react';
import { Employees } from '../data/Employees';

const Home = () => {

  const [showData, setShowData] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-4 text-center p-4'>
        <h1 className='font-semibold uppercase'>Generation Thailand React - Assessment</h1>

          <div className='flex flex-row justify-center gap-4'>
              <button onClick={() => setShowData(!showData)} className='text-white bg-blue-500 p-4 cursor-pointer'>User Home Sector</button>
              <button className='text-white bg-blue-500 p-4 cursor-pointer'>Admin Home Sector</button>
          </div>
      {showData && (
        <ul>{Employees.map((emp) => <li key={emp.id}>{emp.name} - {emp.lastname} - {emp.position}</li>)} </ul>
      )}
      </div>
    </>
  )
}

export default Home
