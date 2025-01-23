import React from 'react'

const EditProductModal = (props) => {
    return (
        <div>
            <div class="modal-backdrop fade show"></div>
            <div className="modal fade show" style={{display:"block"}} id="addpaymentModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Edit Product</h5>
                            <button type="button" onClick={()=>props.setToggle(false)}  className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label htmlFor="Name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="paymentdetails" className="form-label">Payment Details</label>
                                            <textarea className="form-control" placeholder="Enter Payment Description" id="paymentdetails" defaultValue={""} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="amount" className="form-label">Amount</label>
                                            <input type="number" className="form-control" id="amount" placeholder="Enter Amount" />
                                        </div>
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" onClick={()=>props.setToggle(false)} >Close</button>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Add Customer</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProductModal