import React from 'react'
import "./Post.css"

const Postitem = ({post}) => {
  return (
    <div>
    
        <div>
            
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
        </div>
    </div>
  )
}

export default Postitem