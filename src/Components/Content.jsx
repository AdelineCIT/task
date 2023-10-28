import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
function Content() {
  //we need the user from context
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        {user ? (
          <div>
            <h4>Welcome {user.name}</h4>
            <p>Welcome to your Task List</p>
          </div>
        ) : (
          <div>
            <h4>Please log in to access Task List</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
