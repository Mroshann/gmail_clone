import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from '../firebase'

const EmailList = () => {
    const [emails,setEmails] = useState([]);


    useEffect(() => {
        db.collection("email")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot) => {
            setEmails(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data: doc.data(),
                }))
            )}
            );
    },[])

    console.log(emails);
  return (
    <div className='flex-1 overflow-scroll  items-center scroll-smooth [&::-webkit-scrollbar]:hidden'>
        <div className="flex  justify-between border-b-[1px] border-neutral-100 bg-white z-[999] pr-[10px]">
            <div>
                <CheckBox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>

        <div className="sticky top-0 flex border-b-[1px] border-neutral-100 z-index-[999] bg-white z-[999]">
            <Section  Icon={Inbox} title="primary" color="red"  selected/>
            <Section Icon={People} title="social" color="#1A73E8" />
            <Section Icon={LocalOffer} title="promotions" color="green" />
        </div>
        
        <div className='pb-[10%]'>
            {console.log(emails)}
            {emails.map(({id , data: {to , subject , message , timestamp}}) => (
                <EmailRow
                  key={id}
                  title={to}
                  subject={subject}
                  description={message}
                  time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}

             
        </div>
    </div>
  )
}

export default EmailList
