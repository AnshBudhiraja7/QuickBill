import React from 'react'
import Footer from '../../CommonComponents/Footer'
import Title from '../../CommonComponents/Title'

const ReviewInvoices = () => {
  return (
    <div className="main-content">
    <div className="page-content">
        <div className="container-fluid">
            <Title Name={"Invoices Details"} />
            <div className="row justify-content-center">
                <div className="col-xxl-9">
                    <div className="card" id="demo">
                        <div className="card-body">
                            <div className="row p-4">
                                <div className="col-lg-9">
                                    <h3 className="fw-bold mb-4">Invoice: Lezeco-00335 </h3>
                                    <div className="row g-4">
                                        <div className="col-lg-6 col-6">
                                            <p className="text-muted mb-1 text-uppercase fw-medium fs-14">Invoice No</p>
                                            <h5 className="fs-16 mb-0">#VL<span id="invoice-no">25000355</span></h5>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <p className="text-muted mb-1 text-uppercase fw-medium fs-14">Date</p>
                                            <h5 className="fs-16 mb-0"><span id="invoice-date">23 Nov, 2021</span> <small className="text-muted" id="invoice-time">02:36PM</small></h5>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <p className="text-muted mb-1 text-uppercase fw-medium fs-14">Payment Status</p>
                                            <span className="badge bg-success-subtle text-success fs-11" id="payment-status">Paid</span>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <p className="text-muted mb-1 text-uppercase fw-medium fs-14">Total Amount</p>
                                            <h5 className="fs-16 mb-0">$<span id="total-amount">755.96</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="mt-sm-0 mt-3">
                                        <div className="mb-4">
                                            <img src="assets/images/logo-dark.png" className="card-logo card-logo-dark" alt="logo dark" height={17} />
                                            <img src="assets/images/logo-light.png" className="card-logo card-logo-light" alt="logo light" height={17} />
                                        </div>
                                        <h6 className="text-muted text-uppercase fw-semibold">Address</h6>
                                        <p className="text-muted mb-1" id="address-details">California, United States</p>
                                        <p className="text-muted mb-1" id="zip-code"><span>Zip-code:</span> 90201</p>
                                        <h6><span className="text-muted fw-normal">Email:</span><span id="email">Invoika@themesbrand.com</span></h6>
                                        <h6><span className="text-muted fw-normal">Website:</span> <a href="https://themesbrand.com/" className="link-primary" target="_blank" id="website">www.themesbrand.com</a></h6>
                                        <h6 className="mb-0"><span className="text-muted fw-normal">Contact No: </span><span id="contact-no"> +(01) 234 6789</span></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-4 border-top border-top-dashed">
                                <div className="col-lg-9">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <h6 className="text-muted text-uppercase fw-semibold mb-3">Billing Address</h6>
                                            <p className="fw-medium mb-2" id="billing-name">David Nichols</p>
                                            <p className="text-muted mb-1" id="billing-address-line-1">305 S San Gabriel Blvd</p>
                                            <p className="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(123) 456-7890</span></p>
                                            <p className="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span> </p>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="text-muted text-uppercase fw-semibold mb-3">Shipping Address</h6>
                                            <p className="fw-medium mb-2" id="shipping-name">David Nichols</p>
                                            <p className="text-muted mb-1" id="shipping-address-line-1">305 S San Gabriel Blvd</p>
                                            <p className="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(123) 456-7890</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h6 className="text-muted text-uppercase fw-semibold mb-3">Total Amount</h6>
                                    <h3 className="fw-bold mb-2">$755.96</h3>
                                    <span className="badge bg-success-subtle text-success fs-12">Due Date: 23 Des, 2022</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card-body p-4">
                                        <div className="table-responsive">
                                            <table className="table table-borderless text-center table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr className="table-active">
                                                        <th scope="col" style={{ width: 50 }}>#</th>
                                                        <th scope="col">Product Details</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col" className="text-end">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="products-list">
                                                    <tr>
                                                        <th scope="row">01</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Sweatshirt for Men (Pink)</span>
                                                            <p className="text-muted mb-0">Graphic Print Men &amp; Women Sweatshirt</p>
                                                        </td>
                                                        <td>$119.99</td>
                                                        <td>02</td>
                                                        <td className="text-end">$239.98</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">02</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Noise NoiseFit Endure Smart Watch</span>
                                                            <p className="text-muted mb-0">32.5mm (1.28 Inch) TFT Color Touch Display</p>
                                                        </td>
                                                        <td>$94.99</td>
                                                        <td>01</td>
                                                        <td className="text-end">$94.99</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">03</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">350 ml Glass Grocery Container</span>
                                                            <p className="text-muted mb-0">Glass Grocery Container (Pack of 3, White)</p>
                                                        </td>
                                                        <td>$24.99</td>
                                                        <td>01</td>
                                                        <td className="text-end">$24.99</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">04</th>
                                                        <td className="text-start">
                                                            <span className="fw-medium">Fabric Dual Tone Living Room Chair</span>
                                                            <p className="text-muted mb-0">Chair (White)</p>
                                                        </td>
                                                        <td>$340.00</td>
                                                        <td>01</td>
                                                        <td className="text-end">$340.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="border-top border-top-dashed mt-2">
                                            <table className="table table-borderless table-nowrap align-middle mb-0 ms-auto" style={{ width: 250 }}>
                                                <tbody>
                                                    <tr>
                                                        <td>Sub Total</td>
                                                        <td className="text-end">$699.96</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Estimated Tax (12.5%)</td>
                                                        <td className="text-end">$44.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discount <small className="text-muted">(Invoika15)</small></td>
                                                        <td className="text-end">- $53.99</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping Charge</td>
                                                        <td className="text-end">$65.00</td>
                                                    </tr>
                                                    <tr className="border-top border-top-dashed fs-15">
                                                        <th scope="row">Total Amount</th>
                                                        <th className="text-end">$755.96</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                                            <p className="text-muted mb-1">Payment Method: <span className="fw-medium" id="payment-method">Mastercard</span></p>
                                            <p className="text-muted mb-1">Card Holder: <span className="fw-medium" id="card-holder-name">David Nichols</span></p>
                                            <p className="text-muted mb-1">Card Number: <span className="fw-medium" id="card-number">xxx xxxx xxxx 1234</span></p>
                                            <p className="text-muted">Total Amount: <span className="fw-medium">$ </span><span id="card-total-amount">755.96</span></p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="alert alert-info">
                                                <p className="mb-0"><span className="fw-semibold">NOTES:</span>
                                                    <span id="note">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
                                                        credit card or direct payment online. If account is not paid within 7
                                                        days the credits details supplied as confirmation of work undertaken
                                                        will be charged the agreed quoted fee noted above.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                            <a className="btn btn-info"><i className="ri-printer-line align-bottom me-1" /> Print</a>
                                            <a className="btn btn-primary"><i className="ri-download-2-line align-bottom me-1" /> Download</a>
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
  )
}

export default ReviewInvoices
