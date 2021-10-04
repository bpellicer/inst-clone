import { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router"
import FirebaseContext from '../context/firebase';

export default function Login(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {

    }
    
    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);


    return(
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with profile"/>
            </div>
            <div className="flex flex-col w-2/5 bg-white p-5 border-gray-300 border">
                <h1 className="flex justify-center w-full">
                    <img src="images/logo.png" alt="Instagram" className="mt-2 mb-4 w-6/12"/>
                </h1>
                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleLogin} method="POST">
                    <input 
                        aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        className="w-full text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 focus:outline-none focus:border-blue-300"
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <input 
                        aria-label="Enter your password"
                        type="password"
                        placeholder="Password"
                        className="w-full text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 focus:outline-none focus:border-blue-300"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className="btn"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4 flex justify-center">
                    <a className="text-sm text-center hover:text-blue-300" href="/">Forgot your password?</a>
                </div>
            </div>
        </div>
    );
}