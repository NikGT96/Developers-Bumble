import React from 'react'
import UserCard from './userCard'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'

const Profile = () => {
  const user = useSelector(store => store.user)
  // console.log(user)
  return (
    <div className=''>
      <EditProfile user={user}/>
    </div>
  )
}

export default Profile;
