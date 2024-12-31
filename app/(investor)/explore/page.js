"use client"
import React from 'react'
import PoolCard from "@/components/PoolCard";
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Explorer() {


    return (
  <div className="container mx-auto">
   <div className='blurry-background'>
    <h1 className='text-center  text-3xl font-poppins font-semibold dark:text-primary'>Discover Top Trader Pools</h1>
    <p className='text-center text-gray-500 mt-5'>Browse pools managed by expert traders. Invest in your preferred strategy and watch your wealth grow</p>
   </div>


   <PoolCard />


  </div>
    );
  }
  