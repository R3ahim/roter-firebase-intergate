import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:'20px'}}>
                <button>Google Sign In</button>
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