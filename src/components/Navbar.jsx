import { useState } from "react"
import logo from "../images/logo1.png"
import closeIcon from "../images/close.svg"
import { NavLink } from "react-router-dom"
const Navbar = () =>
{
    const [scrollposition, setScrollPosition]=useState(false)

    const ChangeBackground=()=>{
      console.log(window.scrollY);
    if(window.scrollY>=80){
      setScrollPosition(true)
    }else{
      setScrollPosition(false)
    }
    }
  
    window.addEventListener("scroll", ChangeBackground);

   let [open, setopen] = useState(false)
   const menus = [
      { name: "HOME", link:"/" },
      { name: "ABOUTUS", link:"/aboutus" },
      { name: "SERVICE",link:"/service" },
      { name: "CONTACT",link:"/contact" },
      // { name:"DONATE", link:"/donate"},
   ]
   return (
    <>
    <nav className={` ${scrollposition ? 'bg-white' : 'bg-[#eaedf5]' } flex items-center justify-between z-50  bg-[#eaedf5] sticky top-0`}>

    <img src={open ? "./src/assets/icon-close.svg" : "./src/assets/icon-hamburger.svg"} className="md:hidden  fixed right-5 cursor-pointer z-50 top-4" onClick={() => setopen(!open)} />
    <img src={logo} alt="logo" className="w-10 md:ml-32 sm:ml-3 ml-2"  />
    <ul className={`bg-[#ffffff14] backdrop-blur-sm  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
       {
          menus?.map((menu, index) => (
             <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                <NavLink  to={menu.link} className="text-[#004b88] font-bold cursor-pointer font-Barlow  text-sm inline-block md:py-5 py-3">
                   <span className="font-bold mr-1.5">0{index}</span>  {menu.name}</NavLink>
             </li>
          ))

       }
       <button className="popup-button bg-[#9a1d4e] text-white px-6 py-2 rounded-md font-bold ml-6 " bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out relative ><NavLink to="/donate">Donate</NavLink></button>
    </ul>
 </nav>
 </>
   )
}
export default Navbar
