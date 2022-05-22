import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);


        // send the data to the server
        const url = `https://fruits-management-server.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('adding a new item successful.');
                }
            });


        // For my item
        fetch(`https://fruits-management-server.herokuapp.com/myItem`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Add Item..</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled />
                <input className='mb-2' placeholder='Name'  {...register("Name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description'  {...register("Description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-primary' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddItem; 