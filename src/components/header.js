import { useContext } from "react";
import { Link } from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from '../constants/routes';

export default function Header(){
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    return (
        <header className="h-16 bg-white border-b border-gray-300 mb-8">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center cursor-pointer">
                        <h1 className="flex justify-center w-full">
                            <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                                <img src="/images/logo.png" alt="Instagram logo" className="mt-2 w-6/12"></img>
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray-700 text-center flex items-center">
                        { user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                    <svg 
                                     xmlns="http://www.w3.org/2000/svg" 
                                     class="h-6 w-6" 
                                     fill="none" 
                                     viewBox="0 0 24 24" 
                                     stroke="currentColor">
                                        <path 
                                         stroke-linecap="round" 
                                         stroke-linejoin="round" 
                                         stroke-width="2" 
                                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                                        />
                                    </svg>
                                </Link>
                                <button
                                 type="button"
                                 title="Sign Out"
                                 onClick={() => firebase.auth().signOut()}
                                 onKeyDown={(event) => {
                                     if (event.key === 'Enter') {
                                         firebase.auth().signOut();
                                     }
                                 }}
                                ></button>
                                
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}