function User({data}) {
    return (
      <>
      <div>User</div>
      {data.map((item,index)=> <div key={index}>{item.name}      {item.email}</div>)}
      </>
    )
  }
  
  export default User