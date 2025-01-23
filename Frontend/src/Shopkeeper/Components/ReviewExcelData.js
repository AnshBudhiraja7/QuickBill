import React from 'react'
import Footer from '../../CommonComponents/Footer'
import Title from '../../CommonComponents/Title'

const ReviewExcelData = () => {
  return (
    <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <Title Name={"Product List"} />
                <div className="row pb-4 gy-3">
                    <div className="col-sm-4">
                        <a href="#" className="btn btn-primary addtax-modal"><i className="las la-plus me-1" /> Add Product</a>
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
                                    <table className="table table-nowrap align-middle mb-0">
                                        <thead>
                                            <tr className="text-muted text-uppercase">
                                                <th style={{ width: 50 }}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option" />
                                                    </div>
                                                </th>
                                                <th scope="col" style={{ width: 500 }}>Product Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">In Stock</th>
                                                <th scope="col">Rate</th>
                                                <th scope="col" style={{ width: '16%' }}>Price</th>
                                                <th scope="col" style={{ width: '6%' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-1.png" className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">World's most expensive t shirt</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Fashion</td>
                                                <td>65 / 125</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />3.9</span>
                                                </td>
                                                <td><div>$742.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-2.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Urban Ladder Pashe Chair</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Furniture</td>
                                                <td>122 / 232</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />4.1</span>
                                                </td>
                                                <td><div>$852.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-3.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">350 ml Glass Grocery Container</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Grocery</td>
                                                <td>14 / 36</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />4.3</span>
                                                </td>
                                                <td><div>$125.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-4.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Fabric Dual Tone Living Room Chair</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Furniture</td>
                                                <td>74 / 100</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />2.2</span>
                                                </td>
                                                <td><div>$360.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-5.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Crux Motorsports Helmet</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Accessories</td>
                                                <td>32 / 90</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />3.0</span>
                                                </td>
                                                <td><div>$230.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-6.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Half Sleeve T-Shirts (Blue)</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Fashion</td>
                                                <td>320 / 412</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />3.3</span>
                                                </td>
                                                <td><div>$652.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-7.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Noise Evolve Smartwatch</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Fashion</td>
                                                <td>142 / 230</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />4.5</span>
                                                </td>
                                                <td><div>$332.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-eye fs-18 align-middle me-2 text-muted" />
                                                                    View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"  ><i className="las la-pen fs-18 align-middle me-2 text-muted" />
                                                                    Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"  ><i className="las la-file-download fs-18 align-middle me-2 text-muted" />
                                                                    Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />
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
                                                        <input className="form-check-input" type="checkbox" id="check1" defaultValue="option" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-3 avatar-sm">
                                                            <div className="avatar-title bg-light rounded"> <img src="assets/images/products/img-8.png"   className="avatar-xs" /> </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-16 mb-1">Sweatshirt for Men (Pink)</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Fashion</td>
                                                <td>322 / 423</td>
                                                <td>
                                                    <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1" />3.2</span>
                                                </td>
                                                <td><div>$463.00</div></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="las la-ellipsis-h align-middle fs-18" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <button className="dropdown-item"><i className="las la-eye fs-18 align-middle me-2 text-muted" />View</button>
                                                            </li>
                                                            <li>
                                                                <button className="dropdown-item"><i className="las la-pen fs-18 align-middle me-2 text-muted" />Edit</button>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item"><i className="las la-file-download fs-18 align-middle me-2 text-muted" /> Download</a>
                                                            </li>
                                                            <li className="dropdown-divider" />
                                                            <li>
                                                                <a className="dropdown-item remove-item-btn" href="#">
                                                                    <i className="las la-trash-  fs-18 align-middle me-2 text-muted" />Delete
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
  )
}

export default ReviewExcelData
