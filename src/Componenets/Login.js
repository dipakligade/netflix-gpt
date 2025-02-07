import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { checkValidData, checkValidDataForSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR, BACKGROUND_IMAGE } from '../utils/constants'



const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleSubmitButton = () => {
        const message = !isSignIn
            ? checkValidDataForSignUp(name.current.value, email.current.value, password.current.value)
            : checkValidData(email.current.value, password.current.value);


        setErrorMessage(message);

        if (message) {
            setErrorMessage(message);
            return;
        }

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVTAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);

                });
        }

    }

    const toggelSigninSignUp = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div  >
            <Header />
            <div className='absolute'>
                <img src={BACKGROUND_IMAGE}
                    alt='backgroundImg'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black bg-opacity-80 w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !isSignIn && <input type='text'
                        placeholder='Full Name'
                        className='p-4 my-2 w-full bg-gray-700'
                        ref={name}
                    />
                }
                <input type='text'
                    ref={email}
                    placeholder='Email Address'
                    className='p-4 my-2 w-full bg-gray-700'
                />
                <input type='password'
                    ref={password}
                    placeholder='Password'
                    className='p-4 my-2 w-full bg-gray-700'
                />
                <p className='text-red-500 font-semibold text-base'>{errorMessage}</p>
                <button className='p-4 my-4 w-full bg-red-700 rounded-lg' onClick={handleSubmitButton}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggelSigninSignUp}> {isSignIn ? "New to NetFlix? Sign Up" : "Already Registered? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;
