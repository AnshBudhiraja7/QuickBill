import React from 'react'

const CreateAccountModal = (props) => {
    return (
    <div>
        <div className="modal fade show" style={{display:"block"}} id="addtaxModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Add User</h5>
                            <button onClick={()=>props.fun(false)} type="button" className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="Name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="Phone" className="form-label">Phone</label>
                                            <input type="tel" className="form-control" id="Phone" placeholder="Enter Phone" />
                                        </div>
                                        </div>
                                        <div className="mb-3 row">
                                          <div className="col-6">
                                            <label htmlFor="Email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="Email" placeholder="Enter Email" />
                                          </div>
                                          <div className="col-6">
                                            <label htmlFor="Password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="Password" placeholder="Enter Password" />
                                          </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="Address" placeholder="Enter Address" />
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mb-4">
                                                    <label htmlFor="City" className="form-label">City/Town</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select City/Town</option>
                                                        <option value={1}>United States</option>
                                                        <option value={2}>Australia	</option>
                                                        <option value={3}>New Zealand</option>
                                                        <option value={4}>Italy</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-4">
                                                    <label htmlFor="State" className="form-label">State</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select State</option>
                                                        <option value={1}>(any)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mb-4">
                                                    <label htmlFor="region" className="form-label">Account Type:</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-4">
                                                    <input type="radio"/>
                                                    <label style={{marginLeft:"10px"}} htmlFor="country" className="form-label">Shopkeeper</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-4">
                                                   <input  type="radio" name="" id="" />
                                                   <label style={{marginLeft:"10px"}} htmlFor="region" className="form-label">Executive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Name" className="form-label">Tax Rate</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Enter Text Rate" />
                                        </div>
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Add Taxes</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div>
)}

export default CreateAccountModal