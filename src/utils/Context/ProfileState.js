import PorifleContext from "./ProfileContext";
import { useState } from "react";

const ProfileState = (props) => {
  const [profile, setProfile] = useState({});

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <PorifleContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {props.children}
    </PorifleContext.Provider>
  );
};
export default ProfileState;
