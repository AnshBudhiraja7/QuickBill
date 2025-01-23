import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from "../../CommonComponents/Title"
import Footer from "../../CommonComponents/Footer"
import AddCustomerModalByExecutive from './AddCustomerModalByExecutive'
const ExecutiveCustomersComponent = () => {
   const [CustomerToggle,setCustomerToggle]=useState(false)
    return (
        <div>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <Title Name="Our Customers"/>
                        <div className="row pb-4 gy-3">
                            <div className="col-sm-4">
                                <button className="btn btn-primary addPayment-modal" onClick={()=>setCustomerToggle(!CustomerToggle)} ><i className="las la-plus me-1" /> Add Customer</button>
                            </div>
                            <div className="col-sm-auto ms-auto">
                                <div className="d-flex gap-3">
                                    <div className="search-box">
                                        <input type="text" className="form-control" id="searchMemberList" placeholder="Search for Result" />
                                        <i className="las la-search search-icon" />
                                    </div>
                                    <div className>
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
                                        <ul className="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#nav-border-top-all" role="tab" aria-selected="true">
                                                    All
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#nav-border-top-paid" role="tab" aria-selected="false">
                                                    Paid
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#nav-border-top-pending" role="tab" aria-selected="false">
                                                    Pending
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content text-muted pt-2">
                                            <div className="tab-pane active" id="nav-border-top-all" role="tabpanel">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="table-responsive table-card">
                                                            <table className="table table-hover table-nowrap align-middle mb-0">
                                                                <thead className="table-light">
                                                                    <tr className="text-muted text-uppercase">
                                                                        <th scope="col">Member</th>
                                                                        <th scope="col">Date</th>
                                                                        <th scope="col">Payment Details</th>
                                                                        <th scope="col" style={{ width: '16%' }}>Payment Type</th>
                                                                        <th scope="col" style={{ width: '12%' }}>Amount</th>
                                                                        <th scope="col" style={{ width: '12%' }}>Status</th>
                                                                        <th scope="col" style={{ width: '12%' }}>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Donald Risher</a>
                                                                        </td>
                                                                        <td>20 Sep, 2022</td>
                                                                        <td>Maintenance</td>
                                                                        <td>Google Pay</td>
                                                                        <td>$1200.00</td>
                                                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                      <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Brody Holman</a>
                                                                        </td>
                                                                        <td>12 Arl, 2022</td>
                                                                        <td>Flight Booking</td>
                                                                        <td>Credit Card</td>
                                                                        <td>$3600.00</td>
                                                                        <td><span className="badge bg-danger-subtle text-danger p-2">Failed</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                         <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Donald Risher</a>
                                                                        </td>
                                                                        <td>20 Sep, 2022</td>
                                                                        <td>Maintenance</td>
                                                                        <td>Google Pay</td>
                                                                        <td>$1200.00</td>
                                                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                      <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Brody Holman</a>
                                                                        </td>
                                                                        <td>12 Arl, 2022</td>
                                                                        <td>Flight Booking</td>
                                                                        <td>Credit Card</td>
                                                                        <td>$3600.00</td>
                                                                        <td><span className="badge bg-danger-subtle text-danger p-2">Failed</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                         <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Donald Risher</a>
                                                                        </td>
                                                                        <td>20 Sep, 2022</td>
                                                                        <td>Maintenance</td>
                                                                        <td>Google Pay</td>
                                                                        <td>$1200.00</td>
                                                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                      <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Brody Holman</a>
                                                                        </td>
                                                                        <td>12 Arl, 2022</td>
                                                                        <td>Flight Booking</td>
                                                                        <td>Credit Card</td>
                                                                        <td>$3600.00</td>
                                                                        <td><span className="badge bg-danger-subtle text-danger p-2">Failed</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                         <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Donald Risher</a>
                                                                        </td>
                                                                        <td>20 Sep, 2022</td>
                                                                        <td>Maintenance</td>
                                                                        <td>Google Pay</td>
                                                                        <td>$1200.00</td>
                                                                        <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                      <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="#javascript: void(0);" className="text-body align-middle fw-medium">Brody Holman</a>
                                                                        </td>
                                                                        <td>12 Arl, 2022</td>
                                                                        <td>Flight Booking</td>
                                                                        <td>Credit Card</td>
                                                                        <td>$3600.00</td>
                                                                        <td><span className="badge bg-danger-subtle text-danger p-2">Failed</span></td>
                                                                        <td>
                                                                            <div className="dropdown">
                                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                                    <li>
                                                                                         <Link to={'/ExecutiveTransactionlist'} > <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                                            View</button></Link>
                                                                                    </li>
                                                                                    <li className="dropdown-divider" />
                                                                                    <li>
                                                                                        <a className="dropdown-item remove-item-btn" href="#">
                                                                                            <i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />
                                                                                            Delete
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
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
                    </div>
                </div>
                <Footer/>
            </div>
            {CustomerToggle && <AddCustomerModalByExecutive setToggle={setCustomerToggle}/>}
        </div>
)}

export default ExecutiveCustomersComponent