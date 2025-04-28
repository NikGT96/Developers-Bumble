import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeRequest} from "../Utils/requestsSlice"

const UserCard = ({ user, isRequest, setIsRequest, id }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();


  const reviewRequest = async (status) => {
    try {
      const res = await axios.post(
        "http://localhost:7777/request/review/"+ status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!user) return;

  return (
    <div className="">
      <div className="flex items-center justify-center m-5">
        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <img src={photoUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {firstName + " " + lastName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{about}</p>
            <div className="card-actions justify-center">
              {isRequest ? (
                <div
                  onClick={() => reviewRequest("rejected")}
                  className="cursor-pointer badge badge-outline p-6 bg-red-500"
                >
                  Decline
                </div>
              ) : (
                <div className="badge badge-outline p-6 bg-red-500">
                  Not Interested
                </div>
              )}
              {isRequest ? (
                <div onClick={() => reviewRequest("accepted")} className="badge badge-outline p-6 bg-green-400">
                  Accept
                </div>
              ) : (
                <div className="badge badge-outline p-6 bg-green-400">
                  Interested
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
