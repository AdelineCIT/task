import { UserContext } from "../Providers/UserProvider";
import { useContext, useState } from "react";
function Header() {
  const { user, logIn, logOut } = useContext(UserContext);
  //state to track the username
  const [username, setUsername] = useState("");
  return (
    <>
      <div>
        {user ? (
          <div>
            <p>{user.name} is logged in </p>
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <div>
            <h4>Please Log In</h4>
            <input
              type="text"
              placeholder="Enter UserName"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => logIn(username)}>Log In</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
