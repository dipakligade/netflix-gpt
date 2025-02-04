import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants'

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();



    const handleSignout = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className='absolute w-full px-8 py2 bg-gradient-to-b from-black z-10 flex justify-between'  >
            <img src={LOGO}
                alt='logo'
                className='w-48'
            />
            {user && <div className='flex p-2'>
                <img
                    className='w-20'
                    alt='userIcon'
                    src={user?.photoURL}
                />
                <button className='font-bold text-white' onClick={handleSignout}>(signout)</button>
            </div>}
        </div>
    )
}

export default Header
