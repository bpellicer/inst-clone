import { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress,password);
            history.push(ROUTES.DASHBOARD)
        }
        catch(error){
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    const handleClick = () => {
        let togglePass = document.getElementById("togglePassword");
        let password = document.getElementById("password");
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        togglePass.classList.toggle('bi-eye');
        password.setAttribute('type',type);
    };

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);

  

    return(
        <div className="container flex justify-center mx-auto max-w-screen-md items-center h-screen">
            <div className="md:flex w-6/12 hidden">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with profile"/>
            </div>
            <div className="flex flex-col md:w-6/12 px-5">
                <div className="flex flex-col bg-white p-5 border-gray-300 border">
                    <h1 className="flex justify-center w-full">
                        <img src="images/logo.png" alt="Instagram" className="mt-2 mb-4 w-6/12"/>
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form onSubmit={handleLogin} method="POST" className="pt-4">
                        <input 
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="w-full text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4 focus:outline-none focus:border-blue-300"
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <input 
                            aria-label="Enter your password"
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4 focus:outline-none focus:border-blue-300"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <i className="bi bi-eye-slash" id="togglePassword" onClick={handleClick}></i>
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`btn ${isInvalid && 'opacity-50'}`}
                        >
                            Log In
                        </button>
                    </form>
                    <div className="mt-4 flex justify-center">
                        <a className="text-sm text-center under" href="/">Forgot your password?</a>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border-gray-300 border mt-4">
                    <p className="text-sm">Don't have an account?{' '}
                        <Link to="/signup" className="under">
                            Sign up   
                        </Link>
                    </p>
                </div>
            </div>
           
        </div>
    );
}