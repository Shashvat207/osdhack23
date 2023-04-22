import React from 'react'
import Inputform from '../components/InputForm'
import Main from '../components/mainPage'
import input from '../components/InputForm'
import { Link } from 'react-router-dom'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='h-screen bg-white'>




                <div className='flex'>
                    <div className='bg-[rgba(117,180,188,255)] h-screen w-1/2 '>

                        <a href='../components/InputForm'>
                            <img src={img2} className='h-1/2 w-1/2 mx-auto my-auto mt-20' ></img>
                            <button className='ml-[285px] mt-8 text-3xl font-bold text-white '>CONTRIBUTE</button>
                        </a>
                    </div>



                    <div className='bg-[rgba(234,68,138,255)] h-screen w-1/2'>
                        <a href='../components/mainPage'>


                            <img src={img3} className='h-1/2 w-1/2 mx-auto my-auto mt-20' >

                            </img>
                            <button className='ml-[230px] mt-8 text-3xl font-bold text-white'>RESEARCH ASSISTANCE</button>
                        </a>

                    </div>


                </div>

            </div >
        </>

    )
}
export default Home
