import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductModal = (props) => {
    const[obj,setobj]=useState({})
    const[loading,setloading]=useState(false)
    const navigate=useNavigate()
    const set=(event)=>setobj({...obj,[event.target.name]:event.target.value})
    const addproduct=async(e)=>{
        try {
            e.preventDefault()
            setloading(true)
            const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
            if(!userinfo || !userinfo.Authorization){
                localStorage.clear();
                alert("Unauthorised user")
                window.history.replaceState(null,null,"/")
                return navigate("/",{replace:true})
            }
            const response=await fetch("http://localhost:3010/api/addproduct",{
                method:"post",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":userinfo.Authorization
                }
            })
            const result=await response.json()
            alert(result?.message)
            if(response.status===201){await props.getallproducts(userinfo.Authorization);props.setToggle(false)}
            setloading(false)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later.")
        }
    }
    return (
        <div>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show" style={{display:"block"}} id="addpaymentModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Add Product</h5>
                            <button type="button" onClick={()=>props.setToggle(false)}  className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body p-4">
                            <form onSubmit={addproduct}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="Name" className="form-label">Product Name</label>
                                                <input type="text" name='name' onChange={set} className="form-control" id="Name" placeholder="Enter Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Model" className="form-label">Product Model</label>
                                                <input type="text" name='model' onChange={set} className="form-control" id="Model" placeholder="Enter Model" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="Description" className="form-label">Product Description</label>
                                                <input type="text" name='description' onChange={set} className="form-control" id="Description" placeholder="Enter Description" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Company" className="form-label">Product Company</label>
                                                <input type="text" name='company' onChange={set} className="form-control" id="Company" placeholder="Enter Company" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="Rate" className="form-label">Rate(₹)</label>
                                                <input type="number" name='rate' onChange={set} className="form-control" id="Rate" placeholder="Enter Rate" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Price" className="form-label">Price(₹)</label>
                                                <input type="number" name='price' onChange={set} className="form-control" id="Price" placeholder="Enter Price" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-4">
                                                <label htmlFor="Discount" className="form-label">Discount(%)</label>
                                                <input type="number" name='discount' onChange={set} className="form-control" id="Discount" placeholder="Enter Discount" />
                                            </div>
                                            <div className="col-lg-4">
                                                <label htmlFor="Tax" className="form-label">Tax(%)</label>
                                                <input type="number" name='tax' onChange={set} className="form-control" id="Tax" placeholder="Enter Tax" />
                                            </div>
                                            <div className="col-lg-4">
                                                <label htmlFor="Stock" className="form-label">Stock</label>
                                                <input type="number" name='stock' onChange={set} className="form-control" id="Stock" placeholder="Enter Stock" />
                                            </div>
                                        </div>
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" onClick={()=>props.setToggle(false)} >Close</button>
                                            <button type="submit" disabled={loading} className="btn btn-success" id="addNewMember">{loading?"Adding...":"Add Product"}</button>
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

export default AddProductModal