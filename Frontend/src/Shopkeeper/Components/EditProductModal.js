import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditProductModal = (props) => {
    const set=(event)=>{props.setobj({...props.obj,[event.target.name]:event.target.value})}
    const navigate=useNavigate()
    const updateproduct=async(e)=>{
        try {
            e.preventDefault()
            props.setloading(true)
            const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
            if(!userinfo || !userinfo.Authorization){
                localStorage.clear();
                alert("Unauthorised user")
                window.history.replaceState(null,null,"/")
                return navigate("/",{replace:true})
            }
            const response=await fetch("http://localhost:3010/api/updateproduct/"+props.id,{
                method:"put",
                body:JSON.stringify(props.obj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":userinfo.Authorization
                }
            })
            const result=await response.json()
            alert(result?.message)
            if(response.status===202){await props.getallproducts(userinfo.Authorization);props.setToggle(false);props.setid(null);props.setobj({})}
            props.setloading(false)
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
                            <h5 className="modal-title" id="createMemberLabel">Edit Product</h5>
                            <button type="button" onClick={()=>props.setToggle(false)}  className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body p-4">
                            <form onSubmit={updateproduct}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row mb-3">
                                           <div className="col-lg-6">
                                                <label htmlFor="Name" className="form-label">Product Name</label>
                                                <input type="text" name='name' onChange={set} value={props?.obj?.name?props?.obj?.name:""} className="form-control" id="Name" placeholder="Enter Product Name" />
                                           </div>
                                           <div className="col-lg-6">
                                                <label htmlFor="Model" className="form-label">Product Model</label>
                                                <input type="text" name="model" onChange={set} value={props?.obj?.model?props?.obj?.model:""} className="form-control" id="Model" placeholder="Enter Product Model" />
                                           </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="Description" className="form-label">Description</label>
                                                <input type="text" className="form-control" onChange={set} value={props?.obj?.description?props?.obj?.description:""} name='description' id="Description" placeholder="Enter Description" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Company" className="form-label">Company</label>
                                                <input type="text" className="form-control" onChange={set} value={props?.obj?.company?props?.obj?.company:""} name='company' id="Company" placeholder="Enter Company" />
                                            </div>
                                           </div>
                                           <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <label htmlFor="Rate" className="form-label">Rate(₹)</label>
                                                <input type="number" className="form-control" onChange={set} value={props?.obj?.rate?props?.obj?.rate:""} name='rate' id="Rate" placeholder="Enter Rate" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Price" className="form-label">Price(₹)</label>
                                                <input type="number" name='price' className="form-control" onChange={set} value={props?.obj?.price?props?.obj?.price:""} id="Price" placeholder="Enter Price" />
                                            </div>
                                           </div>
                                           <div className="row mb-3">
                                            <div className="col-lg-4">
                                                <label htmlFor="Discount" className="form-label">Discount(%)</label>
                                                <input type="number" className="form-control" name='discount' onChange={set} value={props?.obj?.discount?props?.obj?.discount:""} id="Discount" placeholder="Enter Discount" />
                                            </div>
                                            <div className="col-lg-4">
                                                <label htmlFor="Tax" className="form-label">Tax(%)</label>
                                                <input type="number" name='tax' className="form-control" id="Tax" onChange={set} value={props?.obj?.tax?props?.obj?.tax:""} placeholder="Enter Tax" />
                                            </div>
                                            <div className="col-lg-4">
                                                <label htmlFor="Stock" className="form-label">Stock</label>
                                                <input type="number" name='stock' className="form-control" id="Stock" onChange={set} value={props?.obj?.stock?props?.obj?.stock:""} placeholder="Enter Stock" />
                                            </div>
                                           </div>
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" onClick={()=>props.setToggle(false)} >Close</button>
                                            <button type="submit" disabled={props.loading} className="btn btn-success" id="addNewMember">{props.loading?"Updating...":"Update Product"}</button>
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