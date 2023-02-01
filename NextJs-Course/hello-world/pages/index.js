import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function index() {
   const router = useRouter()
    const handleClick = () =>{
     router.push('/product')
    }
  return (
    <div>
    <h1>Home Page</h1>
    <Link href='/blog'>
     <h2>Blog</h2>
    </Link>
    <Link href='/product'>Products</Link>

    <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default index