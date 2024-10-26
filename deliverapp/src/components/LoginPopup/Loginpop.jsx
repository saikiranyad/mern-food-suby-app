import React, { useContext, useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
const Loginpop = ({ setShowLogin }) => {
    const { url,token,setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onlogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }
  
    return (
        <div className='login-popup'>
            <form onSubmit={onlogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" name='name' onChange={onchangeHandler} value={data.name} placeholder='Your Name' required />}

                    <input type="email" name='email' onChange={onchangeHandler} value={data.email} placeholder='Your email' required />
                    <input name='password' onChange={onchangeHandler} value={data.password} type="password" placeholder='Your password' required />
                </div>
                <button type='submit'>{currState === "Sign up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By continuing,Iagree to the terms</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p> :
                    <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }


            </form>

        </div>
    )
}

export default Loginpop
