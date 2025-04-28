import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addRequest} from "../Utils/requestsSlice"
import UserCard from "./UserCard"

const Requests = () => {
const dispatch = useDispatch();
const userRequests = useSelector(store => store.requests)
const [isRequest, setIsRequest] = useState(false);

    useEffect(()=> {
        getRequests()
    },[])

    const getRequests = async() => {
        try{
            const res = await axios.get("http://localhost:7777/user/requests/received",
                {withCredentials: true},
            )
            // console.log(res.data.data)
            dispatch(addRequest(res.data.data))
            setIsRequest(true)
        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <div>
            {
                userRequests?.map((request) => <UserCard key={request._id} isRequest={isRequest} setIsRequest={setIsRequest} user={request.fromUserId} id={request._id} />)
            }
        </div>
    )
}

export default Requests;