import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase';
import { login } from '../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
    }
  return (
    <div className="grid  h-[100vh] place-content-center	">
        <div className="flex flex-col space-y-6 items-end justify-end"> 
            <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt="gmail"
            className="object-contain  h-[150px]" />
            <Button variant="contained" onClick={signIn} color="primary" className='w-1/4'>Sign In </Button>
        </div>
    </div>
  )
}

export default Login