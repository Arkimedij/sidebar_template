import React, { useState } from 'react'
import {motion} from "framer-motion";
import '../components/Sidebar.css';
import {FaHome}from 'react-icons/fa'
import {MdSportsCricket,MdLogoDev} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {FaNoteSticky,FaBars} from 'react-icons/fa6';
import {TiTick} from 'react-icons/ti'

function Sidebar({children}) {
    const routes=
    [
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/cricket",
            name:"Cricket",
            icon:<MdSportsCricket/>
        },
        {
            path:"/notes",
            name:"Notes",
            icon:<FaNoteSticky/>

        },
        {
            path:'/todo',
            name:"Todo",
            icon:<TiTick/>
        }

    ]
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
    
    <div className='main-container'>
        
        <motion.div animate={{width:isOpen ?"200px":"105px",transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },}} className='sidebar'>
            <div className='top_section'>
                <h1 className={isOpen?"logo":"small-logo"}>
                    <MdLogoDev/>
                </h1>
                <div className='bars'>
                    <FaBars onClick={toggle}/>
                </div>


            </div>
            <main>
                <section className='routes'>
                    {routes.map((route)=>(
                        <NavLink to={route.path} key={route.name} className='link' >
                            <div className='icon'>
                                {route.icon}

                            </div>
                            <div className={isOpen?"link_text":"just_text"}>
                                {route.name}
                            </div>
                        </NavLink>


                    ))}

                </section>
                
            </main>
            

        </motion.div>
        <div className='main2'>{children}</div>

        
    </div>
    
    </>
  )
}

export default Sidebar