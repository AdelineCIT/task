import { createContext, useState } from "react";
//create a context
export const UserContext = createContext();

//create a provider component
export function UserProvider({ children }) {
  //define our state to hold the user
  const [user, setUser] = useState(null);

  //function to login

  const logIn = (username) => {
    setUser({ name: username });
  };
  //logout function
  const logOut = () => {
    setUser(null);
  };

  //return the provider component with children
  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
