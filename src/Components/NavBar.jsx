import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../Utils/userSlice";
import { removeFeed } from "../Utils/feedSlice";
import { useEffect } from "react";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {

  })
  

  const handleLogout = async () => {
    try{
    await axios.post("http://localhost:7777/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    dispatch(removeFeed());
    navigate("/login");
    }
    catch(err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Dev-Bumble</Link>
      </div>
      <div className="flex gap-4 mx-7">
        {!user && (
          <div className="flex gap-2">
            <Link
            className="cursor-pointer px-2 rounded-md border-1 items-center flex"
            to="/login"
          >
            Log In
          </Link>
          <Link state={{isSignUp:true}} className="cursor-pointer px-2 rounded-md border-1 items-center flex" to="/login">SignUp</Link>
          </div> 
        )}
        {user && (
          <div className="flex gap-7">
            <p className="items-center flex">{user.firstName}</p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-25 p-2 shadow"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
