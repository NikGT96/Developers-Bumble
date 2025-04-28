import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const isSignUp = location.state?.isSignUp;
  console.log(isSignUp);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailId, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  },[]);

  const registerUser = async() => {
    try {
      const res = await axios.post(
        "http://localhost:7777/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      console.log(res.data.data);
      dispatch(addUser(res.data.data))
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        { emailId, password },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(addUser(res.data));
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
            {isSignUp && (
              <div className="w-full flex flex-col gap-4">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="border-1 rounded-md p-2"
                  placeholder="First Name"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="border-1 rounded-md p-2"
                  placeholder="Last Name"
                />
              </div>
            )}

            <input
              value={emailId}
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
            {isSignUp ? (
              <button className="btn btn-primary" onClick={registerUser}>
                Register
              </button>
            ) : (
              <button onClick={getUser} className="btn btn-primary">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
