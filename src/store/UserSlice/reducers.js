
const getDataUser = (
    state,
  ) => ({ ...state});

  const loginUser = ( state , action) =>{
    const check =  state.some ( e => e.userName === action.payload.userName && e.password === action.payload.password )
    if(check) {
        console.log("dang nhap thanh cong");
        
    } else {
        console.log("that bai");
    }
}


  
  
  export default {
    getDataUser,
    loginUser
  };