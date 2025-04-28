import React, { useState } from "react";
import UserCard from "./userCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addUser} from "../Utils/userSlice"

const EditProfile = ({user}) => {
    const dispatch = useDispatch();

    // const {firstName, lastName, PhotoUrl, age, gender, about} = user;
    // console.log(user)
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
    const [age, setAge] = useState(user?.age);
    const [gender, setGender] = useState(user?.gender);
    const [about, setAbout] = useState(user?.about);
    const [isUpdated, setIsUpdated] = useState(false);
    const [updateMessage, setUpdateMessage] = useState("")

    const profileUpdated = () => {
        setIsUpdated(false)
    }

    const saveUser = async () => {
        try{
            const res = await axios.patch("http://localhost:7777/profile/edit",
                {firstName, lastName, photoUrl, age, gender, about},
                {withCredentials: true}
            )
            console.log(res)
            dispatch(addUser(res.data.data))
            setUpdateMessage(res.data.message)
            setIsUpdated(true)
            setTimeout(() => {
                profileUpdated();
            }, 5000);
        }
        catch(err) {
            console.log(err)
        }
    }

 
  return (
    <div>
    <div className="flex gap-5 justify-center w-full">
        <div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Edit Profile</legend>

        <label className="label">First Name</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="email" className="input" placeholder="Email" />

        <label className="label">Last Name</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="input" placeholder="text" />

        <label className="label">Photo URL</label>
        <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} type="text" className="input" placeholder="text" />

        <label className="label">Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="input" placeholder="text" />

        <label className="label">Gender</label>
        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" className="input" placeholder="text" />

        <label className="label">About</label>
        <input value={about} onChange={(e) => setAbout(e.target.value)} type="text" className="input" placeholder="text" />

        <button onClick={saveUser} className="btn btn-neutral mt-4">Save Profile</button>
      </fieldset>
        </div>

        <div>
            <UserCard user={{firstName, lastName, photoUrl, age, gender, about}} />
        </div>
    </div >
    <div className=" flex justify-center -mt-75 z-20 relative">
        {isUpdated && (<div className="p-6 bg-amber-400">{updateMessage}</div>)}
    </div>
    </div>
  );
};

export default EditProfile;
