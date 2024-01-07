import React from 'react'
import Logo from "../../img/logo.png"
import "./Auth.css"

const Auth = () => {
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
            <Login/>
        </div>
    )
}
function Login() {

    return (
        <div className="a-right">
            <form action="" className='InfoForm authForm'>

                <h3>Login Up</h3>
                <div>
                    <input type="text"
                        placeholder='Username'
                        className='InfoInput'
                        name='firstname'
                    />
                    
                </div>
                <div>
                <input type="text"
                        placeholder='Last Name'
                        className='InfoInput'
                        name='Password'
                    />
                </div>
              
           
                <div>
                    <span style={{fontSize:'12px'}}>Don't have an account ? SignUp</span>
                <button className='button submit-btn' type='submit '>Sign Up</button>
                </div>
            </form>
        </div>
    )

}
function Signup() {

    return (
        <div className="a-right">
            <form action="" className='InfoForm authForm'>

                <h3>Sign Up</h3>
                <div>
                    <input type="text"
                        placeholder='First Name'
                        className='InfoInput'
                        name='firstname'
                    />
                    <input type="text"
                        placeholder='Last Name'
                        className='InfoInput'
                        name='lastname'
                    />
                </div>
                <div>
                <input type="text"
                        placeholder='User Name'
                        className='InfoInput'
                        name='username'
                    />
                </div>
                <div>
                    <input type="text"
                        placeholder='Password'
                        className='InfoInput'
                        name='password'
                    />
                   
                    <input type="text"
                        placeholder='Confirm Password'
                        className='InfoInput'
                        name='confirmpassword'
                    />
                   
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already Have An Account? Login!</span>
                </div>
                <button className='button submit-btn' type='submit '>Sign Up</button>
            </form>
        </div>
    )

}

export default Auth
