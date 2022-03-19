import {createContext,useState,useReducer} from 'react'
//importing the github reducer
import githubreducer from './GithubReducer';
const githubContext=createContext();


export const ContextProvider=({children})=>{
//   const [users, setUsers] = useState([]);

//creating the initial state for the reducer
//
const initialstate={
    users:[],
    user:{},
    repos:[]
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

//getting a single user
const gettingsingleuserres = async (login) => {

  const res = await fetch(`https://api.github.com/users/${login}`);
if(res.status===404){
    //redirecting the user if the user is not found 
    window.location="/notfound"
}else{
  const data = await res.json();
  //   setUsers(data);
  
  dispatch({
    type: "GET_USER",
    payload: data,
  });
}

};

//getting the user repos

const gettinguserrepos = async (login) => {
 
  const res = await fetch(`https://api.github.com/users?${login}/repos`);

  const data = await res.json();
  //   setUsers(data);
  dispatch({
    type: "GET_USERS_REPOS",
    payload: data,
  });
};

 const clearUser = () => {
   dispatch({ type: "CLEAR_USERS" });
 };
return <githubContext.Provider value={{
    users:state.users,
    gettinguserres, 
    clearUser,
    user:state.user,
    gettingsingleuserres,
    repos:state.repos,
    gettinguserrepos

    
}}>
    {children}
</githubContext.Provider>

}
export default githubContext;


