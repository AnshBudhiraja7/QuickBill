import React, { useState } from 'react'
import Footer from '../../CommonComponents/Footer'
import Title from '../../CommonComponents/Title'
import CreateAccountModal from './CreateAccountModal'

const ApplicationUserDetails = () => {
    const[Toggle,setToggle]=useState(false)
  return (
    <div className='modal-open' >
    <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <Title Name={"Taxes"} />
                <div className="row pb-4 gy-3">
                    <div className="col-sm-4">
                        <button onClick={()=>setToggle(true)} className="btn btn-primary addtax-modal" ><i className="las la-plus me-1" /> Add Taxes</button>
                    </div>
                    <div className="col-sm-auto ms-auto">
                        <div className="d-flex gap-3">
                            <div className="search-box">
                                <input type="text" className="form-control" id="searchMemberList" placeholder="Search for Result" />
                                <i className="las la-search search-icon" />
                            </div>
                            <div>
                                <button type="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-soft-info btn-icon fs-14"><i className="las la-ellipsis-v fs-18" /></button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a className="dropdown-item" href="#">All</a></li>
                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-hover table-nowrap align-middle mb-0">
                                        <thead>
                                            <tr className="text-muted text-uppercase">
                                                <th scope="col">Tax Name</th>
                                                <th scope="col">Country</th>
                                                <th scope="col">Region</th>
                                                <th scope="col" style={{ width: '16%' }}>Tax Rate(%)</th>
                                                <th scope="col" style={{ width: '12%' }}>Status</th>
                                                <th>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sales Tax</td>
                                                <td>United States</td>
                                                <td>(any)</td>
                                                <td>10%</td>
                                                <td><span className="badge bg-success-subtle text-success  p-2">Enabled</span></td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="switch1" />
                                                        <label className="form-check-label" htmlFor="switch1" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Value Added Tax(VAT)</td>
                                                <td>Australia</td>
                                                <td>(any)</td>
                                                <td>20%</td>
                                                <td><span className="badge bg-success-subtle text-success  p-2">Enabled</span></td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="switch2" />
                                                        <label className="form-check-label" htmlFor="switch1" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Goods &amp; Service Tax(GST)</td>
                                                <td>New Zealand</td>
                                                <td>(any)</td>
                                                <td>15%</td>
                                                <td><span className="badge bg-success-subtle text-success  p-2">Enabled</span></td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="switch3" />
                                                        <label className="form-check-label" htmlFor="switch1" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Excise</td>
                                                <td>Italy</td>
                                                <td>(any)</td>
                                                <td>10%</td>
                                                <td><span className="badge bg-success-subtle text-success  p-2">Enabled</span></td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="switch4" />
                                                        <label className="form-check-label" htmlFor="switch1" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-2 gy-3">
                            <div className="col-md-5">
                                <p className="mb-0 text-muted">Showing <b>1</b> to <b>5</b> of <b>10</b> results</p>
                            </div>
                            <div className="col-sm-auto ms-auto">
                                <nav aria-label="...">
                                    <ul className="pagination mb-0">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item" aria-current="page">
                                            <span className="page-link">2</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
    {Toggle && <CreateAccountModal fun={setToggle}/>} 
    </div>
)}

export default ApplicationUserDetails
