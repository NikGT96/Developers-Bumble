import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data[0]);
      dispatch(addUser(res.data[0]));
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="card bg-blue-300 w-96 text-black">
        <div className="card-body">
          <h2 className="card-title flex justify-center ">Bumble</h2>
          <div className="flex flex-col gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-1 rounded-md p-2"
              type="text"
              placeholder="Type Email Id"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-1 rounded-md p-2"
              type="text"
              placeholder="Type Password"
            />
          </div>
          <div className="card-actions justify-end">
            <button onClick={getUser} className="btn btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
