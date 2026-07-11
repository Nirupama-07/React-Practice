import React from 'react'

const UserCard = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.userImage} />
            <h3>{props.userName}</h3>
            <p>{props.userRole}</p>
            <h6>{props.userCity}</h6>
            <button>Connect</button>
        </div>
      
    </>
  )
}

export default UserCard
