"use client";
import React from 'react';
import Bg from './Components/Bg';
import Foreground from './Components/Foreground';
const Page = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Bg />
      <Foreground />
    </div>
  )
}

export default Page