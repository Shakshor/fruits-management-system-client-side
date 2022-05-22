import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);


    useEffect(() => {
        const email = user?.email;
        fetch(`https://fruits-management-server.herokuapp.com/myItem?${email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user]);
    console.log(myItems);



    return (
        <div>
            <h2>MY ITEMS: {myItems.length}</h2>
            <div className='items-area'>
                {
                    myItems.map(item => <MyItem key={item._id} item={item}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;