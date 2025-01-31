import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
const CreateAccountModal = (props) => {
    const[displayotpsection,setdisplayotpsection]=useState(false)
    const[otploading,setotploading]=useState(false)
    const[loading,setloading]=useState(false)
    const[obj,setobj]=useState({})
    const[shopkeepers,setshopkeepers]=useState([])
    const[otp,setotp]=useState('')
    const[data,setdata]=useState({})
    const navigate=useNavigate()
    const getallshopkeepers=async(token)=>{
        try {
            const response=await fetch("http://localhost:3010/api/getallshopkeepers",{
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            const result=await response.json()
            if(response.status===202) setshopkeepers(result.data)
            else alert(result?.message)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later")
        }
    }
    const getallcityandstate=async(token)=>{
        try {
        const response=await fetch("http://localhost:3010/api/getallcitiesandstates",{
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        const result=await response.json()
        if(response.status===202)setdata(result.data)
        else alert(result?.message)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later") 
        }
    }
    useEffect(()=>{
            const getdata=async()=>{
            const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
            if(userinfo && userinfo.Authorization){
                await getallshopkeepers(userinfo.Authorization)
                return await getallcityandstate(userinfo.Authorization)
            }
            localStorage.clear()
            return navigate("/")
            }
            getdata()
    },[])
    const set=(event)=>setobj({...obj,[event.target.name]:event.target.value})    
    const sendotp=async(e)=>{
        try {
            e.preventDefault()
            setotploading(true)
            const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
            if(!userinfo || !userinfo.Authorization){
                localStorage.clear();
                alert("Unauthorised user")
                window.history.replaceState(null,null,"/")
                return navigate("/",{replace:true})
            }
            const response=await fetch("http://localhost:3010/api/verifyuser",{
                method:"post",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":userinfo.Authorization
                }
            })
            const result=await response.json()
            alert(result?.message)
            if(response.status===202){
                setdisplayotpsection(true)
            }
            setotploading(false)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later")
        }
    }
    const submit=async(e)=>{
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
            const response=await fetch("http://localhost:3010/api/createuser",{
                method:"post",
                body:JSON.stringify({...obj,otp}),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":userinfo.Authorization
                }
            })
            const result=await response.json()
            alert(result?.message)
            if(response.status===201){
                props.fun(false)
                props.getallusers(userinfo.Authorization)
            }
            setloading(false)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later")
        }
    }    
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
                        {displayotpsection?<form onSubmit={submit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label htmlFor="OTP" className="form-label">OTP is sent on the given email address:-</label>
                                        <input type="number" onChange={(event)=>setotp(event.target.value)} className="form-control" id="OTP" placeholder="Enter OTP" />
                                    </div>
                                    <div className="hstack gap-2 justify-content-end">
                                        <button type="button" onClick={()=>props.fun(false)} className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" disabled={loading} className="btn btn-success" id="addNewMember">{loading?"Creating...":"Create User"}</button>
                                    </div>
                                </div>
                            </div>
                        </form>:<form onSubmit={sendotp}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="Name" className="form-label">Name</label>
                                            <input type="text" className="form-control" onChange={set} name='name' id="Name" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="Phone" className="form-label">Phone</label>
                                            <input type="tel" className="form-control" onChange={set} name='phone' id="Phone" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                          <div className="col-6">
                                            <label htmlFor="Email" className="form-label">Email</label>
                                            <input type="email" className="form-control" onChange={set} name='email' id="Email" placeholder="Enter Email" />
                                          </div>
                                          <div className="col-6">
                                            <label htmlFor="Password" className="form-label">Password</label>
                                            <input type="password" className="form-control" onChange={set} name='password' id="Password" placeholder="Enter Password" />
                                          </div>
                                    </div>
                                        <div className="mb-3">
                                            <label htmlFor="Address" className="form-label">Address</label>
                                            <input type="text" className="form-control" onChange={set} name='address' id="Address" placeholder="Enter Address" />
                                        </div>
                                        <div className="row">
                                            {
                                                data && Object.keys(data).length!==0 && <div className="col-6">
                                                <div className="mb-4">
                                                    <label htmlFor="State" className="form-label">State</label>
                                                    <select className="form-select" onChange={set} name='state' aria-label="Default select example">
                                                        <option value="None">Select State</option>
                                                        {Object.keys(data)?.map((state,index)=><option key={index} value={state}>{state}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            }
                                            {
                                                data && Object.keys(data).length!==0 && obj?.state && obj?.state!=="None" && <div className="col-6">
                                                <div className="mb-4">
                                                    <label htmlFor="City" className="form-label">City/Town</label>
                                                    <select className="form-select" onChange={set} name='city' aria-label="Default select example">
                                                        <option value="None">Select City/Town</option>
                                                        {data[obj?.state]?.map((city,index)=><option key={index} value={city}>{city}</option>)}
                                                    </select>
                                                </div>
                                                </div>
                                            }
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="mb-4">
                                                    <label htmlFor="region" className="form-label">Account Type:</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-4">
                                                    <input type="radio" id='Shopkeeper' onChange={set} value="Shopkeeper" name='role'/>
                                                    <label style={{marginLeft:"10px"}} htmlFor="Shopkeeper" className="form-label">Shopkeeper</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="mb-4">
                                                   <input type="radio" id='Executive' onChange={set} value="Executive" name="role"/>
                                                   <label style={{marginLeft:"10px"}} htmlFor="Executive" className="form-label">Executive</label>
                                                </div>
                                            </div>
                                        </div>
                                        {obj?.role==="Executive" && shopkeepers && shopkeepers.length!==0 && <div className="col-12">
                                            <div className="mb-4">
                                                <label htmlFor="Executiveof" className="form-label">Executive of</label>
                                                <select className="form-select" onChange={set} name='executiveof' aria-label="Default select example">
                                                    <option value="None">Select Shopkeeper</option>
                                                    {shopkeepers?.map((shopkeeper,index)=><option key={index} value={shopkeeper?._id}>{shopkeeper?.email}</option>)}
                                                </select>
                                            </div>
                                        </div>}
                                        <div className="hstack gap-2 justify-content-center">
                                            <button type="button" onClick={()=>props.fun(false)} className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" disabled={otploading} className="btn btn-success" id="addNewMember">{otploading?"Sending...":"Send OTP"}</button>
                                        </div>
                                </div>
                            </div>
                        </form>}
                        </div>
                    </div>
                </div>
        </div>
        <div className="modal-backdrop fade show"></div>
    </div>
)}

export default CreateAccountModal