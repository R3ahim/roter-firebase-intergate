import React from 'react'
import useFireBase from '../../../useFirebase';

const Home = () => {
    const {user} =useFireBase();
    return (
        <div>
            <h2>this is home</h2>
            <p>Current user is: {user? user.displayName : 'no Body' } </p>
        </div>
    );
};

export default Home;