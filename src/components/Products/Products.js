import React from 'react';
import useFireBase from '../../useFirebase';

const Products = () => {
    const {user } = useFireBase();
    return (
        <div>
            <h2>Knock Knock ! who is there</h2>
        <h5>{user ? user.displayName : 'voooooot'}</h5>
        </div>
    );
};

export default Products;