import React  from 'react';


const UserContext = React.createContext();

// function UserProvider({ children }){
//     return <UserContext.Provider value={null}> </UserContext.Provider>

    
// }
function UserProvider({ children }) {
    const currentUser = {
      name: "Duane",
      interests: ["Coding", "Biking", "Words ending in 'ing'"],
    };
    return (
      <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    );
  }










export {UserContext, UserProvider};