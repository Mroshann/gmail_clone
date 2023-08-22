import { Apps, ArrowDropDown, Menu, Notifications, Search } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../features/userSlice"
import { auth } from "../firebase"


const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }
  return (
    <div className="flex items-center justify-between border-[1px] border-neutral-100">
        <div className="flex space-x-[5px] items-center">
            <IconButton>
                <Menu/>
            </IconButton>
            <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt="gmail"
                className="object-contain  h-[30px]" />
        </div>

        <div className="flex flex-[0.7] items-center p-[5px] my-[10px] rounded-[5px] bg-neutral-100 ">
            <Search className="text-gray-500"/>
            <input type="text" placeholder="search" className="capitalize border-none outline-none text-base w-full bg-transparent p-[5px]" />
            <ArrowDropDown className="text-gray-500"/>
        </div>
        <div className="flex space-x-[10px] mr-[10px]">
            <IconButton>
                <Apps/>
            </IconButton>
            <IconButton>
                <Notifications/>
            </IconButton>
            <Avatar onClick={signOut} className="cursor-pointer" src={user?.photoUrl}/>
           
        </div>
    </div>
  )
}

export default Header