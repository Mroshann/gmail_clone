import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone,  Star } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import SidebarOption from './SidebarOption'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice'

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex-[0.3] max-w-[250px] pr-[20px]">
        <Button startIcon={ <Add/>} className="!rounded-[30px] !my-[15px] !ml-[20px] !capitalize !shadow-lg !p-[10px] !text-gray-500 "
        onClick={() => dispatch(openSendMessage())}>
            Compose
        </Button>

        <SidebarOption Icon={ Inbox } title= "Inbox" number= {23} selected={true}/>
        <SidebarOption Icon={ Star } title= "Starred" number= {23} />
        <SidebarOption Icon={ AccessTime } title= "Snoozed" number= {23} />
        <SidebarOption Icon={ LabelImportant } title= "Important" number= {23} />
        <SidebarOption Icon={ NearMe } title= "Sent" number= {23} />
        <SidebarOption Icon={ Note } title= "Drafts" number= {23} />
        <SidebarOption Icon={ ExpandMore } title= "More" number= {23} />

        <div className="flex justify-center">
          <div className="">
            <IconButton>
              <Person/>
            </IconButton>
            <IconButton>
              <Duo/>
            </IconButton>
            <IconButton>
              <Phone/>
            </IconButton>

          </div>
       
        </div>

    </div>
  )
}

export default Sidebar