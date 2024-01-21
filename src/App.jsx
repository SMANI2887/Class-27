
import React, { createContext, useState } from 'react';
import Profile from './components/Profile';




// create a context object using the createContext function from the React
const ProfileContext = createContext();

/*
  Session Task - Profile Name Changes */
function App() {

  /* Implement a React component that allows users to change their profile name using the context API.
  - the component should consist of two parts: a parent component called App and
     - a child component called Profile.
      Define a state variable called profileName using the useState hook and set its value to an empty string*/
  const [profileName, setProfileName] = useState('');

  // The App component should:
  //   - Create a context object using the createContext function from React
  //   - Define a state variable called profileName using the useState hook and set its value to an empty string.
  //   - Wrap the Profile component with the context provider component, passing the profileName state and its corresponding setter function as the value prop.

  // Wrap the Profile component with the context provider component, passing the profileName state and its corresponding setter function as the value prop.

  // The Profile component should:
  //   - Use the useContext hook to access the profileName state variable and its setter function from the context.
  //   - Render an input field where users can enter their profile name, with its value set to the profileName state variable.
  //   - Add an onChange event handler to the input field that updates the profileName state variable with the entered value using the setter function.
  return (
    <div>
      <ProfileContext.Provider value={{profileName, setProfileName}}>
        <Profile />
      </ProfileContext.Provider>
    </div>
  )
}


export {
  App as default,
  ProfileContext
};
