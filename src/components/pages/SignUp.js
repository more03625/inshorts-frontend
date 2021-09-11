import React, { useState } from 'react'
import { signup } from '../../auth';

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    };



    const clickSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        setValues({ ...values, error: false })
        signup({ name, email, password })
        .then(data => {
                console.log(data)
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })
    }
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please Signin
        </div>
    )

    const signupForm = () => (
        <div id="#signup-tab">
            
        <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
            <div className="mb-3">
                <label className="form-label" htmlFor="su-name">Full name</label>
                <input className="form-control" onChange={handleChange('name')}  type="text" id="su-name" placeholder="John Doe" value={name}  required />
                <div className="invalid-feedback">Please fill in your name.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="su-email">Email address</label>
                <input className="form-control"  onChange={handleChange('email')} type="email" id="su-email" placeholder="johndoe@example.com" value={email}  required />
                <div className="invalid-feedback">Please provide a valid email address.</div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="su-password">Password</label>
                <div className="password-toggle">
                    <input className="form-control" onChange={handleChange('password')}  type="password" id="su-password"  value={password} required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                        <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                    </label>
                </div>
            </div>
            {/* <div className="mb-3">
                <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                <div className="password-toggle">
                <input className="form-control" type="password" id="su-password-confirm" required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                    </label>
                    </div>
            </div> */}
            <button className="btn btn-primary btn-shadow d-block w-100" onClick={clickSubmit} type="submit">Sign up</button>
        </form>
    </div>
    )
    return (
        <>
            {showError()}
            {showSuccess()}
            {signupForm}
        </>
    )
}

export default SignUp
