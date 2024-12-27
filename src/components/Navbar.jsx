import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch} from "react-redux";
import { toggleSidebar } from "./utils/appSlice";



const Navbar = () => {
  const dispatch = useDispatch();
  const toggleHandler = () =>{
     dispatch(toggleSidebar(true));
 }
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
            <div className="flex w-[96%] py-3 justify-between items-center">
          <div className="flex items-center ">
            <GiHamburgerMenu onClick={toggleHandler}size="24px" className="cursor-pointer" />
            <img className="px-4" width={"115px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt="yt_logo" />
        </div>
        <div className="flex w-[40%] items-center">
            <div className="flex w-[100%] ">
                <input type="text" placeholder="Search" className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none" />
                <button  className="py-2 border border-gray-400 rounded-r-full px-4"><CiSearch size="24px" /></button>
            </div>

             

        </div>
        <div className="flex w-[10%] justify-between items-center">
            <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
            <CiVideoOn size={"24px"} className="cursor-pointer" />
            <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
        </div>
     </div>
     </div>
  )
}

export default Navbar
