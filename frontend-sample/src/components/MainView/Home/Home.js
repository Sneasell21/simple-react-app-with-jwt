import React from 'react';
import { useAuthUser, useSignOut } from 'react-auth-kit'
const Home = () => {
  const signOut = useSignOut()
  const authUser = useAuthUser()
  
  return (
      <div>
          <p>{`Hello ${authUser().name}, your U-ID is: ${authUser().uid}`}</p>
          <button onClick={() => signOut()}>Sign Out!</button>
      </div>
  )
}


export default Home;