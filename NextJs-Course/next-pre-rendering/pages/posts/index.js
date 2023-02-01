import React from 'react'
import Link from 'next/link'

const PostList = ({posts}) => {
  return (
    <>
    <h1>List of Posts</h1>
    {posts.map((post,index)=>{
        return (
            <div key={index}>
                <Link href={`posts/${post.id}`} passHref>
               {post.id} {post.title}
               </Link>
               <hr />
            </div>
        )
    })}
    </>
  )
}

export default PostList

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props:{
            posts:data
        }
    }
}