import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

const SendMail = () => {    
    const dispatch = useDispatch();
    const { register, handleSubmit , formState : {errors}} = useForm();

    const onSubmit = (formData) => {

        db.collection("email").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage());
        console.log(formData);
    }

  return (
    <div className="absolute bottom-0 right-[50px] bg-[#404040] w-[40%] h-[40%] max-w-[500px] rounded-t-[10px] flex flex-col border-[1px] border-neutral-100 shadow-[0px_5px_7px_0px_rgba(0,0,0,0.24)] h-">
        <div className="p-[13px] flex justify-between items-center text-gray-500">
            <h3 className="text-[whitesmoke] text-[13px]">New Message</h3>
            <Close className="cursor-pointer" onClick={() => dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
            <input  type="email" className="h-[30px] p-[10px] border-b-[1px] outline-none border-[whitesmoke]" {...register('to',{required: true })}  placeholder="To"/>

            {errors.to && <p className="bg-white text-[red] text-end p-[2px]">To is required</p>}

            <input  type="text" className="h-[30px] p-[10px]  border-b-[1px] outline-none border-neutral-100"  {...register('subject',{required: true })} placeholder="Subject"/>

            {errors.to && <p className="bg-white text-[red] text-end p-[2px]">Subject is required</p>}
            

            <input  type="text" className="h-[30px] p-[10px]   border-b-[1px] outline-none border-neutral-100 flex-1 align-top inline-block"  {...register('message',{required: true })}placeholder="Message..."/>

            {errors.to && <p className="bg-white text-[red] text-end p-[2px]">Message is required</p>}


            <div>
                <Button className="!bg-[#3079ed] !capitalize !m-[15px] !text-white" type="submit">Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail