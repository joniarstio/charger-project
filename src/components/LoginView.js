import React from 'react';
import Auth from './Auth';
import styles from './LoginView.module.css';

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
        <div className={styles.container}>
            <h2>Login</h2>
            Please login to start charging
            </div>
            <form onSubmit={login}>
                <div className={styles.centered}>
                    <input className={styles.input} type="text" name="username" placeholder="Username"/>
                </div>
                <div className={styles.centered}>
                    <input className={styles.input} type="text" name="password" placeholder="Password"/>
                </div>
                <div className={styles.centered}>
                    <button className={styles.button} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}