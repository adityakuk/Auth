import React, { useState } from "react"
export const Contact = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let name, value;
    const getUserData = (event) => {
        name = event.traget.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }
    const postData = () => {

    }

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control"
                    method="POST"
                    id="floatingInput" placeholder="name@example.com"
                    value={user.email}
                    onChange={getUserData}
                    autoComplete = "off"
                    required />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control"
                    method="POST"
                    id="floatingPassword" placeholder="Password"
                    value={user.password}
                    onChange={getUserData} 
                    autoComplete="off"
                    required/>
                <label for="floatingPassword">Password</label>
            </div>
            <button type="button" className="btn btn-success mt-3" onClick={postData}>Submit</button>
        </div>
    )
}