import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import StaticRating from '../component/StaticRating';


export const Profile = () => {

    const { store } = useContext(Context);
    console.log(store)


    return ( 
<div className='bg-Base-100'>
    <div className="flex justify-center items-center flex-col m-4 pt-4">        
        <img className='w-206px h-216px rounded-full ring ring-Secondary ring-offset-Secondary ring-offset-2' src={store.profile.image}/>
    </div>
    <div className="flex justify-center items-center flex-col m-4 pt-4">
    <h2 className='text-3xl text-center text-Primary'>{store.profile.username}</h2>
    </div>
    <div className="flex justify-center items-center flex-col m-4 mb-12 ml-1 pt-4 gap-10">
        <StaticRating/>
    </div >
    <div className="flex justify-center gap-40 items-center m-4 mt-10 pt-4 pr-8">
        <div className='flex flex-col gap-y-2 text-center'>
    <span className='text-4xl'>35</span>
    <span className='text-xl'>Donaciones</span>
        </div>
        <div className='flex flex-col gap-y-2 text-center'>
    <span className='text-4xl'>234</span>
    <span className='text-xl'>Likes</span>  
        </div>
    </div>
</div>
    );
}