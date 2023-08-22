import { CheckBoxOutlineBlank,LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectMail } from '../features/mailSlice'

const EmailRow = ({ title , subject, description , time }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openMail = () => {
        dispatch(
            selectMail({
            title ,
            subject, 
            description , 
            time 
            })
        );

        navigate('/mail');
    }
  return (
    <div onClick = {openMail} className="flex items-center h-[50px] border-b-[1px] border-neutral-100 cursor-pointer z-[999]
    hover:shadow-[0_4px_4px_-2px_rgba(0,0,0,0.24)] hover:border-t-[1px] hover:border-neutral-100 text-gray-700 ">
        <div className="flex  items-center">
            <CheckBoxOutlineBlank className="text-gray-500"/>
            <IconButton>
                <StarBorderOutlined  className="text-gray-500"/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlined  className="text-gray-500"/>
            </IconButton>
        </div>
        <h3 className="font-bold text-[14px] flex-[0.20] ">
            {title}
        </h3>
        <div className="flex flex-[0.8] items-center justify-start text-[13px] font-bold">
            <h4 className="w-[400px] whitespace-nowrap  overflow-hidden truncate px-[5px] ">{subject} {"   "}
            <span className='font-normal text-gray-500'>-{description}</span>
            </h4>
        </div>
        <p className="pr-[15px] text-[11px] font-bold">
            {time}
        </p>
    </div>
  )
}

export default EmailRow