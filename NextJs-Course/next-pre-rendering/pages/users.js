import React from 'react'
import User from '../components/user'

function UserList({data}) {
  return (
    <>
    <User data={data} />
    </>
  )
}

export default UserList


export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {props:{data}}
}