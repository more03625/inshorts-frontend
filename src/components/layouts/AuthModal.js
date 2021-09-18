import React, { useState } from 'react'
import { Host, Endpoints } from '../../helpers/comman_helper';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function AuthModal() {
    const [signUpData, setSignUpData] = useState(null);
    const [signUpDataError, setSignUpDataError] = useState({});
    const [loading, setLoading] = useState({ signIn: false, signUp: false });
    const [signInData, setSignInData] = useState(null);
    const [signInDataError, setSignInDataError] = useState({});

    const handleSignupChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
    const isValidSignup = () => {
        var emailValidator = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(signUpData && signUpData.email);

        if (signUpData === null || signUpData.name === '' || signUpData === undefined) {
            setSignUpDataError({ name: 'Please enter your name!' })
            return false;
        } else if (signUpData.email === '' || signUpData.email === undefined || !emailValidator) {
            setSignUpDataError({ email: 'Please enter a valid email!' })
            return false;
        }
        else if (signUpData.user_password === '' || signUpData.user_password === undefined) {
            setSignUpDataError({ password: 'Password must be greater than 8 characters!' })
            return false;
        }
        else if (signUpData.confirm_password === '' || signUpData.confirm_password === undefined) {
            setSignUpDataError({ confirm_password: 'Please confirm your password!' })
            return false;
        }
        else if (signUpData.user_password !== signUpData.confirm_password) {
            setSignUpDataError({ confirm_password: 'Passwords are not matching!' })
            return false;
        }
        else {
            return true;
        }
    }
    const handleSignUp = async (e) => {
        setLoading({ signUp: true });
        e.preventDefault();
        if (isValidSignup()) {
            setSignUpDataError('');
            const url = Host + Endpoints.signup;
            try {
                const result = await axios.post(url, signUpData);
                if (result.data.error === true) {
                    toast.error(result.data.title)
                } else {
                    document.getElementsByClassName('btn-close')[0].click();
                    toast.success(result.data.title)
                }
            } catch (e) {
                const { response } = e;
                // console.log(response.data);
                toast.error('Something went wrong!');
            }
            setLoading({ signUp: false });
        }
    }
    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }
    const isValidSigIn = () => {
        var emailValidator = new RegExp(
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
        ).test(signInData && signInData.email);
        if (signInData === null || signInData.email === '' || signInData.email === undefined || !emailValidator) {
            setSignInDataError({ email: 'Please enter a valid email!' })
            return false;
        } else if (signInData.user_password === '' || signInData.user_password === undefined) {
            setSignInDataError({ password: 'Please enter your password!' })
            return false;
        } else {
            return true;
        }
    }
    const handleSignIn = async (e) => {
        setLoading({ signIn: true });
        e.preventDefault();
        if (isValidSigIn()) {
            setSignInDataError('');
            const url = Host + Endpoints.login;
            try {
                const result = await axios.post(url, signInData);
                if (result.data.error === true) {
                    toast.error(result.data.title);
                } else {
                    document.getElementsByClassName('btn-close')[0].click();
                    toast.success(result.data.title);
                    const { error, title, ...updatedObject } = result.data; // Delete error, title from result.data
                    setSignInData(result.data.data);
                    localStorage.setItem('newsdb-auth', JSON.stringify(updatedObject)); // Convert Object to string
                }
            } catch (e) {
                const { response } = e;
                // console.log(response.data);
                toast.error('Something went wrong!');
            }
        }
        setLoading({ signIn: false });
    }
    return (
        <>
            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog">
                <Toaster />
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <ul className="nav nav-tabs card-header-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true">
                                        <i className="ci-unlocked me-2 mt-n1"></i>Sign in
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false">
                                        <i className="ci-user me-2 mt-n1"></i>Sign up
                                    </a>
                                </li>
                            </ul>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body tab-content py-4">
                            <form className="tab-pane fade show active" autoComplete="off" id="signin-tab" onSubmit={handleSignIn}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-email">Email address</label>
                                    <input className="form-control" type="text" id="si-email" name="email" placeholder="Enter your email" onChange={(e) => handleSignInChange(e)} />
                                    <div className="text-danger">{signInDataError.email}</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="si-password" name="user_password" placeholder="Enter your password" onChange={(e) => handleSignInChange(e)} />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" />
                                            <span className="password-toggle-indicator"></span>
                                        </label>
                                        <div className="text-danger">{signInDataError.password}</div>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex flex-wrap justify-content-between">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="si-remember" />
                                        <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                                    </div>
                                    <a className="fs-sm" href="#">Forgot password?</a>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit" disabled={loading.signIn}>Sign in
                                    {
                                        loading.signIn === true ? (
                                            <div class="mx-2 mt-1 spinner-border spinner-border-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        ) : ('')
                                    }
                                </button>
                            </form>

                            <form className="tab-pane fade" autoComplete="off" id="signup-tab" onSubmit={handleSignUp}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-name">Full name</label>
                                    <input className="form-control" type="text" id="su-name" name="name" placeholder="Enter your name" onChange={(e) => handleSignupChange(e)} />
                                    <div className="text-danger">{signUpDataError.name}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="su-email">Email address</label>
                                    <input className="form-control" type="text" id="su-email" name="email" placeholder="Enter your email" onChange={(e) => handleSignupChange(e)} />
                                    <div className="text-danger">{signUpDataError.email}</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password" name="user_password" placeholder="Enter your password" onChange={(e) => handleSignupChange(e)} />
                                        <div className="text-danger fs-sm">{signUpDataError.password}</div>

                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" />
                                            <span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password-confirm" name="confirm_password" placeholder="Confirm your password" onChange={(e) => handleSignupChange(e)} />
                                        <div className="text-danger">{signUpDataError.confirm_password}</div>

                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit" disabled={loading.signUp}>Sign up
                                    {
                                        loading.signUp === true ? (
                                            <div class="mx-2 mt-1 spinner-border spinner-border-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        ) : ('')
                                    }
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal