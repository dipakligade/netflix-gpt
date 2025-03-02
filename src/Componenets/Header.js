import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import { changeLanguage } from '../utils/configslice';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const showGptSearch = useSelector(store => store.gptSearch.showGptSearch);


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

    const handleOnClickGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }



    return (
        <div className='absolute w-full px-8 py2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  '  >
            <img src={LOGO}
                alt='logo'
                className='w-36 md:w-48 mx-auto md:mx-0 '
            />
            {user && <div className='flex justify-between p-2'>
                {showGptSearch &&
                    (<select className='p-2 m-2 bg-gray-700 text-white rounded-md' onChange={handleLanguageChange}>
                        {
                            SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                        }

                    </select>)
                }
                <button className='bg-violet-700 text-white m-2 p-2 rounded-lg' onClick={handleOnClickGptSearch}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
                <img
                    className='hidden md:block w-12 h-12 mt-2 mr-1'
                    alt='userIcon'
                    src={user?.photoURL}
                />
                <button className='font-bold text-xl text-white' onClick={handleSignout}>signout</button>
            </div>}
        </div>
    )
}

export default Header
