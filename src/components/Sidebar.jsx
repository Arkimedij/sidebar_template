import React from 'react'
import {motion} from "framer-motion";
import '../components/Sidebar.css';
import {FaHome}from 'react-icons/fa'
import {MdSportsCricket,MdLogoDev} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {FaNoteSticky} from 'react-icons/fa6';
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
  return (
    <div className='main-container'>
        <motion.div animate={{width:"300px"}} className='sidebar'>
            <div className='top_section'>
                <h1 className='logo'>
                    <MdLogoDev/>
                </h1>
                <div className='bars'>
                </div>


            </div>
            <main>
                <section className='routes'>
                    {routes.map((route)=>(
                        <NavLink to={route.path} key={route.name}>
                            <div className='icon'>
                                {route.icon}

                            </div>
                            <div className='link_text'>
                                {route.name}
                            </div>
                        </NavLink>


                    ))}

                </section>
            </main>

        </motion.div>
    </div>
  )
}

export default Sidebar