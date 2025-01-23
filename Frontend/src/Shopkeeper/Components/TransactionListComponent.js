import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../../CommonComponents/Footer"
import Title from "../../CommonComponents/Title"
const TransactionListComponent = () => {
return(
<div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <Title Name="Transaction"/>
      <div className="row pb-4 gy-3">
        <div className="col-sm-4">
          <Link to={'/AddTransaction'} className="btn btn-primary"><i className="las la-plus me-1" />Add Transaction</Link>
        </div>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-3">
            <div className="search-box">
              <input type="text" className="form-control" id="searchMemberList" placeholder="Search for result" />
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
              <div className="table-responsive table-card">
                <table className="table table-hover table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="text-muted text-uppercase">
                      <th scope="col">Transaction Id</th>
                      <th scope="col">Date</th>
                      <th scope="col">Description</th>
                      <th scope="col">Credit / Debit</th>
                      <th scope="col">Amount</th>
                      <th scope="col" style={{width: '12%'}}>Attachment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#BR2150</td>
                      <td>20 Sep, 2022</td>
                      <td>Maintenance</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$1200.00</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>#BR2151</td>
                      <td>12 Arl, 2022</td>
                      <td>Flight Booking</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$3600.00</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>#BR2152</td>
                      <td>28 Mar, 2022</td>
                      <td>Office Rent</td>
                      <td><span className="badge bg-danger-subtle text-danger  p-2">Debit</span></td>
                      <td>$800.00</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>#BR2153</td>
                      <td>23 Aug, 2022</td>
                      <td>Salary Payment</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$1600.00</td>
                      <td>
                        <button type="button" className="btn btn-soft-success btn-sm btn-icon fs-14">
                          <i className="las la-download fs-18" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#BR2154</td>
                      <td>18 Sep, 2022</td>
                      <td>Salary Payment</td>
                      <td><span className="badge bg-danger-subtle text-danger  p-2">Debit</span></td>
                      <td>$3200.00</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>#BR2155</td>
                      <td>12 Feb, 2022</td>
                      <td>Maintenance</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$900.00</td>
                      <td>
                        <button type="button" className="btn btn-soft-success btn-sm btn-icon fs-14">
                          <i className="las la-download fs-18" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#BR2156</td>
                      <td>30 Nov, 2022</td>
                      <td>Online Product</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$200.00</td>
                      <td>
                        <button type="button" className="btn btn-soft-success btn-sm btn-icon fs-14">
                          <i className="las la-download fs-18" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#BR2157</td>
                      <td>23 Sep, 2022</td>
                      <td>Office Rent</td>
                      <td><span className="badge bg-danger-subtle text-danger  p-2">Debit</span></td>
                      <td>$1200.00</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>#BR2158</td>
                      <td>16 Aug, 2022</td>
                      <td>Online Product</td>
                      <td><span className="badge bg-success-subtle text-success  p-2">Credit</span></td>
                      <td>$1800.00</td>
                      <td>N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-4 gy-3">
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
<Footer/>
</div>
)}

export default TransactionListComponent