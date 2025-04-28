import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Utils/userSlice";

function App() {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProfile();
  }, []);

  

  const getUserProfile = async () => {
    if (user) return;
    try {
      const res = await axios.get(
        "http://localhost:7777/profile/view",
        { withCredentials: true }
      );
      // console.log(res);
      dispatch(addUser(res.data));
      navigate("/")
    } catch (err) {
      console.log(err);
      if(err.status === 401){
        navigate("/login")
      } else
      {
        console.log(err.message)
      }
      
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
