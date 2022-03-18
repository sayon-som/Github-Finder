import {createContext,useState,useReducer} from 'react'
//importing the github reducer
import githubreducer from './GithubReducer';
const githubContext=createContext();

const url = "https://api.github.com";
export const ContextProvider=({children})=>{
//   const [users, setUsers] = useState([]);
   
const gettinguserres = async () => {
  const res = await fetch(`https://api.github.com/users`);

  const data = await res.json();
  setUsers(data);
};
return <githubContext.Provider value={{
    users,
    gettinguserres,
    
}}>
    {children}
</githubContext.Provider>

}
export default githubContext;


