import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DropDownProfile from './DropDownProfile'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [register,setRegister] =useState(false)
    const [openProfile, setOpenProfile] =useState(flase);

    const storeName = useSelector(state => state.user.name);
    console.log(storeName)
    console.log(storeName)

    return(
        <>
           <div className ='flex flex-row justify-between items-center'>
                <GiHamburgerMenu size = {24} className ="cursor-pointer" />
                 <div className ='flex gap-4 items-center'>
                      <div className ='flex gap-2 items-center relative mr-12'>
                        <AiOutSearch className ='absolute ml-3' size= {20} />
                        <input type ="search" placeholder ="Cerca" className ='p-2 pl-10 rounded-3xl' />
           </div>
           <ul className = 'flex flex-row gap-2 items-center'>
           <li>
                   <RiNotification3Line size ={24} />
           </li>
           <li>
           <BiMessageDetail size ={24} />
           </li>
        </ul>
        {
            !storeName ?(
                <button onClick = {() => setOpen}
            )
        }



        </>
    )

    


}