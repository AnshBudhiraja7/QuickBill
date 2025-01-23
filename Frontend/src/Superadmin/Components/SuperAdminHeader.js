import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SuperAdminHeader = () => {
const[Toggle,setToggle]=useState(false)
  return (
    <div className={Toggle?"menu":""}>
        <div id="layout-wrapper">
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box horizontal-logo">
                                <Link to={'/SuperAdminDashboard'} className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" height={22} />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-dark.png" height={21} />
                                    </span>
                                </Link>
                                <Link to={'/SuperAdminDashboard'} className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" height={22} />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-light.png" height={21} />
                                    </span>
                                </Link>
                            </div>
                            <button onClick={()=>setToggle(!Toggle)} type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                                <span className="hamburger-icon"><span/><span/><span/></span>
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                                <div className="dropdown header-item">
                                    <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="d-flex align-items-center">
                                            <img className="rounded-circle header-profile-user" src="assets/images/user.png" alt="Header Avatar" />
                                            <span className="text-start ms-xl-2">
                                                <span className="d-none d-xl-inline-block fw-medium user-name-text fs-16">You
                                                <i className="las la-angle-down fs-12 ms-1" /></span>
                                            </span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <Link className="dropdown-item text-danger" to={'/'}><i className="bx bx-power-off fs-15 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="app-menu navbar-menu">
                <div className="navbar-brand-box">
                    <Link to='/SuperAdminDashboard' className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" height={21} />
                        </span>
                    </Link>
                    <Link to='/SuperAdminDashboard' className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" height={21} />
                        </span>
                    </Link>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line" />
                    </button>
                </div>
                <div className="sidebar-background" />
            </div>
        </div>
    </div>
  )
}

export default SuperAdminHeader
