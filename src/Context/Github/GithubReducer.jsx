const githubreducer=(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                    users:action.payload,//data being sent
            }
        case 'CLEAR_USERS':
            return { 
...state,
users:[]
            }

        default:
            return state
    }

}
export default githubreducer