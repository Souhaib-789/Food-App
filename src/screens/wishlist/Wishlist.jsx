

import React, { useEffect, useState } from 'react'
import { doc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/Firebase';
import FoodCard from '../../components/card/FoodCard';
import { Box, Typography } from '@mui/material';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Wishlist = () => {

    const [wishlistData, setWishlistData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const cardUid = localStorage.getItem('uid')
            const querySnapshot = await getDocs(collection(db, 'wishlist'));
            querySnapshot.forEach((doc) => {
                if (doc.data().uid === cardUid)
                    console.log(doc.data());
                setWishlistData(arr => [...arr, doc.data()])
            })
        }
        fetchData()
    }, [])

    return (
        <div>

            <h1 style={{ textAlign: 'center' }}>Wishlist</h1>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
                {wishlistData?.map((data, i) => {
                    return <FoodCard key={i} title={data.title} image={data.image} />
                })}
            </Box >
        </div>
    )
}

export default Wishlist