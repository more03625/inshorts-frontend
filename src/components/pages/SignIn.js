import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../../auth'

const Signin = () => {

    const [values, setValues] = useState({
        email: 'admin@gmail.com',
        password: 'Admin@123',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, error, loading, redirectToReferrer } = values;
    const {user} = isAuthenticated();
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    };



    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading:true })
        signin({ email, password })
        
        .then(data => {
                console.log(data)
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(
                        data,
                        () => {
                            setValues({
                                ...values,
                                redirectToReferrer:true
                            })
                        })
                }
            })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        )
    )

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user&&user.role === 1){
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/" />
            }
        }
        if(isAuthenticated()) {
            return <Redirect to="/"/>
        }
    }

    const signInForm = () => (
        <div id="signin-tab">
        <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
            <div className="mb-3">
                <label className="form-label" htmlFor="si-email">Email address</label>
                <input className="form-control" onChange={handleChange('email')} type="email" value={email} id="si-email" placeholder="johndoe@example.com" required />
                <div className="invalid-feedback">Please provide a valid email address.</div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="si-password">Password</label>
                <div className="password-toggle">
                    <input className="form-control" type="password" id="si-password"  onChange={handleChange('password')}  value={password} required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                        <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                    </label>
                </div>
            </div>
            <div className="mb-3 d-flex flex-wrap justify-content-between">
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="si-remember" />
                    <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                </div><a className="fs-sm" href="#">Forgot password?</a>
            </div>
            <button className="btn btn-primary btn-shadow d-block w-100" onClick={clickSubmit} type="submit">Sign in</button>
        </form>
        </div>
    )

    return (
        <>
                {showError()}
                {showLoading()}
                {signInForm()}
                {redirectUser()}
        </>
    )
}

export default Signin
