import React from 'react'
import UserInfo from '../components/Users/UserInfo';
import UserSearch from '../components/Users/UserSearch';
const Home = () => {
  return (
    <>
    {/* Search Component of the users */}
    <UserSearch/>
     <UserInfo/>
    </>
  );
}

export default Home