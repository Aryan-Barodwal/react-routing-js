import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
  return (
    <div className='user'>There is a user and its name is {params.username}!!</div>
  )
}

export default User;