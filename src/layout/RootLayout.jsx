import React from 'react'
import Header from "../component/Header"
import { Outlet } from 'react-router-dom'
import { SearchProvider } from '../context/SearchContext'

const RootLayout = () => {
  return (
    <SearchProvider>
         <Header />
         <main className='h-[calc(100vh-100px)] w-full'>
           <Outlet />
         </main>
    </SearchProvider> 
  )
}

export default RootLayout
