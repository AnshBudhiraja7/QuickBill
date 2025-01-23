import React from 'react'
import Footer from "../../CommonComponents/Footer"
import Title from "../../CommonComponents/Title"
const DashboardComponent = () => {
  return(
  <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <Title Name="Dashboard"/>
      <div className="row">
        <div className="col-xl-8">
          <div className="card dash-mini">
            <div className="card-header border-0 align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">This Week's Overview</h4>
              <div className="flex-shrink-0">
                <div className="dropdown card-header-dropdown">
                  <a className="text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="fw-semibold text-uppercase fs-14">Sort by: </span><span className="text-muted">Current Week<i className="las la-angle-down fs-12 ms-2" /></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">Last Week</a>
                    <a className="dropdown-item" href="#">Last Month</a>
                    <a className="dropdown-item" href="#">Current Year</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-1">
              <div className="row">
                <div className="col-lg-4 mini-widget pb-3 pb-lg-0">
                  <div className="d-flex align-items-end">
                    <div className="flex-grow-1">
                      <h2 className="mb-0 fs-24"><span className="counter-value" data-target={197}>54</span></h2>
                      <h5 className="text-muted fs-16 mt-2 mb-0">Clients Added</h5>
                      <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-info me-1">1.15%</span>  since last week</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mini-widget py-3 py-lg-0">
                  <div className="d-flex align-items-end">
                    <div className="flex-grow-1">
                      <h2 className="mb-0 fs-24"><span className="counter-value" data-target={634}>124</span></h2>
                      <h5 className="text-muted fs-16 mt-2 mb-0">Contracts Signed</h5>
                      <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-danger me-1">1.15%</span>  since last week</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mini-widget pt-3 pt-lg-0">
                  <div className="d-flex align-items-end">
                    <div className="flex-grow-1">
                      <h2 className="mb-0 fs-24"><span className="counter-value" data-target={512}>214</span></h2>
                      <h5 className="text-muted fs-16 mt-2 mb-0">Invoice Sent</h5>
                      <p className="text-muted mt-3 pt-1 mb-0 text-truncate"> <span className="badge bg-info me-1">3.14%</span>  since last week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <div className="card-header border-0 align-items-center d-flex pb-2">
              <h4 className="card-title mb-0 flex-grow-1">Payment Overview</h4>
              <div>
                <div className="dropdown">
                  <a className="text-reset" href="#" id="dropdownMenuYear" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="fw-semibold text-uppercase fs-14">Sort By: </span> <span className="text-muted">Monthly<i className="las la-angle-down fs-12 ms-2" /></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuYear">
                    <a className="dropdown-item" href="#">Monthly</a>
                    <a className="dropdown-item" href="#">Yearly</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div style={{height:"30px"}} className="apex-charts" />  
              <div className="row mt-3 text-center">
                <div className="col-6 border-end">
                  <div className="my-1">
                    <p className="text-muted text-truncate mb-2">Received Amount</p>
                    <h4 className="mt-2 mb-0 fs-20">$45,070.00</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="my-1">
                    <p className="text-muted text-truncate mb-2">Due Amount</p>
                    <h4 className="mt-2 mb-0 fs-20">$32,400.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-header border-0 align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Invoice List</h4>
              <div className="dropdown">
                <a className="text-reset" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="fw-semibold text-uppercase fs-14">Sort By: </span>  <span className="text-muted">Weekly<i className="las la-angle-down fs-12 ms-2" /></span>
                </a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <a className="dropdown-item" href="#">Monthly</a>
                  <a className="dropdown-item" href="#">Yearly</a>
                </div>
              </div>
            </div>
            <div className="card-body pt-2">
              <div className="table-responsive table-card">
                <table className="table table-striped table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="text-muted text-uppercase">
                      <th style={{width: 50}}>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option" />
                        </div>
                      </th>
                      <th scope="col">Invoice ID</th>
                      <th scope="col">Client</th>
                      <th scope="col">Date</th>
                      <th scope="col" style={{width: '16%'}}>Status</th>
                      <th scope="col" style={{width: '12%'}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2152</p></td>
                      <td><img src="assets/images/users/avatar-1.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href='#' className="text-body align-middle">Donald Risher</a>
                      </td>
                      <td>20 Sep, 2022</td>
                      <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check2" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2153</p></td>
                      <td><img src="assets/images/users/avatar-2.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href="#javascript: void(0);" className="text-body align-middle">Brody Holman</a>
                      </td>
                      <td>12 Arl, 2022</td>
                      <td><span className="badge bg-warning-subtle text-warning p-2">Unpaid</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check3" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2154</p></td>
                      <td><img src="assets/images/users/avatar-3.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href="#javascript: void(0);" className="text-body align-middle">Jolie Hood</a>
                      </td>
                      <td>28 Mar, 2022</td>
                      <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check5" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2156</p></td>
                      <td><img src="assets/images/users/avatar-5.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href="#javascript: void(0);" className="text-body align-middle">Howard Lyons</a>
                      </td>
                      <td>18 Sep, 2022</td>
                      <td><span className="badge bg-info-subtle text-info p-2">Refund</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check6" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2157</p></td>
                      <td><img src="assets/images/users/avatar-6.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href="#javascript: void(0);" className="text-body align-middle">Howard Oneal</a>
                      </td>
                      <td>12 Feb, 2022</td>
                      <td><span className="badge bg-success-subtle text-success p-2">Paid</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check7" defaultValue="option" />
                        </div>
                      </td>
                      <td><p className="mb-0">Lec-2158</p></td>
                      <td><img src="assets/images/users/avatar-7.jpg" alt className="avatar-xs rounded-circle me-2" />
                        <a href="#javascript: void(0);" className="text-body align-middle">Jena Hall</a>
                      </td>
                      <td>30 Nov, 2022</td>
                      <td><span className="badge bg-danger-subtle text-danger p-2">Cancel</span></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="las la-ellipsis-h align-middle fs-18" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                View</button>
                            </li>
                            <li>
                              <button className="dropdown-item" href="javascript:void(0);"><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                Edit</button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);"><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                Download</a>
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
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-start mb-1">
                <div className="flex-grow-1">
                  <h5 className="card-title">Recent Transaction</h5>
                </div>
                <div className="flex-shrink-0">
                  <div className="dropdown">
                    <a className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="las la-ellipsis-h fs-20" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Yearly</a>
                      <a className="dropdown-item" href="#">Monthly</a>
                      <a className="dropdown-item" href="#">Weekly</a>
                      <a className="dropdown-item" href="#">Today</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-n3 px-3" data-simplebar style={{maxHeight: 418}}>
                <p className="text-muted mb-0">Recent</p>
                <div className="border-bottom sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="lab la-paypal fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Salary Payment</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">20 Sep, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-danger-subtle text-danger">- $62.45</span>
                    </div>
                  </div>
                </div>
                <div className="border-bottom sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="lab la-buffer fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Online Product</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">28 Mar, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-success-subtle text-success">+ $45.84</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">Yesterday</p>
                <div className="border-bottom sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="las la-file-image fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Maintenance</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">18 Sep, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-success-subtle text-success">+ $25.52</span>
                    </div>
                  </div>
                </div>
                <div className="border-bottom sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="las la-bus fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Bus Booking</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">30 Nov, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-danger-subtle text-danger">- $84.45</span>
                    </div>
                  </div>
                </div>
                <div className="border-bottom sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="lab la-telegram-plane fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Flight Booking</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">12 Feb, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-success-subtle text-success">+ $53.23</span>
                    </div>
                  </div>
                </div>
                <div className="pb-0 sales-history">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-primary rounded-circle fs-3">
                        <i className="las la-store-alt fs-22" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3 overflow-hidden">
                      <h5 className="fs-15 mb-1 text-truncate">Office Rent</h5>
                      <p className="fs-14 text-muted text-truncate mb-0">12 Arl, 2022</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="badge fs-12 bg-success-subtle text-success">+ $42.63</span>
                    </div>
                  </div>
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
)}

export default DashboardComponent