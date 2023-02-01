import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <>
    <div>Home</div>
    <Link href='/users'>
      Users
    </Link>
    <Link href='/posts'>
      Posts
    </Link>
    </>
  )
}

export default Home