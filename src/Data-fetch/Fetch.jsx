import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import CardMap from './CardMap'

const Fetch = () => {

    const [items, setState] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((data) => setState(data));
    }, [ ]);




    return (
        <div>
            <CardMap products={items} />

        </div>
    )
}
export default Fetch

export const Fetch2 = () => {

    const [items, setState] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((data) => setState(data));
    }, []);




    return (
        <div>
            <Post posts={items} />

        </div>
    )
}




