import React, { } from 'react'
import { useContext} from 'react'
import UserItem from './UserItem';
import githubContext from '../../Context/Github/GithubContext';
const UserInfo = () => {
  const {users,gettinguserres}=useContext(githubContext);
    //storing the users and testign to see if it works
//     useEffect(()=>{
// // gettinguserres();
//     },[])

    
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:cols-3 md:grid-cols-2'>{users.map((user)=>(
        <UserItem key={user.id} user={user}/>
    ))}</div>
  )
}

export default UserInfo