import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactDOM } from 'react';

const Particular = () => {
        
    const params= useParams();

    const [post, setState] = useState([])

    useEffect(() => {

         fetch(`https://fakestoreapi.com/products/${params.postid}`)
            .then((response) => response.json())
            .then((data) => setState(data));
    }, [params]);


  return (
    <div className="particular">
    <div className='post-card'>
    <div className='post-card-n'>
        <div className="left">
        <h1>{post.id}</h1>
        <img className='post-img' src={post.image} alt="card-image" />
        <div> Rating: {post.rating.rate}</div>
        <div>Price: {post.price}</div>
        </div>
        <div className="right">
        <h4>{post.title}</h4>
        <div>{post.description}</div>
        </div>
     </div>
     
    </div>
    <div className="card-n-n">`this takes some load btw I am {post.id}`</div>
    </div>
   
      
      
      
        )
}

export default Particular


