import React, { useState } from 'react'

const SignInComponent = () => {
    const[passwordicon,setpasswordicon]=useState(false)
    return(
    <div className="account-pages">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4 justify-content-center">
                        <div  className="customcss">
                            <div className="d-flex flex-column h-100 py-0 py-xl-4">
                                <div className="text-center mb-5">
                                    <a><span className="logo-lg"><img src="assets/images/logo-dark.png" height={21} /></span></a>
                                </div>
                                <div className="card my-auto ">
                                    <div className="col-lg-12">
                                            <div className="p-lg-5 p-4">
                                                <div className="text-center">
                                                    <h5 className="mb-0">Welcome Back!</h5>
                                                    <p className="text-muted mt-2">Sign in to continue to QuickBill.</p>
                                                </div>
                                                <div className="mt-4">
                                                    <form action="#" className="auth-input">
                                                        <div className="mb-3">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label htmlFor="userpassword" className="form-label">Password</label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <input type={passwordicon?"text":"password"} className="form-control pe-5 password-input" placeholder="Enter password"  />
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" ><i className={`las ${passwordicon?"la-low-vision":"la-eye"} align-middle fs-18`} onClick={()=>setpasswordicon(!passwordicon)} /></button>
                                                            </div>
                                                        </div>
                                                        <div className="form-check form-check-primary fs-16 py-2">
                                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                                            <label className="form-check-label fs-14" htmlFor="remember-check">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                        <div className="mt-2">
                                                            <button className="btn btn-primary w-100" type="submit">Log In</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <p className="mb-0 text-muted">QuickBill. Crafted with <i className="mdi mdi-heart text-danger" /> by Ansh Budhiraja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
export default SignInComponent