import React, { useState } from 'react'
import Logo from "../../img/logo.png"
import "./Auth.css"
import { login, signup } from '../../Action/AuthAction.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading, error } = useSelector((state) => state.authReducer)
    const [isSignup, setIsSignup] = useState(false)
    console.log(loading);
    const [data, setData] = useState({
        username: "",
        password: "",
        confirmpassword: "",
        email: "",
        firstname: "",
        lastname: ""
    })
    const [confirmPass, setConfirmpass] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            if(data.password === data.confirmpassword) {
                
                dispatch(signup(data))
                 navigate('../home')
            }else{

                 setConfirmpass(false)
            }


        } else {
            console.log("hi");
            dispatch(login(data))
            if (loading && error) {
                console.log("check password");
            }

        }
    }
    const resetForm = () => {
        setConfirmpass(true)
        setData({
            username: "",
            password: "",
            confirmpassword: "",
            email: "",
            firstname: "",
            lastname: ""
        })
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="WebName">
                    <h1>Nihal Media</h1>
                    <h6>Explore The  Nihal Media</h6>
                </div>
            </div>
            {/* <Signup/> */}
            {/* <Login/> */}
            {/* Right Side */}
            <div className="a-right">
                <form action="" className='InfoForm authForm' onSubmit={handleSubmit}>

                    <h3>{isSignup ? "Sign Up" : "Login"}</h3>
                    {isSignup &&
                        <div>


                            <input type="text"
                                placeholder='First Name'
                                className='InfoInput'
                                name='firstname'
                                onChange={(handleChange)}
                                value={data.firstname}
                            />
                            <input type="text"
                                placeholder='Last Name'
                                className='InfoInput'
                                name='lastname'
                                onChange={(handleChange)}
                                value={data.lastname}

                            />
                        </div>
                    }
                    <div>
                        <input type="text"
                            placeholder='User Name'
                            className='InfoInput'
                            name='username'
                            onChange={(handleChange)}
                            value={data.username}

                        />
                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            className='InfoInput'
                            name='password'
                            onChange={(handleChange)}
                            value={data.password}

                        />
                        {isSignup &&
                            <input type="password"
                                placeholder='Confirm Password'
                                className='InfoInput'
                                name='confirmpassword'
                                onChange={(handleChange)}
                                value={data.confirmpassword}

                            />
                        }


                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: 'flex-end', marginRight: "5px" }}>
                        Confirm password is not same
                    </span>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: 'flex-end', marginRight: "5px" }}>
                        Confirm password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => { setIsSignup(!isSignup); resetForm() }}>{isSignup ? "Already Have An Account? Login!" : "Don't have an account ? SignUp"}</span>
                    </div>
                    <button  className='button submit-btn' type='submit ' disabled={loading}>
                        {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Auth
