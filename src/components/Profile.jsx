import React from 'react'

function Profile(props) {
  return (
    <div className='ui list'>
        <div className="item">
            <img className='ui avatar image' src={props.profileprops.img} alt="/" />
            <div className="content">
                <a href='/' className="header">{props.profileprops.name}</a>
                <div className="description">{props.profileprops.description}</div>          
            </div>
        </div>
    </div>
  )
}

export default Profile