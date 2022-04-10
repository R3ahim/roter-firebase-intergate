import React from 'react'
import useFireBase from '../../../useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../../firebase.init';
const auth = getAuth(app)
const Home = () => {
const [user] = useAuthState(auth)
    return (
        <div>
            <h2>this is home</h2>
            <p>Current user is: {user? user.displayName : 'no Body' } </p>
        </div>
    );
};

export default Home;