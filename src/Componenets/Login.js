import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { checkValidData, checkValidDataForSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


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
                        displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4D35AQEahsRtdVr5sQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737810117985?e=1739016000&v=beta&t=ZdzYiMakTzJix_z9_-uwCdqRFcebfswOFIThZ_jDvfk"
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
                    console.log("hello")
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
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/NL-en-20250120-TRIFECTA-perspective_7d8c4c6c-0203-456f-b471-34507cf679f4_large.jpg'
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
