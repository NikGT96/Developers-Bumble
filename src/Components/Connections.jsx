import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../Utils/connectionsSlice";
import UserCard from "./UserCard"

const Connections = () => {
  const userConnections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  useEffect(() => {
    getConnections();
  }, []);

  const getConnections = async () => {
    try {
      const res = await axios.get("http://localhost:7777/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } 
    catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {userConnections?.map((connection) => (
        <UserCard user={connection} />
      ))}
    </div>
  );
};

export default Connections;
