import React from 'react';
import useFireBase from '../../useFirebase';

const Login = () => {
    const {singWithGoogle} = useFireBase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={singWithGoogle}>Google Sign In</button>
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