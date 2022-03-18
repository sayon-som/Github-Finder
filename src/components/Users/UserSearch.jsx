import {useState,useContext,useReducer} from 'react'
import githubContext from '../../Context/Github/GithubContext';
import githubreducer from '../../Context/Github/GithubReducer';
//searchng logic 
const UserSearch = () => {
      const initialstate = {
        users: [],
      };
    //getting the users from the github context
    const [state,dispatch]=useReducer(githubreducer,initialstate);
  
    const { users, gettinguserres,clearUser } = useContext(githubContext);
    const [text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value);

    }
    //clearing the user
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            alert("There is no text");
        }
        else{
            //serching for the user
            gettinguserres(text);

            setText('');
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={clearUser}
            className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch