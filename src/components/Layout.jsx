import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Narbar from './Narbar';

function Layout() {
  return (
    <>
        <Narbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="p-6 max-w-4xl mx-auto w-full">
            <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout