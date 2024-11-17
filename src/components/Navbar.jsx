import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
const Navbar = () => {

  const { user, SignOut } = useContext(AuthContext)
  const handleSignOut = () => {
    SignOut()
      .then(console.log("Sign out successfully"))
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.displayName}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {
            user && user.photoURL ? <img src={user.photoURL} className="h-12 w-12 rounded-full" alt="user" /> :
              <img src={userIcon} alt="user" />
          }
        </div>
        {
          !user ? <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link> :
            <Link onClick={handleSignOut} className="btn bg-red-600 text-white rounded-none">Logout</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
