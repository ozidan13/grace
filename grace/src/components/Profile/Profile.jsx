import React, { useEffect } from 'react'
import'./profile.css'
import { useNavigate } from 'react-router-dom'
function Profile({userData}) {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!userData.user.answerQuestuions && !localStorage.getItem('answerQuestuions'))
        {
            navigate('/questions')
        }
    },[userData])
    return (
        <div className="container mt-5 ">
            <div className="profile border border-3">
                <h1 className="profile__name">{userData.user.username}</h1>
                <p className="profile__email">Disease: {localStorage.getItem('type')}</p>
                <p className="profile__age">Age: {userData.user.age}</p>
                <p className="profile__email">Email: {userData.user.email}</p>
            </div>
        </div>
    )
}

export default Profile