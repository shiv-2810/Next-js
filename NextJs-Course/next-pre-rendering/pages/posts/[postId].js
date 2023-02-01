import React from 'react'

 const Post = ({post}) => {
    console.log('post',post)
  return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p>
    </>
  )
}
export default Post


export const getStaticPaths = async() =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    const paths = data.map(post => {
        return{
            params:{
                postId:`${post.id}`
            },
        }
    })
    return {
        paths,
        fallback:false 
    }
}

export async function getStaticProps(context){
    const { params } = context
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
   
    return {
        props:{
            post:data
        }
    }
}