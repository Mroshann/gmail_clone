import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectOpenMail } from '../features/mailSlice'

const Mail = () => {
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="bg-neutral-100 flex-1 h-fit">
        <div className="flex justify-between bg-white">
            <div className="">
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBack/>
                </IconButton>
                <IconButton>
                    <MoveToInbox/>
                </IconButton>
                <IconButton>
                    <Error/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
                <IconButton>
                    <Email/>
                </IconButton>
                <IconButton>
                    <WatchLater/>
                </IconButton>
                <IconButton>
                    <CheckCircle/>
                </IconButton>
                <IconButton>
                    <LabelImportant/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className="">
                <IconButton>
                    <UnfoldMore/>
                </IconButton>
                <IconButton>
                    <Print/>
                </IconButton>
                <IconButton>
                    <ExitToApp/>
                </IconButton>
            </div>
        </div>
        <div className="flex flex-col m-[30px] bg-white p-[30px] h-[100vh] shadow-[0px_5px_7px_0px_rgba(0,0,0,0.24)] -space-x-[20px] ">
            <div className="flex items-center border-b-[1px] border-neutral-100 relative p-[20px] space-x-[20px]">
                <h2 className="font-normal  text-[24px]">{selectedMail?.subject}</h2>
                <LabelImportant className="!text-[#e8ab02]"/>
                <p >{selectedMail?.title}</p>
                <p className="absolute top-[24px] right-0 text-[12px] text-gray-500">{selectedMail?.time}</p>
            </div>
            <div >
                <p className="p-[20px] break-words">{selectedMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail