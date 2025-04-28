import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {addRequest} from "../Utils/requestsSlice"
import UserCard from "./UserCard"

const Requests = () => {
const dispatch = useDispatch();
const userRequests = useSelector(store => store.requests)

    useEffect(()=> {
        getRequests()
    },[])

    const getRequests = async() => {
        try{
            const res = await axios.get("http://localhost:7777/user/requests/received",
                {withCredentials: true},
            )
            console.log(res.data.data)
            dispatch(addRequest(res.data.data))
        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <div>
            {
                userRequests?.map((request) => <UserCard key={request._id} user={request.fromUserId} />)
            }
        </div>
    )
}

export default Requests;