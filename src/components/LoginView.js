import React from 'react';
import Auth from './Auth';

export default function LoginView(props) {

    // Check user credentials
    function login(event) {
        event.preventDefault();
        Auth.authenticate(event.target['username'].value, event.target['password'].value)
            .then(result => {
                props.loginSuccess();
                props.history.push(props.redirectPathOnSuccess);
                console.log('Logged in!');
            })
            .catch(() => {
                props.loginFail();
            })

    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                Please login to start charging
      </div>
            <form onSubmit={login}>
                <div>
                    Username <input type="text" name="username" />
                </div>
                <div>
                    Password <input type="text" name="password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}