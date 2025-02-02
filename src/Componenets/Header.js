import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
    }, [])
    return (
        <div className='absolute w-full px-8 py2 bg-gradient-to-b from-black z-10 flex justify-between'  >
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
