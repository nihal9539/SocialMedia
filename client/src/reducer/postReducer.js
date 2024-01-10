const postReducer = (
    state={posts:[],loading:false,error:false,uploading:false}, action)=>{
        console.log(action.data);
  switch (action.type) {
    case "UPLOAD_START":
        
       return {...state,uploading:true,erroe:false}
    case "UPLOAD_SUCCESS":
        return {...state,posts:[action.data,...state.posts],uploading:false,error:false}
    case "UPLOAD_FAIL":
        return {...state,uploading:false,error:true}
    default:
        return state
  }
}


export default postReducer