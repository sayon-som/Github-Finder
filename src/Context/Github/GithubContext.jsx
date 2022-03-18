import {createContext,useState,useReducer} from 'react'
//importing the github reducer
import githubreducer from './GithubReducer';
const githubContext=createContext();


export const ContextProvider=({children})=>{
//   const [users, setUsers] = useState([]);

//creating the initial state for the reducer
//
const initialstate={
    users:[]
}
const [state,dispatch]=useReducer(githubreducer,initialstate);
//

   
const gettinguserres = async (text) => {
    const params= new URLSearchParams({
        q:text
    })
  const res = await fetch(`https://api.github.com/search/users?${params}`);

  const {items} = await res.json();
//   setUsers(data);
dispatch({
    type:'GET_USERS',
    payload:items,
})
};
 const clearUser = () => {
   dispatch({ type: "CLEAR_USERS" });
 };
return <githubContext.Provider value={{
    users:state.users,
    gettinguserres, 
    clearUser
    
}}>
    {children}
</githubContext.Provider>

}
export default githubContext;


