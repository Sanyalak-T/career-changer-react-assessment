import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // const handleToAboutPage = () => {
  //   navigate("/about");
  // }

  return (
    <>
      <div className='flex flex-col gap-4 text-center p-4'>
        <h1 className='font-semibold uppercase'>Generation Thailand React - Assessment</h1>
          <div className='flex flex-row justify-center gap-4'>
              <button className='text-white bg-blue-500 p-4 cursor-pointer'>User Home Sector</button>
              <button className='text-white bg-blue-500 p-4 cursor-pointer'>Admin Home Sector</button>
          </div>
      </div>
    </>
  )
}



export default Home
