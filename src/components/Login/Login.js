import React from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import {useLocation, useNavigate} from 'react-router-dom'
const auth = getAuth(app)

const Login = () => {
     const [signInWithGoogle,user] = useSignInWithGoogle(auth)
     const location  =useLocation();
     const navigate =  useNavigate();

      const form = location?.state?.from?.pathname || '/'

     const handleGoogleSignIN = ()=>{
            signInWithGoogle()
            .then(()=>{
                navigate(form,{replace:true})
            })
     }
  
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={handleGoogleSignIN}>Google Sign In</button>
            </div>
            <form action="">
         
            <input type="email" name="" placeholder='Your email' id="" />
            <br />
            <input type="password"  placeholder='Your passoword' name="" id="" />
            <br />
            <input type="submit" value="Login" />
        </form>
        </div>
    );
};

export default Login;