import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/UserSlice";
import './LoginForm.scss'

const  LoginWrapper  = () =>  {
  const [userName , setUserName] = useState('');
  const [password , setPassWord] = useState('');



  const handleChange = (e, type) => {
    if(type === 'user') {
      setUserName(e.target.value)
    }else if(type === 'pass')
      setPassWord(e.target.value)
    else{
      return null
    }
  }
  
  const dispatch = useDispatch()
  const handleLogin = () => {
      dispatch(loginUser({
        userName: userName,
        password: password
      }))

  }

  return ( 
    <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" onChange={(e) => handleChange(e , 'user')} />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" onChange={(e) => handleChange(e , 'pass')} />
              <label>Password</label>
            </div>
           <button type="button" onClick={handleLogin}> Đăng Nhập </button>
          </form>
        </div>
  );
}

export default LoginWrapper ;