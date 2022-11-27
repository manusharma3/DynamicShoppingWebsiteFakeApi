import React from 'react'
import Postitem from './Postitem'
const Post = ({ posts }) => {
    
    return (
        <>
            <div className='post-container'>
                <div className='text'> Detailed description of posts</div>
                {posts.map((post) => <Postitem post={post} key={post.id} />)}
            </div>
        </>
    )
}

export default Post