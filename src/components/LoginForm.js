import React, { useState } from 'react'

function LoginForm({logIn, error}) {
    const [data, setData] = useState({username: "", password: ""});

    const submitHandler = (e) => {
        e.preventDefault();

        logIn(data);
    };

    return (
        <div className="form-div">
            <h1>Log in</h1>
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="username">Username: </label><br/>
                <input type="email" id="username" name="username" placeholder="Enter your email" onChange={(e) => setData({...data, username: e.target.value})} value={data.username}/>
                </div>
                <div>
                <label htmlFor="password">Password: </label><br/>
                <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setData({...data, password: e.target.value})} value={data.password}/>
                </div>
                <button className='btn' type="submit">Login</button>
            </form> 
            { (error !== "") ? (<div>{error}</div>) : ""}
    </div>
    );
}

export default LoginForm;
